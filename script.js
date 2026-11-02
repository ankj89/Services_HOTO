/* ===========================================================
   SCOPE CAPTURE SYSTEM
   script.js
   PART 1
=========================================================== */


/* ===========================================================
   APPLICATION STATE
=========================================================== */

const project = {};

let selectedRooms = [];

let activeTrade = "";

let activeCategory = "";

let responses = {};

// Category-level scope control
let categoryScope = {};

// Question-level scope control
let questionOutOfScope = {};

// Backup of room responses before overriding scope
let scopeBackup = {};


/* ===========================================================
   DEFAULT ROOM LIBRARY
=========================================================== */

const DEFAULT_ROOMS = [

    "Foyer",
    "Living",
    "Dining",
    "Kitchen",
    "Utility",
    "Master Bedroom",
    "Bedroom 2",
    "Bedroom 3",
    "Puja",
    "Balcony",
    "Terrace",
    "Dress Area",
    "Passage",
    "Store",
    "Servant Room"

];

let customRooms = [];
/* ===========================================================
   APPLICATION START
=========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initialiseApplication();

});


function initialiseApplication(){

    initialiseTabs();

    renderRoomSelection();

    initialiseButtons();

    initialiseQuestionBank();

loadApplication();

}



/* ===========================================================
    QUESTION BANK
=========================================================== */

function initialiseQuestionBank(){

    if(QUESTION_BANK.length===0){

        alert("Question Bank Empty");

        return;

    }

    const trades=[

        ...new Set(

            QUESTION_BANK.map(q=>q.trade)

        )

    ];

    activeTrade=trades[0];

    const categories=[

        ...new Set(

            QUESTION_BANK
                .filter(q=>q.trade===activeTrade)
                .map(q=>q.category)

        )

    ];

    activeCategory=categories[0];

}


/* ===========================================================
   TAB NAVIGATION
=========================================================== */

function initialiseTabs(){

    document
        .querySelectorAll(".tab-btn")
        .forEach(btn=>{

            btn.addEventListener("click",()=>{

                showTab(btn.dataset.tab);

            });

        });

}



function showTab(tabId){

    document
        .querySelectorAll(".tab-content")
        .forEach(tab=>{

            tab.classList.remove("active");

        });

    document
        .querySelectorAll(".tab-btn")
        .forEach(btn=>{

            btn.classList.remove("active");

        });

    document
        .getElementById(tabId)
        .classList.add("active");

    document
        .querySelector(`[data-tab="${tabId}"]`)
        .classList.add("active");

}


/* ===========================================================
   ROOM SELECTION
=========================================================== */

function renderRoomSelection() {

    const container = document.getElementById("roomContainer");

    container.innerHTML = "";

    const rooms = [
        ...DEFAULT_ROOMS,
        ...customRooms
    ];

    rooms.forEach(room => {

        const label = document.createElement("label");

        label.className = "room-item";

        label.innerHTML = `
            <input
                class="room-checkbox"
                type="checkbox"
                value="${room}">

            <span>${room}</span>
        `;

        container.appendChild(label);

    });

}


/* ===========================================================
   BUTTONS
=========================================================== */

function initialiseButtons(){

    document
        .getElementById("projectNextBtn")
        .addEventListener("click",saveProject);

    document
        .getElementById("roomBackBtn")
        .addEventListener("click",()=>{

            showTab("projectTab");

        });

    document
        .getElementById("roomNextBtn")
        .addEventListener("click",generateHOTO);
   
document
.getElementById("addRoomBtn")
.addEventListener("click", addCustomRoom);


}


/* ===========================================================
   PROJECT DETAILS
=========================================================== */

/* ===========================================================
   PROJECT DETAILS
=========================================================== */

function saveProject(){

    project.projectId =
        document.getElementById("projectId").value.trim();

    project.clientName =
        document.getElementById("clientName").value.trim();

    project.city =
        document.getElementById("city").value;

    project.bu =
        document.getElementById("bu").value;

    project.designerMailId =
        document.getElementById("designerMailId").value.trim();

    project.rfvId =
        document.getElementById("rfvId").value.trim();

    project.driveLink =
        document.getElementById("driveLink").value.trim();

    project.remarks =
        document.getElementById("remarks").value.trim();


    const summary =
        document.getElementById("projectSummary");

    if(summary){

        summary.innerHTML = `
            <strong>
                ${project.projectId || "New Project"}
            </strong>
            <br>
            ${project.clientName || ""}
        `;

    }


    saveApplication();

    showTab("roomsTab");

}


/* ===========================================================
   GENERATE HOTO
=========================================================== */

function generateHOTO(){

    selectedRooms=[];

    document
        .querySelectorAll("#roomContainer input[type='checkbox']")
        .forEach(box=>{

            if(box.checked){

                selectedRooms.push(box.value);

            }

        });


    if(selectedRooms.length===0){

        alert("Please select at least one room.");

        return;

    }

    buildNavigationTree();

    renderQuestions(activeTrade,activeCategory);

    showTab("hotoTab");

   saveApplication();

}



/* ===========================================================
   LEFT NAVIGATION
=========================================================== */

/* ===========================================================
   LEFT NAVIGATION
=========================================================== */

function buildNavigationTree() {

    const menu =
        document.getElementById("categoryMenu");

    menu.innerHTML = "";

    const trades = [
        ...new Set(
            QUESTION_BANK.map(q => q.trade)
        )
    ];

    trades.forEach(trade => {

        const tradeWrapper =
            document.createElement("div");

        tradeWrapper.className =
            "trade-wrapper";


        const tradeHeader =
            document.createElement("div");

        tradeHeader.className =
            "trade-header";

        tradeHeader.textContent = trade;

        tradeWrapper.appendChild(
            tradeHeader
        );


        const categoryList =
            document.createElement("ul");

        categoryList.className =
            "category-list";


        const categories = [
            ...new Set(
                QUESTION_BANK
                    .filter(q => q.trade === trade)
                    .map(q => q.category)
            )
        ];


        categories.forEach(category => {

            const li =
                document.createElement("li");

            li.className =
                "category-menu-item";


            if (
                trade === activeTrade &&
                category === activeCategory
            ) {

                li.classList.add("active");

            }


            // CATEGORY SCOPE CHECKBOX

            const checkbox =
                document.createElement("input");

            checkbox.type = "checkbox";

            checkbox.className =
                "category-scope-checkbox";

            checkbox.checked =
                !isCategoryOutOfScope(
                    trade,
                    category
                );


            checkbox.addEventListener(
                "click",
                event => {

                    event.stopPropagation();

                }
            );


            checkbox.addEventListener(
                "change",
                event => {

                    event.stopPropagation();

                    setCategoryScope(
                        trade,
                        category,
                        checkbox.checked
                    );

                }
            );


            // CATEGORY NAME

            const label =
                document.createElement("span");

            label.className =
                "category-menu-label";

            label.textContent = category;


            li.appendChild(checkbox);

            li.appendChild(label);


            li.addEventListener(
                "click",
                () => {

                    activeTrade = trade;

                    activeCategory = category;

                    buildNavigationTree();

                    renderQuestions(
                        activeTrade,
                        activeCategory
                    );

                }
            );


            categoryList.appendChild(li);

        });


        tradeWrapper.appendChild(
            categoryList
        );

        menu.appendChild(
            tradeWrapper
        );

    });

}


/* ===========================================================
   PLACE HOLDERS
   PART 2
=========================================================== */

/* ===========================================================
   PART 2
   QUESTION GRID RENDERING
=========================================================== */

function renderQuestions(trade, category) {

    document.getElementById("categoryTitle").innerText = category;

    const questions = QUESTION_BANK.filter(q =>
        q.trade === trade &&
        q.category === category
    );

    updateCategoryProgress(questions);

    buildTableHeaders();

    buildQuestionRows(questions);

}


/* ===========================================================
   BUILD TABLE HEADER
=========================================================== */

function buildTableHeaders() {

    const table = document.getElementById("scopeTable");

    const thead = table.querySelector("thead");

    thead.innerHTML = "";

    const headerRow = document.createElement("tr");


    // QUESTION

    const questionHeader = document.createElement("th");

    questionHeader.className = "question-header";

    questionHeader.textContent = "Question";

    headerRow.appendChild(questionHeader);


    // DRAWING REQUIREMENT

    const drawingHeader = document.createElement("th");

    drawingHeader.className = "drawing-header";

    drawingHeader.textContent = "Drawing Requirement";

    headerRow.appendChild(drawingHeader);


    // ROOMS

    selectedRooms.forEach(room => {

        const roomHeader = document.createElement("th");

        roomHeader.className = "room-header";

        roomHeader.textContent = room;

        headerRow.appendChild(roomHeader);

    });


    thead.appendChild(headerRow);

}


/* ===========================================================
   BUILD QUESTION ROWS
=========================================================== */

/* ===========================================================
   BUILD QUESTION ROWS
=========================================================== */

function buildQuestionRows(questions) {

    const tbody = document.getElementById("tableBody");

    tbody.innerHTML = "";

    questions.forEach(question => {

        const tr = document.createElement("tr");


        // QUESTION

        const questionCell = document.createElement("td");
       





questionCell.className =
    "question-cell";


const questionWrapper =
    document.createElement("div");

questionWrapper.className =
    "question-wrapper";


/* QUESTION TEXT */

const questionText =
    document.createElement("div");

questionText.className =
    "question-main";

questionText.textContent =
    question.question;

questionWrapper.appendChild(
    questionText
);


/* QUESTION SUBTEXT */

if (
    question.subtext &&
    question.subtext.length
) {

    const subtext =
        document.createElement("div");

    subtext.className =
        "question-subtext";

    question.subtext.forEach(item => {

        const itemElement =
            document.createElement("div");

        itemElement.className =
            "subtext-item";

        itemElement.textContent =
            "• " + item;

        subtext.appendChild(
            itemElement
        );

    });

    questionWrapper.appendChild(
        subtext
    );

}


/* QUESTION-LEVEL SCOPE CHECKBOX */

const scopeLabel =
    document.createElement("label");

scopeLabel.className =
    "question-scope-label";


const scopeCheckbox =
    document.createElement("input");

scopeCheckbox.type =
    "checkbox";

scopeCheckbox.className =
    "question-scope-checkbox";

scopeCheckbox.checked =
    isQuestionOutOfScope(
        question.id
    );


scopeCheckbox.disabled =
    isCategoryOutOfScope(
        question.trade,
        question.category
    );


scopeCheckbox.addEventListener(
    "change",
    () => {

        setQuestionOutOfScope(
            question.id,
            scopeCheckbox.checked
        );

    }
);


const scopeText =
    document.createElement("span");

scopeText.textContent =
    "Not applicable in any room";


scopeLabel.appendChild(
    scopeCheckbox
);

scopeLabel.appendChild(
    scopeText
);


questionWrapper.appendChild(
    scopeLabel
);

questionCell.appendChild(
    questionWrapper
);

tr.appendChild(
    questionCell
);


        // DRAWING REQUIREMENT

        const drawingCell = document.createElement("td");

        drawingCell.className = "drawing-cell";

        drawingCell.textContent =
            question.drawingRequirement || "";

        tr.appendChild(drawingCell);


        // ROOM CELLS

      // ROOM CELLS

selectedRooms.forEach(room => {

    const td =
        document.createElement("td");

    td.className =
        "room-cell";

    td.dataset.question =
        question.id;

    td.dataset.room =
        room;

    td.dataset.level =
        question.level;


    if (
        isForcedOutOfScope(
            question
        )
    ) {

        td.innerHTML = `
            <div class="forced-out-of-scope">
                Not in Scope
            </div>
        `;

    }
    else {

        td.innerHTML =
            createCellEditor(
                question,
                room
            );

    }

    tr.appendChild(td);

});


        tbody.appendChild(tr);

    });


    initialiseInlineEditors();

}

/* ===========================================================
   INLINE CELL RENDERER
=========================================================== */

function createCellEditor(question, room){

    const data = (question.id, room);

    if(question.level === "wall"){

        return buildWallCell(question.id, room, data);

    }

    return buildRoomCell(question.id, room, data);

}


/* ===========================================================
   ROOM LEVEL CELL
=========================================================== */

function buildRoomCell(questionId, room, data){

    return `

    <div class="cell-editor"

         data-question="${questionId}"

         data-room="${room}">


        <div class="cell-group">

            <div class="cell-title">

               LS Scope?

            </div>

            <div class="segment-group"

                 data-field="scope">

                ${segmentButton("Yes",data.scope)}

                ${segmentButton("No",data.scope)}

                ${segmentButton("Cx",data.scope)}

            </div>

        </div>


        <div class="cell-group">

            <div class="cell-title">

                Drawings Provided?

            </div>

            <div class="segment-group"

                 data-field="drawing">

                ${segmentButton("Yes",data.drawing)}

                ${segmentButton("No",data.drawing)}

            </div>

        </div>

    </div>

    `;

}


/* ===========================================================
   WALL LEVEL CELL
=========================================================== */
function buildWallCell(questionId, room, data){

    return `

    <div class="cell-editor"

         data-question="${questionId}"

         data-room="${room}">


        <div class="cell-group">

            <div class="cell-title">

                LS Scope?

            </div>

            <div class="segment-group"

                 data-field="scope">

                ${segmentButton("Yes",data.scope)}

                ${segmentButton("No",data.scope)}

                ${segmentButton("Cx",data.scope)}

            </div>

        </div>


        <div class="cell-group">

            <div class="cell-title">

                Drawings Provided?

            </div>

            <div class="segment-group"

                 data-field="drawing">

                ${segmentButton("Yes",data.drawing)}

                ${segmentButton("No",data.drawing)}

            </div>

        </div>

    </div>
    <div class="cell-group">

    <div class="cell-title">

        Elevation

    </div>

    <input

        class="elevation-input"

        value="${data.elevation || ""}">

</div>

    `;

   

}

function segmentButton(value,current){

    return `

    <button

        type="button"

        class="segment-btn

            ${value===current ? "selected" : ""}"

        data-value="${value}">

        ${value}

    </button>

    `;

}
/* ===========================================================
   GET RESPONSE
=========================================================== */

function getResponse(questionId, room){

    if(!responses[questionId]){

        return {};

    }

    return responses[questionId][room] || {};

}

/* ===========================================================
   SCOPE CONTROL HELPERS
=========================================================== */

function getCategoryKey(trade, category) {
    return `${trade}||${category}`;
}


function isCategoryOutOfScope(trade, category) {

    const key = getCategoryKey(trade, category);

    return categoryScope[key] === false;

}


function isQuestionOutOfScope(questionId) {

    return questionOutOfScope[questionId] === true;

}


function isForcedOutOfScope(question) {

    return (
        isCategoryOutOfScope(
            question.trade,
            question.category
        )
        ||
        isQuestionOutOfScope(question.id)
    );

}


/* ===========================================================
   BACKUP RESPONSES
=========================================================== */

function backupQuestionResponses(questionId) {

    if (!scopeBackup[questionId]) {

        scopeBackup[questionId] =
            JSON.parse(
                JSON.stringify(
                    responses[questionId] || {}
                )
            );

    }

}


/* ===========================================================
   MARK QUESTION OUT OF SCOPE
=========================================================== */

function markQuestionOutOfScope(questionId) {

    backupQuestionResponses(questionId);

    if (!responses[questionId]) {
        responses[questionId] = {};
    }

    selectedRooms.forEach(room => {

        responses[questionId][room] = {

            scope: "No",

            drawing: "No",

            elevation: ""

        };

    });

}


/* ===========================================================
   RESTORE QUESTION RESPONSES
=========================================================== */

function restoreQuestionResponses(questionId) {

    if (scopeBackup[questionId]) {

        responses[questionId] = {

            ...responses[questionId],

            ...scopeBackup[questionId]

        };

        delete scopeBackup[questionId];

    }

}


/* ===========================================================
   CATEGORY SCOPE CONTROL
=========================================================== */

function setCategoryScope(
    trade,
    category,
    inScope
) {

    const key = getCategoryKey(
        trade,
        category
    );

    categoryScope[key] = inScope;

    const questions = QUESTION_BANK.filter(q =>
        q.trade === trade &&
        q.category === category
    );

    questions.forEach(question => {

        if (!inScope) {

            markQuestionOutOfScope(
                question.id
            );

        }
        else {

            // Restore only if question-level
            // scope is not independently disabled.

            if (
                !isQuestionOutOfScope(
                    question.id
                )
            ) {

                restoreQuestionResponses(
                    question.id
                );

            }

        }

    });

    saveApplication();

    buildNavigationTree();

    renderQuestions(
        activeTrade,
        activeCategory
    );

}


/* ===========================================================
   QUESTION SCOPE CONTROL
=========================================================== */

function setQuestionOutOfScope(
    questionId,
    outOfScope
) {

    questionOutOfScope[questionId] =
        outOfScope;

    if (outOfScope) {

        markQuestionOutOfScope(
            questionId
        );

    }
    else {

        const question = QUESTION_BANK.find(
            q => q.id === questionId
        );

        // Category-level Out of Scope
        // must continue to take priority.

        if (
            question &&
            !isCategoryOutOfScope(
                question.trade,
                question.category
            )
        ) {

            restoreQuestionResponses(
                questionId
            );

        }

    }

    saveApplication();

    renderQuestions(
        activeTrade,
        activeCategory
    );

}



/* ===========================================================
   INLINE CELL EVENTS
=========================================================== */

function initialiseInlineEditors(){

    document
        .querySelectorAll(".cell-editor")
        .forEach(editor=>{

            attachCellEvents(editor);

        });

}


/* ===========================================================
   ATTACH EVENTS
=========================================================== */

function attachCellEvents(editor){

    editor

    .querySelectorAll(".segment-btn")

    .forEach(btn=>{

        btn.addEventListener("click",()=>{

            const group=

                btn.parentElement;

            group

                .querySelectorAll(".segment-btn")

                .forEach(item=>

                    item.classList.remove("selected")

                );

            btn.classList.add("selected");

            saveCell(editor);

        });

    });


    const elevation=

        editor.querySelector(".elevation-input");

    if(elevation){

        elevation.addEventListener(

            "keyup",

            ()=>saveCell(editor)

        );

    }

}

/* ===========================================================
   SAVE CELL
=========================================================== */

function saveCell(editor){

    const questionId = editor.dataset.question;

    const room = editor.dataset.room;


    if(!responses[questionId]){

        responses[questionId]={};

    }


    responses[questionId][room]={

    scope:getSegmentValue(

        editor,

        "scope"

    ),

    drawing:getSegmentValue(

        editor,

        "drawing"

    ),

    elevation:getElevationValue(editor)

};


    saveApplication();

    updateCategoryProgress(

        QUESTION_BANK.filter(q=>

            q.trade===activeTrade &&

            q.category===activeCategory

        )

    );

}
function getSegmentValue(editor,field){

    const selected=

        editor.querySelector(

            `.segment-group[data-field="${field}"] .selected`

        );

    if(selected)

        return selected.dataset.value;

    return "";

}
/* ===========================================================
   RADIO VALUE
=========================================================== */

function getSelectedValue(editor,suffix){

    const radio=

        editor.querySelector(

            `input[name$="${suffix}"]:checked`

        );

    if(radio)

        return radio.value;

    return "";

}


/* ===========================================================
   ELEVATION
=========================================================== */

function getElevationValue(editor){

    const box=

        editor.querySelector(

            ".elevation-input"

        );

    if(box)

        return box.value;

    return "";

}



/* ===========================================================
   CATEGORY PROGRESS
=========================================================== */

function updateCategoryProgress(questionList){

    let total = 0;

    let completed = 0;

    questionList.forEach(question=>{

        selectedRooms.forEach(room=>{

            total++;

            if(

                responses[question.id] &&

                responses[question.id][room]

            ){

                completed++;

            }

        });

    });

    document
        .getElementById("categoryProgress")
        .innerText=

        completed+" / "+total+" Completed";

}



function addCustomRoom(){

    const roomName = prompt("Enter Room Name");

    if(!roomName) return;

    const name = roomName.trim();

    if(name==="") return;

    const allRooms=[
        ...DEFAULT_ROOMS,
        ...customRooms
    ];

    if(allRooms.includes(name)){

        alert("Room already exists.");

        return;

    }

    customRooms.push(name);

    renderRoomSelection();

}












/* ===========================================================
   BUTTON EVENTS
=========================================================== */

document
.getElementById("popupCancel")
.addEventListener("click",closePopup);


document
.getElementById("popupSave")
.addEventListener("click",savePopup);







/* ===========================================================
   PART 4
   LOCAL STORAGE
=========================================================== */

const STORAGE_KEY = "ScopeCaptureProject";


/* ===========================================================
   SAVE APPLICATION
=========================================================== */

function saveApplication(){

    const appData={

        project,

        selectedRooms,

        responses,

        activeTrade,

        activeCategory,
        categoryScope,

    questionOutOfScope,

    scopeBackup

    };

    localStorage.setItem(

        STORAGE_KEY,

        JSON.stringify(appData)

    );

}


/* ===========================================================
   LOAD APPLICATION
=========================================================== */

function loadApplication(){

    const saved=

        localStorage.getItem(STORAGE_KEY);

    if(!saved)

        return;

    try{

        const appData=JSON.parse(saved);

        Object.assign(project,appData.project);

        selectedRooms=appData.selectedRooms || [];

        responses=appData.responses || {};
       categoryScope =
    appData.categoryScope || {};

questionOutOfScope =
    appData.questionOutOfScope || {};

scopeBackup =
    appData.scopeBackup || {};

        activeTrade=appData.activeTrade || activeTrade;

        activeCategory=appData.activeCategory || activeCategory;

        populateProjectScreen();

        populateRoomSelection();

    }

    catch(e){

        console.error(e);

    }

}


/* ===========================================================
   POPULATE PROJECT DETAILS
=========================================================== */

/* ===========================================================
   POPULATE PROJECT DETAILS
=========================================================== */

function populateProjectScreen(){

    const projectId =
        document.getElementById("projectId");

    const clientName =
        document.getElementById("clientName");

    const city =
        document.getElementById("city");

    const bu =
        document.getElementById("bu");

    const designerMailId =
        document.getElementById("designerMailId");

    const rfvId =
        document.getElementById("rfvId");

    const driveLink =
        document.getElementById("driveLink");

    const remarks =
        document.getElementById("remarks");


    if(projectId){

        projectId.value =
            project.projectId || "";

    }


    if(clientName){

        clientName.value =
            project.clientName || "";

    }


    if(city){

        city.value =
            project.city || "";

    }


    if(bu){

        bu.value =
            project.bu || "";

    }


    if(designerMailId){

        designerMailId.value =
            project.designerMailId || "";

    }


    if(rfvId){

        rfvId.value =
            project.rfvId || "";

    }


    if(driveLink){

        driveLink.value =
            project.driveLink || "";

    }


    if(remarks){

        remarks.value =
            project.remarks || "";

    }


    const summary =
        document.getElementById("projectSummary");


    if(summary){

        summary.innerHTML = `
            <strong>
                ${project.projectId || "New Project"}
            </strong>
            <br>
            ${project.clientName || ""}
        `;

    }

}


/* ===========================================================
   RESTORE ROOM SELECTION
=========================================================== */

function populateRoomSelection(){

    if(selectedRooms.length===0)

        return;

    document

    .querySelectorAll("#roomContainer input[type='checkbox']")

    .forEach(box=>{

        box.checked=

            selectedRooms.includes(box.value);

    });

}


/* ===========================================================
   RESET PROJECT
=========================================================== */

function resetProject(){

    if(

        !confirm(

            "Start a new project?"

        )

    )

        return;

    localStorage.removeItem(

        STORAGE_KEY

    );

    location.reload();

}


/* ===========================================================
   AUTO SAVE
=========================================================== */

function autoSave(){

    saveApplication();

}
