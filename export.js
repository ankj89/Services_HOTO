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
   DRAWING STATUS
   ============================================================ */

function isDrawingMissing(drawing) {

    return (
        !drawing ||
        drawing.toString().trim() === "" ||
        drawing === "No"
    );

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


    /* --------------------------------------------------------
       SCOPE
    -------------------------------------------------------- */

    if (scope === "Yes") {

        result = "LS Scope";

    }
    else if (scope === "Cx") {

        result = "Cx Scope";

    }
    else if (scope === "No") {

        result = "Not in Scope";

    }


    /* --------------------------------------------------------
       DRAWING
    -------------------------------------------------------- */

    if (drawing === "Yes") {

        result +=
            (result ? "\n" : "") +
            "Dwg - Yes";

    }
    else {

        result +=
            (result ? "\n" : "") +
            "Dwg - No";

    }


    /* --------------------------------------------------------
       ELEVATION
    -------------------------------------------------------- */

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

            rooms: {},

            drawingMissing: {}

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


            row.drawingMissing[room] =
                isDrawingMissing(
                    response.drawing
                );

        });


        rows.push(row);

    });


    return rows;

}


/* ============================================================
   BUILD ACTION SUMMARY
   ============================================================

   EXACT OUTPUT COLUMNS:

   Room
   Category
   Requirement
   BOQ Impact

   Rules:

   Yes
       -> BOQ rule engine

   Cx
       -> Coordination with Cx

   No
       -> No row

   Drawing missing
       -> Highlight row
       -> BOQ logic remains unchanged
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
               NO SCOPE = NO ACTION SUMMARY ROW
            ------------------------------------------------ */

            if (response.scope === "No") {
                return;
            }


            /* ------------------------------------------------
               BOQ RULE ENGINE
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


            const drawingMissing =
                isDrawingMissing(
                    response.drawing
                );


            rows.push({

                room:
                    actionRow.room || "",

                category:
                    actionRow.category || "",

                requirement:
                    actionRow.requirement || "",

                boqImpact:
                    actionRow.boqImpact || "",

                drawingMissing:
                    drawingMissing

            });

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


    const info =
        getProjectInformation();


    /* ========================================================
       SHEET 1 — PROJECT INFORMATION
    ======================================================== */

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


    /* Header formatting */

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


    /* --------------------------------------------------------
       HOTO WRAP TEXT
    -------------------------------------------------------- */

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


    /* --------------------------------------------------------
       HIGHLIGHT MISSING DRAWINGS IN HOTO
    -------------------------------------------------------- */

    exportRows.forEach(

        (row, rowIndex) => {

            selectedRooms.forEach(

                (room, roomIndex) => {

                    if (
                        row.drawingMissing[room]
                    ) {

                        const cell =
                            hotoSheet[
                                XLSX.utils.encode_cell({

                                    /*
                                     * +1 because row 0
                                     * is the header
                                     */

                                    r:
                                        rowIndex + 1,

                                    /*
                                     * 0 = Trade
                                     * 1 = Question
                                     * 2+ = Rooms
                                     */

                                    c:
                                        roomIndex + 2

                                })
                            ];


                        if (cell) {

                            cell.s = {

                                fill: {

                                    patternType:
                                        "solid",

                                    fgColor: {

                                        rgb:
                                            "FFC7CE"

                                    }

                                },

                                font: {

                                    color: {

                                        rgb:
                                            "9C0006"

                                    }

                                },

                                alignment: {

                                    vertical:
                                        "top",

                                    wrapText:
                                        true

                                }

                            };

                        }

                    }

                }

            );

        }

    );


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

        ...actionSummaryRows.map(row => [

            row.room,

            row.category,

            row.requirement,

            row.boqImpact

        ])

    ];


    const actionSummarySheet =
        XLSX.utils.aoa_to_sheet(
            actionSummaryData
        );


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


    /* --------------------------------------------------------
       ACTION SUMMARY WRAP TEXT
    -------------------------------------------------------- */

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

                            vertical:
                                "top",

                            wrapText:
                                true

                        }

                    };

                }

            }

        }

    }


    /* --------------------------------------------------------
       HIGHLIGHT ACTION SUMMARY ROWS
       WHERE DRAWING IS MISSING
    -------------------------------------------------------- */

    actionSummaryRows.forEach(

        (row, rowIndex) => {

            if (
                !row.drawingMissing
            ) {

                return;

            }


            /*
             * +1 because row 0 is header
             */

            const excelRow =
                rowIndex + 1;


            for (
                let col = 0;
                col < 4;
                col++
            ) {

                const cell =
                    actionSummarySheet[
                        XLSX.utils.encode_cell({

                            r: excelRow,

                            c: col

                        })
                    ];


                if (cell) {

                    cell.s = {

                        fill: {

                            patternType:
                                "solid",

                            fgColor: {

                                rgb:
                                    "FFC7CE"

                            }

                        },

                        font: {

                            color: {

                                rgb:
                                    "9C0006"

                            }

                        },

                        alignment: {

                            vertical:
                                "top",

                            wrapText:
                                true

                        }

                    };

                }

            }

        }

    );


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
       PAGE 1 — COVER PAGE
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


    doc.setFont(
        undefined,
        "normal"
    );

    doc.setFontSize(18);


    doc.text(

        `${info.projectId || "PID"} — ${
            info.clientName || "Cx Name"
        }`,

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

            /*
             * Highlight HOTO cells where
             * drawing is missing.
             */

            if (

                data.section === "body" &&

                data.column.index >= 2

            ) {

                const exportRow =
                    exportRows[
                        data.row.index
                    ];


                const room =
                    selectedRooms[
                        data.column.index - 2
                    ];


                if (
                    exportRow &&
                    exportRow.drawingMissing &&
                    exportRow.drawingMissing[room]
                ) {

                    data.cell.styles.fillColor =
                        [255, 199, 206];

                    data.cell.styles.textColor =
                        [156, 0, 6];

                }


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

            actionSummaryRows.map(row => [

                row.room,

                row.category,

                row.requirement,

                row.boqImpact

            ]),

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

        },

        didParseCell: function(data) {

            /*
             * Highlight entire Action Summary
             * row when drawing is missing.
             */

            if (

                data.section === "body"

            ) {

                const row =
                    actionSummaryRows[
                        data.row.index
                    ];


                if (
                    row &&
                    row.drawingMissing
                ) {

                    data.cell.styles.fillColor =
                        [255, 199, 206];

                    data.cell.styles.textColor =
                        [156, 0, 6];

                }

            }

        }

    });


    /* ========================================================
       PAGE NUMBERS
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
