/* ============================================================
   SCOPE CAPTURE SYSTEM
   EXPORT.JS
   Excel + PDF Export
   ============================================================ */


/* ============================================================
   PROJECT INFORMATION
   ============================================================ */

function getProjectInformation() {

    return {

        projectId:
            project.projectId ||
            document.getElementById("projectId")?.value ||
            "",

        clientName:
            project.clientName ||
            document.getElementById("clientName")?.value ||
            "",

        city:
            project.city ||
            document.getElementById("city")?.value ||
            "",

        bu:
            project.bu ||
            document.getElementById("bu")?.value ||
            "",

        designerMailId:
            project.designerMailId ||
            document.getElementById("designerMailId")?.value ||
            "",

        rfvId:
            project.rfvId ||
            document.getElementById("rfvId")?.value ||
            "",

        driveLink:
            project.driveLink ||
            document.getElementById("driveLink")?.value ||
            "",

        remarks:
            project.remarks ||
            document.getElementById("remarks")?.value ||
            ""

    };

}


/* ============================================================
   GET RESPONSE
   ============================================================ */

function getQuestionResponse(question, room) {

    const questionResponses =
        responses[question.id];

    if (!questionResponses) {

        return {
            scope: "",
            drawing: "",
            elevation: ""
        };

    }

    const roomResponse =
        questionResponses[room];

    if (!roomResponse) {

        return {
            scope: "",
            drawing: "",
            elevation: ""
        };

    }

    return {

        scope:
            roomResponse.scope || "",

        drawing:
            roomResponse.drawing || "",

        elevation:
            roomResponse.elevation || ""

    };

}


/* ============================================================
   FORMAT ROOM RESPONSE
   ============================================================ */

function formatScopeResponse(
    scope,
    drawing,
    elevation
) {

    let result = "";


    /* SCOPE */

    if (scope === "Yes") {

        result = "LS Scope";

    }
    else if (scope === "Cx") {

        result = "Cx Scope";

    }
    else if (scope === "No") {

        result = "Not in Scope";

    }


    /* DRAWING */

    if (drawing === "Yes") {

        result +=
            (result ? "\n" : "") +
            "Dwg - Yes";

    }
    else if (drawing === "No") {

        result +=
            (result ? "\n" : "") +
            "Dwg - No";

    }


    /* ELEVATION */

    if (
        elevation &&
        elevation.toString().trim() !== ""
    ) {

        result +=
            (result ? "\n" : "") +
            "Elv - " +
            elevation.toString().trim();

    }


    return result;

}


/* ============================================================
   BUILD HOTO EXPORT DATA
   ============================================================ */

function buildExportData() {

    const rows = [];

    QUESTION_BANK.forEach(question => {

        const row = {

            trade:
                question.trade || "",

            question:
                question.question || "",

            rooms: {}

        };


        selectedRooms.forEach(room => {

            const response =
                getQuestionResponse(
                    question,
                    room
                );

            row.rooms[room] =
                formatScopeResponse(
                    response.scope,
                    response.drawing,
                    response.elevation
                );

        });


        rows.push(row);

    });


    return rows;

}


/* ============================================================
   BUILD ACTION SUMMARY
   ============================================================

   OUTPUT COLUMNS:

   Room
   Category
   Requirement
   BOQ Impact

   RULES:

   Yes / LS Scope
       -> Run BOQ rule engine

   Cx
       -> Coordination with Cx

   No
       -> No row

   One row per HOTO requirement.
   ============================================================ */

function buildActionSummary() {

    const rows = [];


    QUESTION_BANK.forEach(question => {

        selectedRooms.forEach(room => {

            const response =
                getQuestionResponse(
                    question,
                    room
                );


            /* ------------------------------------------------
               NO RESPONSE
            ------------------------------------------------ */

            if (!response.scope) {
                return;
            }


            /* ------------------------------------------------
               NO = NO ACTION SUMMARY ROW
            ------------------------------------------------ */

            if (response.scope === "No") {
                return;
            }


            /* ------------------------------------------------
               RUN COMMON BOQ RULE ENGINE
            ------------------------------------------------ */

            if (
                typeof getActionSummaryRow !==
                "function"
            ) {

                console.error(
                    "getActionSummaryRow() is not available."
                );

                return;

            }


            const actionRow =
                getActionSummaryRow(
                    question,
                    room,
                    response.scope
                );


            if (!actionRow) {
                return;
            }


            /* ------------------------------------------------
               ACTION SUMMARY HAS EXACTLY 4 COLUMNS

               Room
               Category
               Requirement
               BOQ Impact

               Trade is intentionally NOT exported.
            ------------------------------------------------ */

            rows.push([

                actionRow.room || "",

                actionRow.category || "",

                actionRow.requirement || "",

                actionRow.boqImpact || ""

            ]);

        });

    });


    return rows;

}


/* ============================================================
   EXCEL
   ============================================================ */

function exportExcel() {

    if (
        typeof XLSX === "undefined"
    ) {

        alert(
            "Excel library is not loaded."
        );

        return;

    }


    const workbook =
        XLSX.utils.book_new();


    /* ========================================================
       SHEET 1 — PROJECT INFORMATION
    ======================================================== */

    const info =
        getProjectInformation();


    const projectData = [

        [
            "Project Information",
            ""
        ],

        [
            "Project ID",
            info.projectId
        ],

        [
            "Client Name",
            info.clientName
        ],

        [
            "City",
            info.city
        ],

        [
            "BU",
            info.bu
        ],

        [
            "Designer Mail ID",
            info.designerMailId
        ],

        [
            "RFV ID",
            info.rfvId
        ],

        [
            "Drive Link (line diagrams, 3D, etc)",
            info.driveLink
        ],

        [
            "Any Remarks",
            info.remarks
        ]

    ];


    const projectSheet =
        XLSX.utils.aoa_to_sheet(
            projectData
        );


    projectSheet["!cols"] = [

        {
            wch: 42
        },

        {
            wch: 80
        }

    ];


    if (projectSheet["A1"]) {

        projectSheet["A1"].s = {

            font: {

                bold: true,

                sz: 16

            }

        };

    }


    for (
        let r = 0;
        r < projectData.length;
        r++
    ) {

        if (
            projectSheet[
                `A${r + 1}`
            ]
        ) {

            projectSheet[
                `A${r + 1}`
            ].s = {

                font: {

                    bold: true

                }

            };

        }

    }


    XLSX.utils.book_append_sheet(

        workbook,

        projectSheet,

        "Project Information"

    );


    /* ========================================================
       SHEET 2 — HOTO
    ======================================================== */

    const exportRows =
        buildExportData();


    const headers = [

        "Trade",

        "Question",

        ...selectedRooms

    ];


    const hotoData = [

        headers

    ];


    exportRows.forEach(row => {

        hotoData.push([

            row.trade,

            row.question,

            ...selectedRooms.map(

                room =>
                    row.rooms[room] || ""

            )

        ]);

    });


    const hotoSheet =
        XLSX.utils.aoa_to_sheet(
            hotoData
        );


    /* COLUMN WIDTHS */

    hotoSheet["!cols"] = [

        {
            wch: 24
        },

        {
            wch: 65
        },

        ...selectedRooms.map(() => ({

            wch: 24

        }))

    ];


    /* WRAP TEXT */

    if (hotoSheet["!ref"]) {

        const range =
            XLSX.utils.decode_range(
                hotoSheet["!ref"]
            );


        for (
            let row = range.s.r;
            row <= range.e.r;
            row++
        ) {

            for (
                let col = range.s.c;
                col <= range.e.c;
                col++
            ) {

                const cell =
                    hotoSheet[
                        XLSX.utils.encode_cell({

                            r: row,

                            c: col

                        })
                    ];


                if (cell) {

                    cell.s = {

                        alignment: {

                            vertical: "top",

                            wrapText: true

                        }

                    };

                }

            }

        }

    }


    XLSX.utils.book_append_sheet(

        workbook,

        hotoSheet,

        "HOTO"

    );


    /* ========================================================
       SHEET 3 — ACTION SUMMARY
    ======================================================== */

    const actionSummaryRows =
        buildActionSummary();


    const actionSummaryData = [

        [

            "Room",

            "Category",

            "Requirement",

            "BOQ Impact"

        ],

        ...actionSummaryRows

    ];


    const actionSummarySheet =
        XLSX.utils.aoa_to_sheet(
            actionSummaryData
        );


    /* COLUMN WIDTHS */

    actionSummarySheet["!cols"] = [

        {
            wch: 24
        },

        {
            wch: 30
        },

        {
            wch: 60
        },

        {
            wch: 80
        }

    ];


    /* WRAP TEXT */

    if (actionSummarySheet["!ref"]) {

        const range =
            XLSX.utils.decode_range(
                actionSummarySheet["!ref"]
            );


        for (
            let row = range.s.r;
            row <= range.e.r;
            row++
        ) {

            for (
                let col = range.s.c;
                col <= range.e.c;
                col++
            ) {

                const cell =
                    actionSummarySheet[
                        XLSX.utils.encode_cell({

                            r: row,

                            c: col

                        })
                    ];


                if (cell) {

                    cell.s = {

                        alignment: {

                            vertical: "top",

                            wrapText: true

                        }

                    };

                }

            }

        }

    }


    XLSX.utils.book_append_sheet(

        workbook,

        actionSummarySheet,

        "Action Summary"

    );


    /* ========================================================
       FILE NAME
    ======================================================== */

    const safeProjectId =

        (

            info.projectId ||

            "Scope_Capture"

        )

        .toString()

        .replace(

            /[^a-zA-Z0-9_-]/g,

            "_"

        );


    XLSX.writeFile(

        workbook,

        `HOTO_${safeProjectId}.xlsx`

    );

}


/* ============================================================
   PDF
   ============================================================ */

function exportPDF() {

    if (
        typeof window.jspdf === "undefined"
    ) {

        alert(
            "PDF library is not loaded."
        );

        return;

    }


    if (
        typeof window.jspdf.jsPDF !==
        "function"
    ) {

        alert(
            "PDF library is not loaded correctly."
        );

        return;

    }


    const {
        jsPDF
    } = window.jspdf;


    const doc =
        new jsPDF({

            orientation: "landscape",

            unit: "mm",

            format: "a4"

        });


    const info =
        getProjectInformation();


    /* ========================================================
       COVER PAGE
    ======================================================== */

    doc.setFont(
        undefined,
        "bold"
    );

    doc.setFontSize(28);

    doc.text(
        "Services HOTO Document",
        148.5,
        70,
        {
            align: "center"
        }
    );


    /* PID + CLIENT NAME */

    doc.setFontSize(18);

    doc.setFont(
        undefined,
        "normal"
    );

    const pid =
        info.projectId ||
        "PID";

    const clientName =
        info.clientName ||
        "Cx Name";


    doc.text(
        `${pid} — ${clientName}`,
        148.5,
        85,
        {
            align: "center"
        }
    );


    /* --------------------------------------------------------
       CONTENTS
    -------------------------------------------------------- */

    doc.setFont(
        undefined,
        "bold"
    );

    doc.setFontSize(18);

    doc.text(
        "Contents",
        148.5,
        115,
        {
            align: "center"
        }
    );


    doc.setFont(
        undefined,
        "normal"
    );

    doc.setFontSize(13);


    const contentsX = 95;

    doc.text(
        "1.  Project Information",
        contentsX,
        130
    );

    doc.text(
        "2.  HOTO Scope Matrix",
        contentsX,
        142
    );

    doc.text(
        "3.  Action Summary",
        contentsX,
        154
    );


    /* ========================================================
       PAGE 2 — PROJECT INFORMATION
    ======================================================== */

    doc.addPage(
        "a4",
        "landscape"
    );


    doc.setFontSize(22);

    doc.setFont(
        undefined,
        "bold"
    );


    doc.text(
        "Project Information",
        14,
        18
    );


    const projectInfoTable = [

        [
            "Project ID",
            info.projectId
        ],

        [
            "Client Name",
            info.clientName
        ],

        [
            "City",
            info.city
        ],

        [
            "BU",
            info.bu
        ],

        [
            "Designer Mail ID",
            info.designerMailId
        ],

        [
            "RFV ID",
            info.rfvId
        ],

        [
            "Drive Link (line diagrams, 3D, etc)",
            info.driveLink
        ],

        [
            "Any Remarks",
            info.remarks
        ]

    ];


    doc.autoTable({

        startY: 28,

        head: [

            [
                "Field",
                "Project Information"
            ]

        ],

        body:
            projectInfoTable,

        theme: "grid",

        styles: {

            fontSize: 10,

            cellPadding: 4,

            valign: "top",

            overflow: "linebreak"

        },

        headStyles: {

            fontStyle: "bold"

        },

        columnStyles: {

            0: {

                cellWidth: 70

            },

            1: {

                cellWidth: 200

            }

        }

    });


    /* ========================================================
       HOTO SCOPE MATRIX
       PAGE 3+
    ======================================================== */

    doc.addPage(
        "a4",
        "landscape"
    );


    const exportRows =
        buildExportData();


    const hotoHead = [

        [

            "Trade",

            "Question",

            ...selectedRooms

        ]

    ];


    const hotoBody =

        exportRows.map(row => [

            row.trade,

            row.question,

            ...selectedRooms.map(

                room =>
                    row.rooms[room] || ""

            )

        ]);


    doc.setFontSize(16);

    doc.setFont(
        undefined,
        "bold"
    );


    doc.text(
        "HOTO Scope Matrix",
        10,
        12
    );


    doc.setFontSize(9);

    doc.setFont(
        undefined,
        "normal"
    );


    doc.text(

        `Project: ${
            info.projectId || ""
        }    |    Client: ${
            info.clientName || ""
        }    |    City: ${
            info.city || ""
        }`,

        10,
        19

    );


    doc.autoTable({

        startY: 24,

        head: hotoHead,

        body: hotoBody,

        theme: "grid",

        repeatHeaders: true,

        styles: {

            fontSize: 7,

            cellPadding: 2,

            valign: "top",

            overflow: "linebreak"

        },

        headStyles: {

            fontStyle: "bold"

        },

        columnStyles: {

            0: {

                cellWidth: 28

            },

            1: {

                cellWidth: 65

            }

        },

        didParseCell: function(data) {

            if (

                data.section === "body" &&

                data.column.index >= 2

            ) {

                data.cell.styles.cellWidth =
                    28;

            }

        }

    });


    /* ========================================================
       ACTION SUMMARY
    ======================================================== */

    const actionSummaryRows =
        buildActionSummary();


    doc.addPage(
        "a4",
        "landscape"
    );


    doc.setFontSize(16);

    doc.setFont(
        undefined,
        "bold"
    );


    doc.text(
        "Action Summary",
        10,
        12
    );


    doc.setFontSize(9);

    doc.setFont(
        undefined,
        "normal"
    );


    doc.text(

        `Project: ${
            info.projectId || ""
        }    |    Client: ${
            info.clientName || ""
        }    |    City: ${
            info.city || ""
        }`,

        10,
        19

    );


    doc.autoTable({

        startY: 24,

        head: [

            [

                "Room",

                "Category",

                "Requirement",

                "BOQ Impact"

            ]

        ],

        body:
            actionSummaryRows,

        theme: "grid",

        repeatHeaders: true,

        styles: {

            fontSize: 8,

            cellPadding: 3,

            valign: "top",

            overflow: "linebreak"

        },

        headStyles: {

            fontStyle: "bold"

        },

        columnStyles: {

            0: {

                cellWidth: 35

            },

            1: {

                cellWidth: 45

            },

            2: {

                cellWidth: 75

            },

            3: {

                cellWidth: 125

            }

        }

    });


    /* ========================================================
       PAGE NUMBERS
       COVER PAGE INCLUDED
    ======================================================== */

    const pageCount =
        doc.internal.getNumberOfPages();


    for (
        let i = 1;
        i <= pageCount;
        i++
    ) {

        doc.setPage(i);

        doc.setFontSize(8);

        doc.setFont(
            undefined,
            "normal"
        );


        doc.text(

            `Page ${i} of ${pageCount}`,

            285,

            202,

            {

                align: "right"

            }

        );

    }


    /* ========================================================
       SAVE
    ======================================================== */

    const safeProjectId =

        (

            info.projectId ||

            "Scope_Capture"

        )

        .toString()

        .replace(

            /[^a-zA-Z0-9_-]/g,

            "_"

        );


    doc.save(

        `HOTO_${safeProjectId}.pdf`

    );

}


/* ============================================================
   BUTTON EVENTS
   ============================================================ */

document.addEventListener(

    "DOMContentLoaded",

    function() {

        const excelBtn =
            document.getElementById(
                "exportExcelBtn"
            );


        const pdfBtn =
            document.getElementById(
                "exportPdfBtn"
            );


        if (excelBtn) {

            excelBtn.addEventListener(

                "click",

                exportExcel

            );

        }


        if (pdfBtn) {

            pdfBtn.addEventListener(

                "click",

                exportPDF

            );

        }

    }

);
