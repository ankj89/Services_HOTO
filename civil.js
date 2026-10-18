/* ===========================================================
   CIVIL
=========================================================== */

const CIVIL = [

/* ===========================================================
   DEMOLITION
=========================================================== */

{
    id: "CV-DEM-001",
    trade: "Civil",
    category: "Demolition",
    subcategory: "Walls",
    level: "room",
    question: "Is existing brick wall demolition planned?",
    drawingRequirement: "Show wall(s) to be demolished in demolition/layout drawing."
},

{
    id: "CV-DEM-002",
    trade: "Civil",
    category: "Demolition",
    subcategory: "Wall Openings",
    level: "wall",
    question: "Are new openings planned in existing walls?",
    drawingRequirement: "Show opening location, dimensions and wall elevation."
},

{
    id: "CV-DEM-003",
    trade: "Civil",
    category: "Demolition",
    subcategory: "Wall Openings",
    level: "wall",
    question: "Are any existing wall openings planned to be closed?",
    drawingRequirement: "Show opening closure in layout and wall elevation."
},

{
    id: "CV-DEM-004",
    trade: "Civil",
    category: "Demolition",
    subcategory: "Floor",
    level: "room",
    question: "Is existing floor demolition planned?",
    drawingRequirement: "SHow floor area to be demolished."
},

{
    id: "CV-DEM-005",
    trade: "Civil",
    category: "Demolition",
    subcategory: "Doors & Windows",
    level: "wall",
    question: "Is demolition of any existing door or window planned?",
    drawingRequirement: "Show door/window to be removed."
},

{
    id: "CV-DEM-006",
    trade: "Civil",
    category: "Demolition",
    subcategory: "Existing Furniture",
    level: "room",
    question: "Is demolition of any existing wardrobe, storage or panelling planned?",
    drawingRequirement: "Show furniture/panelling to be removed."
},

{
    id: "CV-DEM-007",
    trade: "Civil",
    category: "Demolition",
    subcategory: "Toilet",
    level: "room",
    question: "Is existing toilet demolition planned?",
    drawingRequirement: "Show toilet areas to be demolished."
},

{
    id: "CV-DEM-008",
    trade: "Civil",
    category: "Demolition",
    subcategory: "Kitchen",
    level: "room",
    question: "Is existing kitchen demolition planned?",
    drawingRequirement: "Show kitchen components to be demolished."
},

{
    id: "CV-DEM-009",
    trade: "Civil",
    category: "Demolition",
    subcategory: "RCC",
    level: "room",
    question: "Is demolition of any RCC loft or ledge planned?",
    drawingRequirement: "Show RCC loft or ledges to be demolished."
},

{
    id: "CV-DEM-010",
    trade: "Civil",
    category: "Demolition",
    subcategory: "False Ceiling",
    level: "room",
    question: "Is existing false ceiling demolition planned?",
    drawingRequirement: "Sho false ceiling area to be demolished."
},

{
    id: "CV-DEM-011",
    trade: "Civil",
    category: "Demolition",
    subcategory: "Core Cutting",
    level: "wall",
    question: "Is core cutting planned for AC piping?",
    drawingRequirement: "Show core cutting location for AC in elevation."
},

{
    id: "CV-DEM-012",
    trade: "Civil",
    category: "Demolition",
    subcategory: "Core Cutting",
    level: "wall",
    question: "Is core cutting planned for chimney ducting?",
    drawingRequirement: "Show core cutting location for chimney in elevation."
},

/* ===========================================================
   CIVIL WORKS
=========================================================== */

{
    id: "CV-CIV-001",
    trade: "Civil",
    category: "Civil",
    subcategory: "Walls",
    level: "room",
    question: "Is any new brick wall planned?",
    drawingRequirement: "Show wall location, dimensions and thickness."
},

{
    id: "CV-CIV-002",
    trade: "Civil",
    category: "Civil",
    subcategory: "Door Frames",
    level: "wall",
    question: "Is granite framing planned on door head and jambs?",
    drawingRequirement: "Show granite framing in door elevation."
},

{
    id: "CV-CIV-003",
    trade: "Civil",
    category: "Civil",
    subcategory: "POP",
    level: "wall",
    question: "Are POP grooves planned on walls?",
    drawingRequirement: "Show groove pattern in wall elevation."
},

{
    id: "CV-CIV-004",
    trade: "Civil",
    category: "Civil",
    subcategory: "Metal Inlay",
    level: "wall",
    question: "Is any metal inlay design planned on walls?",
    drawingRequirement: "Show inlay design and dimensions in elevation."
},

{
    id: "CV-CIV-005",
    trade: "Civil",
    category: "Civil",
    subcategory: "POP Moulding",
    level: "wall",
    question: "Are POP mouldings, trims or cornices planned on walls?",
    drawingRequirement: "Show POP mouldings, trims or cornices detailings and location in elevation."
},

{
    id: "CV-CIV-006",
    trade: "Civil",
    category: "Civil",
    subcategory: "POP Moulding",
    level: "room",
    question: "Are POP mouldings, trims or cornices planned on ceiling?",
    drawingRequirement: "Show ceiling moulding profile and layout."
},

/* ===========================================================
   FLOORING
=========================================================== */

{
    id: "CV-FLR-001",
    trade: "Civil",
    category: "Flooring",
    subcategory: "Floor Tiles",
    level: "room",
    question: "Is new floor tiling planned? (Tile Size: 1'×1' to 2'×2')",
    drawingRequirement: "Show tile layout, pattern (square or others) and orientation."
},

{
    id: "CV-FLR-002",
    trade: "Civil",
    category: "Flooring",
    subcategory: "Floor Tiles",
    level: "room",
    question: "Is new floor tiling planned? (Tile Size: 2'×2' to 4'×4')",
    drawingRequirement: "Show tile layout, pattern (square or others) and orientation."
},

{
    id: "CV-FLR-003",
    trade: "Civil",
    category: "Flooring",
    subcategory: "Floor Tiles",
    level: "room",
    question: "Is new floor tiling planned? (Tile Size: 4'×4' to 8'×4')",
    drawingRequirement: "Show tile layout, pattern (square or others) and orientation."
},

{
    id: "CV-FLR-004",
    trade: "Civil",
    category: "Flooring",
    subcategory: "Tile Installation",
    level: "room",
    question: "Has the customer requested floor tile installation using adhesive?",
    drawingRequirement: "Mention adhesive-based tile installation wherever applicable."
},

{
    id: "CV-FLR-005",
    trade: "Civil",
    category: "Flooring",
    subcategory: "Stone Flooring",
    level: "room",
    question: "Is Indian marble or granite flooring planned?",
    drawingRequirement: "Show flooring layout, pattern (square or others) and orientation."
},

{
    id: "CV-FLR-006",
    trade: "Civil",
    category: "Flooring",
    subcategory: "Stone Flooring",
    level: "room",
    question: "Is Italian marble flooring planned?",
    drawingRequirement: "Show flooring layout pattern (square or others) and orientation."
},

{
    id: "CV-FLR-007",
    trade: "Civil",
    category: "Flooring",
    subcategory: "Stone Flooring",
    level: "room",
    question: "Is premium stone flooring planned? (Example: Onyx or equivalent)",
    drawingRequirement: "Show flooring layout and pattern (square or others) and orientation."
},

{
    id: "CV-FLR-008",
    trade: "Civil",
    category: "Flooring",
    subcategory: "Wall Tiles",
    level: "wall",
    question: "Is new wall tiling planned? (Tile Size: 1'×1' to 2'×2')",
    drawingRequirement: "Show wall tile layout, pattern (square or others) and elevations."
},

{
    id: "CV-FLR-009",
    trade: "Civil",
    category: "Flooring",
    subcategory: "Wall Tiles",
    level: "wall",
    question: "Is new wall tiling planned? (Tile Size: 2'×2' to 2'×4')",
    drawingRequirement: "Show wall tile layout, pattern (square or others) and elevations."
},

{
    id: "CV-FLR-010",
    trade: "Civil",
    category: "Flooring",
    subcategory: "Wall Tiles",
    level: "wall",
    question: "Is new wall tiling planned? (Tile Size: 2'×4' to 8'×4')",
    drawingRequirement: "Show wall tile layout, pattern (square or others) and elevations."
},

{
    id: "CV-FLR-011",
    trade: "Civil",
    category: "Flooring",
    subcategory: "Tile Installation",
    level: "wall",
    question: "Has the customer requested wall tile installation using adhesive?",
    drawingRequirement: "Mention adhesive-based wall tile installation wherever applicable."
}

];
