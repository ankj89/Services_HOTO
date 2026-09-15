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
    "Study",
    "Puja",
    "Balcony",
    "Terrace",
    "Dress Area",
    "Passage",
    "Store",
    "Servant Room"

];


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
   INITIALISE QUESTION BANK
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

function renderRoomSelection(){

    const container=document.getElementById("roomContainer");

    container.innerHTML="";

    DEFAULT_ROOMS.forEach(room=>{

        const label=document.createElement("label");

        label.className="room-item";

        label.innerHTML=`

            <input
                type="checkbox"
                value="${room}"
                checked>

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

}


/* ===========================================================
   PROJECT DETAILS
=========================================================== */

function saveProject(){

    project.projectName=document.getElementById("projectName").value;

    project.clientName=document.getElementById("clientName").value;

    project.projectType=document.getElementById("projectType").value;

    project.configuration=document.getElementById("configuration").value;

    project.designer=document.getElementById("designer").value;

    project.qs=document.getElementById("qs").value;

    project.address=document.getElementById("address").value;

    project.remarks=document.getElementById("projectRemarks").value;


    document.getElementById("projectSummary").innerHTML=`

        <strong>${project.projectName || "New Project"}</strong>

        <br>

        ${project.clientName || ""}

    `;

    showTab("roomsTab");

   saveApplication();

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

function buildNavigationTree(){

    const menu=document.getElementById("categoryMenu");

    menu.innerHTML="";

    const trades=[

        ...new Set(

            QUESTION_BANK.map(q=>q.trade)

        )

    ];


    trades.forEach(trade=>{

        const tradeWrapper=document.createElement("div");

        tradeWrapper.className="trade-wrapper";


        const tradeHeader=document.createElement("div");

        tradeHeader.className="trade-header";

        tradeHeader.innerHTML=trade;


        tradeWrapper.appendChild(tradeHeader);


        const categoryList=document.createElement("ul");

        categoryList.className="category-list";


        const categories=[

            ...new Set(

                QUESTION_BANK

                    .filter(q=>q.trade===trade)

                    .map(q=>q.category)

            )

        ];


        categories.forEach(category=>{

            const li=document.createElement("li");

            li.innerHTML=category;

            if(

                trade===activeTrade

                &&

                category===activeCategory

            ){

                li.classList.add("active");

            }


            li.addEventListener("click",()=>{

                activeTrade=trade;

                activeCategory=category;

                buildNavigationTree();

                renderQuestions(activeTrade,activeCategory);

            });


            categoryList.appendChild(li);

        });


        tradeWrapper.appendChild(categoryList);

        menu.appendChild(tradeWrapper);

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

    buildTableHeader();

    buildQuestionRows(questions);

}


/* ===========================================================
   BUILD TABLE HEADER
=========================================================== */

function buildTableHeader() {

    const table = document.getElementById("scopeTable");

    const thead = table.querySelector("thead");

    thead.innerHTML = "";

    const row = document.createElement("tr");

    row.innerHTML = `

        <th style="width:140px;">Category</th>

        <th style="width:180px;">Sub Category</th>

        <th>Question</th>

    `;

    selectedRooms.forEach(room => {

        const th = document.createElement("th");

        th.className = "room-column";

        th.innerText = room;

        row.appendChild(th);

    });

    const last = document.createElement("th");

    last.style.width = "300px";

    last.innerText = "Drawing Requirement";

    row.appendChild(last);

    thead.appendChild(row);

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


        /* ----------------------------------------
           CATEGORY
        ---------------------------------------- */

        tr.innerHTML += `
            <td>${question.category}</td>
            <td>${question.subcategory}</td>
            <td class="question-cell">
                ${question.question}
            </td>
        `;


        /* ----------------------------------------
           ROOM CELLS
        ---------------------------------------- */

        selectedRooms.forEach(room => {

            const td = document.createElement("td");

            td.className = "response-cell";

            td.dataset.question = question.id;
            td.dataset.room = room;
            td.dataset.level = question.level;

            td.innerHTML = createCellEditor(
                question,
                room
            );

            tr.appendChild(td);

        });


        /* ----------------------------------------
           DRAWING REQUIREMENT
        ---------------------------------------- */

        const guide = document.createElement("td");

        guide.className = "guideline-cell";

        guide.innerHTML = question.drawingRequirement || "";

        tr.appendChild(guide);


        tbody.appendChild(tr);

    });


    initialiseInlineEditors();

}

/* ===========================================================
   INLINE CELL RENDERER
=========================================================== */

function createCellEditor(question, room){

    const data = getResponse(question.id, room);

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

                Scope

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

                Drawing

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

                Scope

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

                Drawing

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

        activeCategory

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

function populateProjectScreen(){

    document.getElementById("projectName").value=project.projectName || "";

    document.getElementById("clientName").value=project.clientName || "";

    document.getElementById("projectType").value=project.projectType || "Apartment";

    document.getElementById("configuration").value=project.configuration || "3 BHK";

    document.getElementById("designer").value=project.designer || "";

    document.getElementById("qs").value=project.qs || "";

    document.getElementById("address").value=project.address || "";

    document.getElementById("projectRemarks").value=project.remarks || "";

    document.getElementById("projectSummary").innerHTML=

        `<strong>${project.projectName || "New Project"}</strong>

        <br>

        ${project.clientName || ""}`;

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
