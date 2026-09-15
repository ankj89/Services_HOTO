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

function renderQuestions(trade,category){

    console.log(

        trade,

        category

    );

}
