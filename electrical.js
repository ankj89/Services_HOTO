/* ===========================================================
   ELECTRICAL
=========================================================== */

const ELECTRICAL = [

/* ===========================================================
   LIGHTING
=========================================================== */

{
id:"EL-LGT-001",
trade:"Electrical",
category:"Lighting",
subcategory:"False Ceiling",
level:"room",
question:"Is false ceiling lighting planned?",
   subtext: [
        "Only electrical provisioning and installation",
        "Supply of light in Cx scope"
    ],
drawingRequirement:"Show lighting layout in reflected ceiling plan."
},

{
id:"EL-LGT-002",
trade:"Electrical",
category:"Lighting",
subcategory:"False Ceiling",
level:"room",
question:"Is cove lighting planned in the false ceiling?",
      subtext: [
        "Only electrical provisioning and installation",
        "Supply of light in Cx scope"
    ],
drawingRequirement:"Show cove lighting layout in reflected ceiling plan."
},

{
id:"EL-LGT-003",
trade:"Electrical",
category:"Lighting",
subcategory:"False Ceiling",
level:"room",
question:"Is profile lighting planned in the false ceiling?",
      subtext: [
        "Only electrical provisioning and installation",
        "Supply of lights,track,channels in Cx scope"
    ],
drawingRequirement:"Show profile lighting layout in reflected ceiling plan."
},

{
id:"EL-LGT-004",
trade:"Electrical",
category:"Lighting",
subcategory:"False Ceiling",
level:"room",
question:"Are track lights planned in the false ceiling?",
      subtext: [
        "Only electrical provisioning and installation",
        "Supply of lights,track,channels in Cx scope"
    ],
drawingRequirement:"Show track light layout in reflected ceiling plan."
},

{
id:"EL-LGT-005",
trade:"Electrical",
category:"Lighting",
subcategory:"Decorative Lighting",
level:"room",
question:"Are designer ceiling lights planned (chandelier / pendant / hanging lights)?",
drawingRequirement:"Show fixture location in reflected ceiling plan."
},

{
id:"EL-LGT-006",
trade:"Electrical",
category:"Lighting",
subcategory:"Surface Lights",
level:"room",
question:"Are surface-mounted lights planned in ceiling?",
drawingRequirement:"Show fixture location in reflected ceiling plan."
},

{
id:"EL-LGT-007",
trade:"Electrical",
category:"Lighting",
subcategory:"Wall Lights",
level:"wall",
question:"Are wall lights planned (normal, decorative and/or profile)?",
drawingRequirement:"Show wall light location in elevation."
},

{
id:"EL-LGT-008",
trade:"Electrical",
category:"Lighting",
subcategory:"Wall Panelling",
level:"wall",
question:"Is backlighting or cove lighting planned in wall panelling?",
drawingRequirement:"Show lighting detail in wall elevation."
},

{
id:"EL-LGT-009",
trade:"Electrical",
category:"Lighting",
subcategory:"Headboard",
level:"wall",
question:"Is backlighting or cove lighting planned in the headboard?",
drawingRequirement:"Show lighting detail in headboard elevation."
},

{
id:"EL-LGT-010",
trade:"Electrical",
category:"Lighting",
subcategory:"Cabinet",
level:"wall",
question:"Are cabinet lights planned in modular storage units?",
drawingRequirement:"Show lighting detail in cabinet elevation."
},

{
id:"EL-LGT-011",
trade:"Electrical",
category:"Lighting",
subcategory:"Cabinet",
level:"wall",
question:"Is backlighting or cove lighting planned in modular storage units?",
drawingRequirement:"Show lighting detail in cabinet elevation."
},

{
id:"EL-LGT-012",
trade:"Electrical",
category:"Lighting",
subcategory:"Wardrobe",
level:"wall",
question:"Are cabinet lights, backlighting or cove lighting planned in wardrobes?",
drawingRequirement:"Show lighting detail in wardrobe elevation."
},

{
id:"EL-LGT-013",
trade:"Electrical",
category:"Lighting",
subcategory:"Display Units",
level:"wall",
question:"Is lighting planned within display, crockery or bar units?",
drawingRequirement:"Show lighting detail in furniture elevation."
},

{
id:"EL-LGT-014",
trade:"Electrical",
category:"Lighting",
subcategory:"TV Unit",
level:"wall",
question:"Is lighting planned within the TV unit?",
drawingRequirement:"Show lighting detail in TV unit elevation."
},

{
id:"EL-LGT-015",
trade:"Electrical",
category:"Lighting",
subcategory:"Partitions",
level:"wall",
question:"Is lighting planned within partitions?",
drawingRequirement:"Show lighting detail in partition elevation."
},

{
id:"EL-LGT-016",
trade:"Electrical",
category:"Lighting",
subcategory:"Mandir",
level:"wall",
question:"Is lighting planned in the mandir unit?",
drawingRequirement:"Show lighting detail in mandir elevation."
},

{
id:"EL-LGT-017",
trade:"Electrical",
category:"Lighting",
subcategory:"Staircase",
level:"room",
question:"Is lighting planned in the staircase area?",
drawingRequirement:"Show lighting layout in plan and elevation."
},

/* ===========================================================
   POWER / MODULE
=========================================================== */

{
id:"EL-PWR-001",
trade:"Electrical",
category:"Power/Module",
subcategory:"Sockets",
level:"wall",
question:"Are additional 5A sockets required for general usage (mobile charging, etc.)?",
drawingRequirement:"Show socket location in wall elevation."
},

{
id:"EL-PWR-002",
trade:"Electrical",
category:"Power/Module",
subcategory:"Sockets",
level:"wall",
question:"Are additional 15A sockets required for heavy-duty appliances (geyser, iron, heater, etc.)?",
drawingRequirement:"Show socket location in wall elevation."
},

{
id:"EL-PWR-003",
trade:"Electrical",
category:"Power/Module",
subcategory:"Sockets",
level:"wall",
question:"Are any 32A power points required?",
drawingRequirement:"Show power point location in wall elevation."
},

{
id:"EL-PWR-004",
trade:"Electrical",
category:"Power/Module",
subcategory:"Switching",
level:"wall",
question:"Is two-way switching required anywhere?",
drawingRequirement:"Show switching arrangement in wall elevation."
},

{
id:"EL-PWR-005",
trade:"Electrical",
category:"Power/Module",
subcategory:"Bedroom",
level:"wall",
question:"Are bedside charging and switch points required?",
drawingRequirement:"Show location in wall elevation."
},

{
id:"EL-PWR-006",
trade:"Electrical",
category:"Power/Module",
subcategory:"Balcony",
level:"wall",
question:"Are dedicated power points required for decorative or festival lighting in the balcony?",
drawingRequirement:"Show point location in elevation."
},

{
id:"EL-PWR-007",
trade:"Electrical",
category:"Power/Module",
subcategory:"Relocation",
level:"wall",
question:"Are relocations of existing electrical modules planned?",
drawingRequirement:"Show revised module location in elevation."
},

{
id:"EL-PWR-008",
trade:"Electrical",
category:"Power/Module",
subcategory:"TV Unit",
level:"wall",
question:"Are power points planned for the TV unit?",
drawingRequirement:"Show power point location in TV unit elevation."
},

{
id:"EL-PWR-009",
trade:"Electrical",
category:"Power/Module",
subcategory:"Study Unit",
level:"wall",
question:"Are power points required for the study unit?",
drawingRequirement:"Show power point location in study unit elevation."
},

{
id:"EL-PWR-010",
trade:"Electrical",
category:"Power/Module",
subcategory:"Mandir",
level:"wall",
question:"Are power points required in the mandir unit?",
drawingRequirement:"Show power point location in mandir elevation."
},

{
id:"EL-PWR-011",
trade:"Electrical",
category:"Power/Module",
subcategory:"Furniture",
level:"wall",
question:"Are power or charging points required within furniture?",
drawingRequirement:"Show power point location in furniture elevation."
},

{
id:"EL-PWR-012",
trade:"Electrical",
category:"Power/Module",
subcategory:"Furniture",
level:"wall",
question:"Are any electronic furniture items (such as recliners) planned?",
drawingRequirement:"Show power point location in furniture elevation."
},

/* ===========================================================
   APPLIANCES / FIXTURES
=========================================================== */

{
id:"EL-APP-001",trade:"Electrical",category:"Appliance/Fixtures",subcategory:"Dishwasher",level:"room",question:"Is Cx installiing a new dishwasher?",drawingRequirement:"Show appliance location in layout plan."
},
{
id:"EL-APP-002",trade:"Electrical",category:"Appliance/Fixtures",subcategory:"Dishwasher",level:"room",question:"Is an existing dishwasher being relocated?",drawingRequirement:"Show revised appliance location."
},
{
id:"EL-APP-003",trade:"Electrical",category:"Appliance/Fixtures",subcategory:"Washing Machine",level:"room",question:"Is Cx installing a new washing machine?",drawingRequirement:"Show appliance location."
},
{
id:"EL-APP-004",trade:"Electrical",category:"Appliance/Fixtures",subcategory:"Washing Machine",level:"room",question:"Is an existing washing machine being relocated?",drawingRequirement:"Show revised appliance location."
},
{
id:"EL-APP-005",trade:"Electrical",category:"Appliance/Fixtures",subcategory:"RO",level:"room",question:"Is Cx installing a new water purifier / RO?",drawingRequirement:"Show appliance location."
},
{
id:"EL-APP-006",trade:"Electrical",category:"Appliance/Fixtures",subcategory:"RO",level:"room",question:"Is an existing water purifier / RO being relocated?",drawingRequirement:"Show revised appliance location."
},
{
id:"EL-APP-007",trade:"Electrical",category:"Appliance/Fixtures",subcategory:"Geyser",level:"room",question:"Is Cx installing new geysers?",drawingRequirement:"Show geyser location."
},
{
id:"EL-APP-008",trade:"Electrical",category:"Appliance/Fixtures",subcategory:"Geyser",level:"room",question:"Are existing geysers being relocated?",drawingRequirement:"Show revised geyser location."
},
{
id:"EL-APP-009",trade:"Electrical",category:"Appliance/Fixtures",subcategory:"Dryer",level:"room",question:"Is Cx installing clothes dryer planned?",drawingRequirement:"Show appliance location."
},
{
id:"EL-APP-010",trade:"Electrical",category:"Appliance/Fixtures",subcategory:"Refrigerator",level:"room",question:"Is Cx installing a refrigerator?",drawingRequirement:"Show appliance location."
},
{
id:"EL-APP-011",trade:"Electrical",category:"Appliance/Fixtures",subcategory:"Cooking Appliances",level:"room",question:"Is Cx installing a microwave, oven or OTG?",drawingRequirement:"Show appliance location."
},
{
id:"EL-APP-012",trade:"Electrical",category:"Appliance/Fixtures",subcategory:"Chimney",level:"room",question:"Is Cx installing chimney?",drawingRequirement:"Show chimney location."
},
{
id:"EL-APP-013",trade:"Electrical",category:"Appliance/Fixtures",subcategory:"Exhaust",level:"room",question:"Are exhaust fans planned?",drawingRequirement:"Show exhaust fan location."
},
{
id:"EL-APP-014",trade:"Electrical",category:"Appliance/Fixtures",subcategory:"Fans",level:"room",question:"Are ceiling fan installations planned?",drawingRequirement:"Show fan locations."
},

/* ===========================================================
   AIR CONDITIONING
=========================================================== */


{
id:"EL-AC-001",trade:"Electrical",category:"AC",subcategory:"Split AC",level:"wall",question:"Is Cx installing split AC units?",drawingRequirement:"Show indoor unit location and wall elevation."
},
{
id:"EL-AC-002",trade:"Electrical",category:"AC",subcategory:"Cassette AC",level:"room",question:"Is Cx installing cassette AC ?",drawingRequirement:"Show cassette unit location in reflected ceiling plan."
},
{
id:"EL-AC-003",trade:"Electrical",category:"AC",subcategory:"Central AC",level:"room",question:"Is Cx installing centralized / ducted AC?",drawingRequirement:"Show grill locations and indoor unit."
},
{
id:"EL-AC-004",trade:"Electrical",category:"AC",subcategory:"General",level:"room",question:"Are the indoor and outdoor unit locations finalized?",drawingRequirement:"Show indoor and outdoor unit locations."
},
   
{
id:"EL-AC-005",trade:"Electrical",category:"AC",subcategory:"Access",level:"room",question:"Are trap doors required in the false ceiling?",drawingRequirement:"Show trap door location in reflected ceiling plan."
},

/* ===========================================================
   SECURITY SYSTEMS
=========================================================== */

{
id:"EL-SEC-001",trade:"Electrical",category:"Security systems",subcategory:"CCTV",level:"room",question:"Is Cx installing CCTV ?",drawingRequirement:"Show camera locations."
},
{
id:"EL-SEC-002",trade:"Electrical",category:"Security systems",subcategory:"Door Bell",level:"wall",question:"Is Cx instaling a video doorbell?",drawingRequirement:"Show installation location."
},
{
id:"EL-SEC-003",trade:"Electrical",category:"Security systems",subcategory:"Door Lock",level:"wall",question:"Is Cx installing digital door lock?",drawingRequirement:"Show installation location."
},
{
id:"EL-SEC-004",trade:"Electrical",category:"Security systems",subcategory:"Automation",level:"room",question:"Is home automation planned?",drawingRequirement:"Show automation scope in drawings."
},
{
id:"EL-SEC-005",trade:"Electrical",category:"Security systems",subcategory:"Curtains",level:"wall",question:"Is Cx installing motorized curtains or blinds?",drawingRequirement:"Show motor location in elevation."
},
   {
id:"EL-OTH-006",trade:"Electrical",category:"Security systems",subcategory:"Router",level:"room",question:"Is a dedicated location planned for internet/router equipment?",drawingRequirement:"Show router location."
},
{
id:"EL-OTH-001",trade:"Electrical",category:"Security systems",subcategory:"UPS",level:"room",question:"Is an inverter or UPS planned?",drawingRequirement:"Show UPS location."
},

/* ===========================================================
   OTHERS
=========================================================== */


{
id:"EL-OTH-001",trade:"Electrical",category:"Others",subcategory:"UPS",level:"room",question:"Is an inverter or UPS planned?",drawingRequirement:"Show UPS location."
},
{
id:"EL-OTH-002",trade:"Electrical",category:"Others",subcategory:"Builder Scope",level:"room",question:"Are there any builder-provided electrical services that need to be retained or coordinated?",drawingRequirement:"Show retained services in drawings."
},
{
id:"EL-OTH-003",trade:"Electrical",category:"Others",subcategory:"Customer Scope",level:"room",question:"Are there any customer-owned systems requiring electrical coordination?",drawingRequirement:"Show coordination requirements in drawings."
}

];
