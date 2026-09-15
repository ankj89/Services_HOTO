const ELECTRICAL = [

/* ============================================================
   LIGHTING
============================================================ */

{
id:"EL-LGT-001",
trade:"Electrical",
category:"Lighting",
subcategory:"General Lighting",
question:"Is any modification to the existing lighting layout planned?",
level:"room",
drawingRequirement:"Ceiling plan shall reflect the final lighting layout."
},

{
id:"EL-LGT-002",
trade:"Electrical",
category:"Lighting",
subcategory:"False Ceiling Lighting",
question:"Is false ceiling lighting planned?",
level:"room",
drawingRequirement:"Ceiling plan shall identify all false ceiling lighting."
},

{
id:"EL-LGT-003",
trade:"Electrical",
category:"Lighting",
subcategory:"Cove Lighting",
question:"Is cove lighting planned?",
level:"room",
drawingRequirement:"Ceiling plan shall identify all cove lighting."
},

{
id:"EL-LGT-004",
trade:"Electrical",
category:"Lighting",
subcategory:"Profile Lighting",
question:"Is profile lighting planned?",
level:"room",
drawingRequirement:"Ceiling plan shall identify all profile lighting."
},

{
id:"EL-LGT-005",
trade:"Electrical",
category:"Lighting",
subcategory:"Track Lighting",
question:"Are track lights planned?",
level:"room",
drawingRequirement:"Ceiling plan shall identify all track lights."
},

{
id:"EL-LGT-006",
trade:"Electrical",
category:"Lighting",
subcategory:"Decorative Ceiling Lighting",
question:"Are decorative ceiling lights planned (Chandelier / Pendant / Hanging Lights)?",
level:"room",
drawingRequirement:"Ceiling plan shall identify all decorative ceiling lights."
},

{
id:"EL-LGT-007",
trade:"Electrical",
category:"Lighting",
subcategory:"Wall Lighting",
question:"Are wall lights planned?",
level:"wall",
drawingRequirement:"Relevant elevations shall identify all wall lights."
},

{
id:"EL-LGT-008",
trade:"Electrical",
category:"Lighting",
subcategory:"Feature Lighting",
question:"Is feature or back lighting planned on any wall or ceiling feature?",
level:"wall",
drawingRequirement:"Relevant drawings shall identify all feature lighting."
},

{
id:"EL-LGT-009",
trade:"Electrical",
category:"Lighting",
subcategory:"Lighting Controls",
question:"Is dimming or special lighting control planned?",
level:"room",
drawingRequirement:"Electrical layout shall indicate applicable lighting controls."
},

{
id:"EL-LGT-010",
trade:"Electrical",
category:"Lighting",
subcategory:"Outdoor Lighting",
question:"Is decorative outdoor lighting planned?",
level:"room",
drawingRequirement:"Relevant plans shall identify outdoor lighting."
},

{
id:"EL-LGT-011",
trade:"Electrical",
category:"Lighting",
subcategory:"Others",
question:"Are there any other lighting requirements not covered above?",
level:"room",
drawingRequirement:"Relevant drawings shall clearly indicate the requirement."
},

/* ============================================================
   POWER
============================================================ */

{
id:"EL-PWR-001",
trade:"Electrical",
category:"Power",
subcategory:"Charging Points",
question:"Are additional charging sockets required?",
level:"wall",
drawingRequirement:"Electrical layout shall identify all charging sockets."
},

{
id:"EL-PWR-002",
trade:"Electrical",
category:"Power",
subcategory:"General Purpose",
question:"Are additional general-purpose sockets required?",
level:"wall",
drawingRequirement:"Electrical layout shall identify all additional sockets."
},

{
id:"EL-PWR-003",
trade:"Electrical",
category:"Power",
subcategory:"Heavy Duty",
question:"Are any heavy-duty power points required?",
level:"wall",
drawingRequirement:"Electrical layout shall identify all heavy-duty power points."
},

{
id:"EL-PWR-004",
trade:"Electrical",
category:"Power",
subcategory:"Switchboard Relocation",
question:"Are any existing switchboards planned to be relocated?",
level:"wall",
drawingRequirement:"Electrical layout shall indicate existing and proposed switchboard locations."
},

{
id:"EL-PWR-005",
trade:"Electrical",
category:"Power",
subcategory:"New Switchboards",
question:"Are any additional switchboards required?",
level:"wall",
drawingRequirement:"Electrical layout shall identify new switchboard locations."
},

{
id:"EL-PWR-006",
trade:"Electrical",
category:"Power",
subcategory:"Two-way Switching",
question:"Is two-way switching required anywhere?",
level:"wall",
drawingRequirement:"Electrical layout shall indicate applicable switching."
},

{
id:"EL-PWR-007",
trade:"Electrical",
category:"Power",
subcategory:"Bedside Switching",
question:"Are bedside charging or switching provisions required?",
level:"wall",
drawingRequirement:"Bedroom elevations shall indicate bedside switching locations."
},

{
id:"EL-PWR-008",
trade:"Electrical",
category:"Power",
subcategory:"Festival Lighting",
question:"Are dedicated power points required for decorative or festival lighting?",
level:"wall",
drawingRequirement:"Electrical layout shall identify decorative lighting sockets."
},

{
id:"EL-PWR-009",
trade:"Electrical",
category:"Power",
subcategory:"Entertainment Power",
question:"Are dedicated power points required for TV, workstation, router or similar equipment?",
level:"wall",
drawingRequirement:"Electrical layout shall identify all dedicated power points."
},

{
id:"EL-PWR-010",
trade:"Electrical",
category:"Power",
subcategory:"Others",
question:"Are there any other power requirements not covered above?",
level:"wall",
drawingRequirement:"Relevant drawings shall clearly indicate the requirement."
},

/* ============================================================
   APPLIANCES
============================================================ */

{
id:"EL-APP-001",
trade:"Electrical",
category:"Appliances",
subcategory:"Dishwasher",
question:"Will a dishwasher be installed?",
level:"room",
drawingRequirement:"Kitchen layout shall identify dishwasher location."
},

{
id:"EL-APP-002",
trade:"Electrical",
category:"Appliances",
subcategory:"Washing Machine",
question:"Will a washing machine be installed?",
level:"room",
drawingRequirement:"Utility layout shall identify washing machine location."
},

{
id:"EL-APP-003",
trade:"Electrical",
category:"Appliances",
subcategory:"Clothes Dryer",
question:"Will a clothes dryer be installed?",
level:"room",
drawingRequirement:"Utility layout shall identify dryer location."
},

{
id:"EL-APP-004",
trade:"Electrical",
category:"Appliances",
subcategory:"Refrigerator",
question:"Will a refrigerator be installed?",
level:"room",
drawingRequirement:"Kitchen layout shall identify refrigerator location."
},

{
id:"EL-APP-005",
trade:"Electrical",
category:"Appliances",
subcategory:"Built-in Appliances",
question:"Will built-in appliances (Microwave / Oven / OTG etc.) be installed?",
level:"room",
drawingRequirement:"Kitchen layout shall identify appliance locations."
},

{
id:"EL-APP-006",
trade:"Electrical",
category:"Appliances",
subcategory:"Hob",
question:"Will a hob or induction cooktop be installed?",
level:"room",
drawingRequirement:"Kitchen layout shall identify hob location."
},

{
id:"EL-APP-007",
trade:"Electrical",
category:"Appliances",
subcategory:"Chimney",
question:"Will a chimney be installed?",
level:"room",
drawingRequirement:"Kitchen layout shall identify chimney location."
},

{
id:"EL-APP-008",
trade:"Electrical",
category:"Appliances",
subcategory:"Water Purifier",
question:"Will a water purifier be installed?",
level:"room",
drawingRequirement:"Kitchen layout shall identify purifier location."
},

{
id:"EL-APP-009",
trade:"Electrical",
category:"Appliances",
subcategory:"Air Conditioner",
question:"Will air conditioners be installed?",
level:"room",
drawingRequirement:"Layout shall identify indoor and outdoor AC locations."
},

{
id:"EL-APP-010",
trade:"Electrical",
category:"Appliances",
subcategory:"Geyser",
question:"Will geysers be installed?",
level:"room",
drawingRequirement:"Bathroom layout shall identify geyser location."
},

{
id:"EL-APP-011",
trade:"Electrical",
category:"Appliances",
subcategory:"Others",
question:"Are there any other appliances requiring electrical provision?",
level:"room",
drawingRequirement:"Relevant drawings shall identify appliance locations."
},

/* ============================================================
   FURNITURE INTEGRATION
============================================================ */

{
id:"EL-FUR-001",
trade:"Electrical",
category:"Furniture Integration",
subcategory:"Wardrobe Lighting",
question:"Is wardrobe lighting planned?",
level:"wall",
drawingRequirement:"Wardrobe elevations shall identify lighting provisions."
},

{
id:"EL-FUR-002",
trade:"Electrical",
category:"Furniture Integration",
subcategory:"Display/Crockery Lighting",
question:"Is lighting planned within display or crockery units?",
level:"wall",
drawingRequirement:"Relevant furniture elevations shall identify lighting."
},

{
id:"EL-FUR-003",
trade:"Electrical",
category:"Furniture Integration",
subcategory:"TV Unit Lighting",
question:"Is lighting planned within the TV unit?",
level:"wall",
drawingRequirement:"TV unit drawings shall identify lighting provisions."
},

{
id:"EL-FUR-004",
trade:"Electrical",
category:"Furniture Integration",
subcategory:"Study Unit Lighting",
question:"Is lighting planned within the study/workstation?",
level:"wall",
drawingRequirement:"Study furniture drawings shall identify lighting."
},

{
id:"EL-FUR-005",
trade:"Electrical",
category:"Furniture Integration",
subcategory:"Furniture Power",
question:"Are power or charging points required within furniture?",
level:"wall",
drawingRequirement:"Furniture drawings shall identify power point locations."
},

{
id:"EL-FUR-006",
trade:"Electrical",
category:"Furniture Integration",
subcategory:"Furniture Sensors",
question:"Is sensor-based lighting planned within furniture?",
level:"wall",
drawingRequirement:"Relevant furniture drawings shall identify sensor lighting."
},

{
id:"EL-FUR-007",
trade:"Electrical",
category:"Furniture Integration",
subcategory:"Others",
question:"Are there any other furniture-integrated electrical requirements?",
level:"wall",
drawingRequirement:"Relevant furniture drawings shall identify the requirement."
},

/* ============================================================
   SECURITY & AUTOMATION
============================================================ */

{
id:"EL-SEC-001",
trade:"Electrical",
category:"Security & Automation",
subcategory:"CCTV",
question:"Is CCTV planned?",
level:"room",
drawingRequirement:"Layout shall identify camera locations."
},

{
id:"EL-SEC-002",
trade:"Electrical",
category:"Security & Automation",
subcategory:"Video Door Bell",
question:"Is a video door bell planned?",
level:"room",
drawingRequirement:"Layout shall identify entrance device location."
},

{
id:"EL-SEC-003",
trade:"Electrical",
category:"Security & Automation",
subcategory:"Digital Lock",
question:"Is a digital door lock planned?",
level:"room",
drawingRequirement:"Entrance drawings shall identify digital lock."
},

{
id:"EL-SEC-004",
trade:"Electrical",
category:"Security & Automation",
subcategory:"Home Automation",
question:"Is home automation planned?",
level:"room",
drawingRequirement:"Electrical layout shall identify automation provisions."
},

{
id:"EL-SEC-005",
trade:"Electrical",
category:"Security & Automation",
subcategory:"Motion Sensors",
question:"Are motion sensors planned?",
level:"room",
drawingRequirement:"Layout shall identify sensor locations."
},

{
id:"EL-SEC-006",
trade:"Electrical",
category:"Security & Automation",
subcategory:"Motorized Curtains",
question:"Are motorized curtains or blinds planned?",
level:"room",
drawingRequirement:"Relevant drawings shall identify curtain motor locations."
},

{
id:"EL-SEC-007",
trade:"Electrical",
category:"Security & Automation",
subcategory:"Others",
question:"Are there any other security or automation requirements?",
level:"room",
drawingRequirement:"Relevant drawings shall identify the requirement."
},

/* ============================================================
   COORDINATION
============================================================ */

{
id:"EL-CO-001",
trade:"Electrical",
category:"Coordination",
subcategory:"AC Coordination",
question:"Are the indoor and outdoor AC unit locations finalized?",
level:"room",
drawingRequirement:"Drawings shall identify indoor and outdoor AC locations."
},

{
id:"EL-CO-002",
trade:"Electrical",
category:"Coordination",
subcategory:"Exhaust Fans",
question:"Are exhaust fans planned?",
level:"room",
drawingRequirement:"Relevant drawings shall identify exhaust fan locations."
},

{
id:"EL-CO-003",
trade:"Electrical",
category:"Coordination",
subcategory:"Internet / Router",
question:"Is a dedicated location planned for internet/router equipment?",
level:"room",
drawingRequirement:"Layout shall identify router location."
},

{
id:"EL-CO-004",
trade:"Electrical",
category:"Coordination",
subcategory:"UPS / Inverter",
question:"Is an inverter or UPS planned?",
level:"room",
drawingRequirement:"Electrical layout shall identify equipment location."
},

{
id:"EL-CO-005",
trade:"Electrical",
category:"Coordination",
subcategory:"Future Provision",
question:"Is provision required for any future electrical requirements?",
level:"room",
drawingRequirement:"Relevant drawings shall identify future provisions."
},

{
id:"EL-CO-006",
trade:"Electrical",
category:"Coordination",
subcategory:"Builder Coordination",
question:"Are there any builder-provided electrical services that need to be retained or coordinated?",
level:"room",
drawingRequirement:"Drawings shall identify retained builder services."
},

{
id:"EL-CO-007",
trade:"Electrical",
category:"Coordination",
subcategory:"Customer Systems",
question:"Are there any customer-owned systems requiring electrical coordination?",
level:"room",
drawingRequirement:"Relevant drawings shall identify these systems."
},

{
id:"EL-CO-008",
trade:"Electrical",
category:"Coordination",
subcategory:"Others",
question:"Are there any other coordination requirements impacting electrical works?",
level:"room",
drawingRequirement:"Relevant drawings shall identify the requirement."
}

];
