/* ==========================================================
   EXPORT ENGINE
========================================================== */


/* ----------------------------------------------------------
   CONVERT HOTO RESPONSE TO OUTPUT TEXT
---------------------------------------------------------- */

function formatScopeResponse(scope, elevation) {

    let result = "";

    if (scope === "Yes") {

        result = "LS Scope";

    }
    else if (scope === "Cx") {

        result = "Cx Scope";

    }
    else if (scope === "No") {

        result = "Not in Scope";

    }
    else {

        result = "";

    }


    if (
        elevation &&
        elevation.toString().trim() !== ""
    ) {

        result +=
            "\nElv - " +
            elevation.toString().trim();

    }

    return result;

}

function buildExportData() {

    const rows = [];


    QUESTION_BANK.forEach(question => {

        const row = {

            category:
                question.category,

            question:
                question.question,

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
                    response.elevation
                );

        });


        rows.push(row);

    });


    return rows;

}

function getQuestionResponse(question, room) {

    const questionResponses =
        responses[question.id];

    if (!questionResponses) {

        return {
            scope: "",
            elevation: ""
        };

    }

    const roomResponse =
        questionResponses[room];

    if (!roomResponse) {

        return {
            scope: "",
            elevation: ""
        };

    }

    return {

        scope: roomResponse.scope || "",

        elevation: roomResponse.elevation || ""

    };

}

function exportExcel() {

    const data =
        buildExportData();

    const headers = [
        "Category",
        "Question",
        ...selectedRooms
    ];


    const excelRows = data.map(row => {

        const output = [
            row.category,
            row.question
        ];


        selectedRooms.forEach(room => {

            output.push(
                row.rooms[room] || ""
            );

        });


        return output;

    });


    const worksheet =
        XLSX.utils.aoa_to_sheet([
            headers,
            ...excelRows
        ]);


    /* ------------------------------------------------------
       COLUMN WIDTHS
    ------------------------------------------------------ */

    worksheet["!cols"] = [

        {
            wch: 18
        },

        {
            wch: 55
        },

        ...selectedRooms.map(() => ({
            wch: 22
        }))

    ];


    /* ------------------------------------------------------
       ROW HEIGHTS
    ------------------------------------------------------ */

    worksheet["!rows"] =
        excelRows.map(() => ({
            hpt: 36
        }));


    /* ------------------------------------------------------
       HEADER STYLE
    ------------------------------------------------------ */

    const range =
        XLSX.utils.decode_range(
            worksheet["!ref"]
        );


    for (
        let col = range.s.c;
        col <= range.e.c;
        col++
    ) {

        const cell =
            worksheet[
                XLSX.utils.encode_cell({
                    r: 0,
                    c: col
                })
            ];


        if (cell) {

            cell.s = {

                font: {
                    bold: true,
                    color: "FFFFFF"
                },

                fill: {
                    fgColor: {
                        rgb: "1F4E79"
                    }
                },

                alignment: {
                    horizontal: "center",
                    vertical: "center"
                }

            };

        }

    }


    /* ------------------------------------------------------
       WORKBOOK
    ------------------------------------------------------ */

    const workbook =
        XLSX.utils.book_new();


    XLSX.utils.book_append_sheet(
        workbook,
        worksheet,
        "HOTO"
    );


    /* ------------------------------------------------------
       PRINT SETTINGS
    ------------------------------------------------------ */

    worksheet["!pageSetup"] = {

        orientation: "landscape",

        paperSize: 9,

        fitToWidth: 1,

        fitToHeight: 0

    };


    XLSX.writeFile(
        workbook,
        getExportFileName("xlsx")
    );

}

function exportPDF() {

    const data =
        buildExportData();


    const {
        jsPDF
    } = window.jspdf;


    const doc =
        new jsPDF({

            orientation: "landscape",

            unit: "mm",

            format: "a4"

        });


    const headers = [
        "Category",
        "Question",
        ...selectedRooms
    ];


    const body =
        data.map(row => {

            return [

                row.category,

                row.question,

                ...selectedRooms.map(
                    room =>
                        row.rooms[room] || ""
                )

            ];

        });


    doc.setFontSize(16);

    doc.text(
        "Interior Project HOTO",
        14,
        15
    );


    doc.setFontSize(9);

    doc.text(
        `Project: ${getProjectNameForExport()}`,
        14,
        22
    );


    doc.autoTable({

        head: [headers],

        body: body,

        startY: 28,

        theme: "grid",

        styles: {

            fontSize: 7,

            cellPadding: 2,

            valign: "middle"

        },

        headStyles: {

            fillColor: [
                31,
                78,
                121
            ],

            textColor: 255,

            fontStyle: "bold",

            halign: "center"

        },

        columnStyles: {

            0: {
                cellWidth: 28
            },

            1: {
                cellWidth: 75
            }

        }

    });


    doc.save(
        getExportFileName("pdf")
    );

}

function getExportFileName(extension) {

    const projectName =
        document.getElementById("projectName")
            ?.value
            ?.trim() || "Project";


    const cleanName =
        projectName
            .replace(/[^a-z0-9]/gi, "_");


    return `HOTO_${cleanName}.${extension}`;

}
function getProjectNameForExport() {

    return (
        document
            .getElementById("projectName")
            ?.value
            ?.trim()
        || "Project"
    );

}
document
    .getElementById("exportExcelBtn")
    .addEventListener(
        "click",
        exportExcel
    );


document
    .getElementById("exportPdfBtn")
    .addEventListener(
        "click",
        exportPDF
    );
