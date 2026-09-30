const ELECTRICAL_BOQ_RULES = {

    /* =========================================================
       LIGHTING
       ========================================================= */

    "EL-LGT-001": {
        requirement: "False Ceiling Lighting",
        scope: "Electrical|Lighting",
        boq: [
            "Primary point",
            "Secondary point",
            "Gala cutting in false ceiling",
            "Installation of lights"
        ]
    },

    "EL-LGT-002": {
        requirement: "Cove light in False Ceiling",
        scope: "Electrical|Lighting",
        boq: [
            "Primary point",
            "Secondary point",
            "Gala cutting in false ceiling",
            "Installation of lights",
            "False ceiling cove"
        ]
    },

    "EL-LGT-003": {
        requirement: "Profile light in False Ceiling",
        scope: "Electrical|Lighting",
        boq: [
            "Primary point",
            "Secondary point",
            "Groove cutting on wall for profile light",
            "Gala cutting in false ceiling",
            "Installation of lights"
        ]
    },

    "EL-LGT-004": {
        requirement: "Track Lights in False Ceiling",
        scope: "Electrical|Lighting",
        boq: [
            "Primary point",
            "Secondary point",
            "Gala cutting in false ceiling",
            "Installation of lights",
            "Ply packing or support"
        ]
    },

    "EL-LGT-005": {
        requirement: "Designer Ceiling Lights",
        scope: "Electrical|Lighting",
        boq: [
            "Primary point",
            "Secondary point",
            "Gala cutting in false ceiling",
            "Installation of lights",
            "Ply packing or support"
        ]
    },

    "EL-LGT-006": {
        requirement: "Surface-mounted Ceiling Lights",
        scope: "Electrical|Lighting",
        boq: [
            "Primary point",
            "Secondary point",
            "Installation of lights",
            "Punning with Bond-it",
            "Rcc chisseling (with permission)"
        ]
    },

    "EL-LGT-007": {
        requirement: "Wall Lights",
        scope: "Electrical|Lighting",
        boq: [
            "Primary point on wall",
            "Secondary poin on wall",
            "Installation of lights",
            "Operating switch/module"
        ]
    },

    "EL-LGT-008": {
        requirement: "Backlighting / Cove in Wall Panelling",
        scope: "Electrical|Lighting",
        boq: [
            "Primary point",
            "Secondary point",
            "Installation of lights",
            "Operating switch/module"
        ]
    },

    "EL-LGT-009": {
        requirement: "Backlighting / Cove in Headboard",
        scope: "Electrical|Lighting",
        boq: [
            "Primary point",
            "Secondary point",
            "Installation of lights",
            "Operating switch/module"    
        ]
    },

    "EL-LGT-010": {
        requirement: "Cabinet Lights in Modular Storage",
        scope: "Electrical|Lighting",
        boq: [
            "Primary point",
            "Secondary point",
            "Installation of lights",
            "Operating switch/module"
        ]
    },

    "EL-LGT-011": {
        requirement: "Backlighting / Cove in Modular Storage",
        scope: "Electrical|Lighting",
        boq: [
            "Primary point",
            "Secondary point",
            "Installation of lights",
            "Operating switch/module"
        ]
    },

    "EL-LGT-012": {
        requirement: "Backlighting / Cove in Wardrobes",
        scope: "Electrical|Lighting",
        boq: [
            "Primary point",
            "Secondary point",
            "Installation of lights",
            "Operating switch/module"
        ]
    },

    "EL-LGT-013": {
        requirement: "Lighting within Display / Crockery / Bar Units",
        scope: "Electrical|Lighting",
        boq: [
            "Primary point",
            "Secondary point",
            "Installation of lights",
            "Operating switch/module"
        ]
    },

    "EL-LGT-014": {
        requirement: "Lighting within TV Unit/panelling",
        scope: "Electrical|Lighting",
        boq: [
            "Primary point",
            "Secondary point",
            "Installation of lights",
            "Operating switch/module"
        ]
    },

    "EL-LGT-015": {
        requirement: "Lighting within Partitions",
        scope: "Electrical|Lighting",
        boq: [
            "Primary point",
            "Secondary point",
            "Installation of lights",
            "Operating switch/module"
        ]
    },

    "EL-LGT-016": {
        requirement: "Lighting in Mandir Unit",
        scope: "Electrical|Lighting",
        boq: [
            "Primary point",
            "Secondary point",
            "Installation of lights",
            "Operating switch/module"
        ]
    },

    "EL-LGT-017": {
        requirement: "Lighting in Staircase Area",
        scope: "Electrical|Lighting",
        boq: [
            "Primary point",
            "Secondary point",
            "Installation of lights",
            "Operating switch/module"
        ]
    },



     /* =========================================================
       POWER / MODULE
       ========================================================= */

    "EL-PWR-001": {
        requirement: "Additional 5A Sockets",
        scope: "Electrical|Power/Module",
        boq: [
            "New Board/Module 5A",
            "Additional wiring or circuit wiring(if required)"
        ]
    },

    "EL-PWR-002": {
        requirement: "Additional 15A Sockets",
        scope: "Electrical|Power/Module",
        boq: [
            "New Board/Module 15A",
            "Additional wiring or circuit wiring(if required)"
        ]
    },

    "EL-PWR-003": {
        requirement: "32A Points",
        scope: "Electrical|Power/Module",
        boq: [
            "New Board/Module 32A",
            "Additional wiring or circuit wiring"
        ]
    },

    "EL-PWR-004": {
        requirement: "Two-way Switching",
        scope: "Electrical|Power/Module",
        boq: [
            "New Board/Module",
            "Additional wiring or circuit wiring(if required)"
        ]
    },

    "EL-PWR-005": {
        requirement: "Bedside Charging / Switch Points",
        scope: "Electrical|Power/Module",
        boq: [
            "New Board/Module 5A"
            
        ]
    },

    "EL-PWR-006": {
        requirement: "Balcony Decorative / Festival Power Points",
        scope: "Electrical|Power/Module",
        boq: [
            "New Board/Module 5A"
        ]
    },

    "EL-PWR-007": {
        requirement: "Relocation of Existing Electrical Modules",
        scope: "Electrical|Power/Module",
        boq: [
            "Board Relocation 5A or 15A"
        ]
    },

    "EL-PWR-008": {
        requirement: "TV Unit Power Points",
        scope: "Electrical|Power/Module",
        boq: [
            "New Board/Module 5A/15A",
            "HDMI + conduit laying"
            
          
        ]
    },

    "EL-PWR-009": {
        requirement: "Study Unit Power Points",
        scope: "Electrical|Power/Module",
        boq: [
            "New Board/Module 5A",
            "Additional wiring or circuit wiring (if required)"
        ]
    },

    "EL-PWR-010": {
        requirement: "Mandir Power Points",
        scope: "Electrical|Power/Module",
        boq: [
            "New Board/Module 5A"
        ]
    },

    "EL-PWR-011": {
        requirement: "Power / Charging Points within Furniture",
        scope: "Electrical|Power/Module",
        boq: [
            "New Board/Module 5A"
        ]
    },

    "EL-PWR-012": {
        requirement: "Electronic Furniture Items such as Recliners",
        scope: "Electrical|Power/Module",
        boq: [
            "New Board/Module 5A"
        ]
    },


    /* =========================================================
       APPLIANCE / FIXTURES
       ========================================================= */

    "EL-APP-001": {
        requirement: "New Dishwasher",
        scope: "Electrical|Appliance/Fixtures",
        boq: [
            "New Board/Module 15A",
            "Plumbing point provision",
            "Drain point provision"
        ]
    },

    "EL-APP-002": {
        requirement: "Existing Dishwasher Relocation",
        scope: "Electrical|Appliance/Fixtures",
        boq: [
            "Board relocation",
            "Plumbing point relocation",
            "Drain point relocation"
        ]
    },

    "EL-APP-003": {
        requirement: "New Washing Machine",
        scope: "Electrical|Appliance/Fixtures",
        boq: [
            "New Board/Module 5A",
            "Plumbing point provision,"
            "Drain point provision"
        ]
    },

    "EL-APP-004": {
        requirement: "Existing Washing Machine Relocation",
        scope: "Electrical|Appliance/Fixtures",
        boq: [
            "Board relocation",
            "Plumbing point relocation or new",
            "Drain point relocation or new"
        ]
    },

    "EL-APP-005": {
        requirement: "New Water Purifier / RO",
        scope: "Electrical|Appliance/Fixtures",
        boq: [
          "New Board/Module 5A",
            "Plumbing point provision"
        ]
    },

    "EL-APP-006": {
        requirement: "Existing RO Relocation",
        scope: "Electrical|Appliance/Fixtures",
        boq: [
            "Board relocation",
            "Plumbing point relocation or new"
        ]
    },

    "EL-APP-007": {
        requirement: "New Geysers",
        scope: "Electrical|Appliance/Fixtures",
        boq: [
            "New Board/Module 15A",
            "Plumbing point provision for hot and cold"
        ]
    },

    "EL-APP-008": {
        requirement: "Existing Geysers Relocation",
        scope: "Electrical|Appliance/Fixtures",
        boq: [
            "Board relocation",
            "Plumbing point relocation or new"
        ]
    },

    "EL-APP-009": {
        requirement: "Clothes Dryer",
        scope: "Electrical|Appliance/Fixtures",
        boq: [
            "New Board/Module 15A",
            "Plumbing point wherever necessary"
        ]
    },

    "EL-APP-010": {
        requirement: "Refrigerator",
        scope: "Electrical|Appliance/Fixtures",
        boq: [
            "New Board/Module 5/15A"
        ]
    },

    "EL-APP-011": {
        requirement: "Microwave / Oven / OTG",
        scope: "Electrical|Appliance/Fixtures",
        boq: [
            "New Board/Module 15A"
        ]
    },

    "EL-APP-012": {
        requirement: "Chimney",
        scope: "Electrical|Appliance/Fixtures",
        boq: [
            "New Board/Module 5A"
        ]
    },

    "EL-APP-013": {
        requirement: "Exhaust Fans",
        scope: "Electrical|Appliance/Fixtures",
        boq: [
            "New Board/Module 5A",
            "Installation"
        ]
    },

    "EL-APP-014": {
        requirement: "Ceiling Fan Installations",
        scope: "Electrical|Appliance/Fixtures",
        boq: [
            "New point or relocation",
            "Installation"
        ]
    },

    /* =========================================================
       AC
       ========================================================= */

    "EL-AC-001": {
        requirement: "Split AC",
        scope: "Electrical|AC",
        boq: [
            "New Board creation/relocation(as required)",
            "Additional 4 sqmm wiring from DB",
            "Pelmet(as required)",
            "Core cutting(as required)
        ]
    },

    "EL-AC-002": {
        requirement: "Cassette AC",
        scope: "Electrical|AC",
        boq: [
            "New board 15A or 32A",
            "Additional 4 sqmm wiring from DB",
            "Coordination with false ceiling for level",
            "Core cutting(as required)
        ]
    },

    "EL-AC-003": {
        requirement: "Centralized / Ducted AC",
        scope: "Electrical|AC",
        boq: [
            "New board 15A or 32A",
            "Additional 4sqmm wiring from DB",
            "Coordination with false ceiling for level",
            "Core cutting(as required)
        ]
    },

    "EL-AC-004": {
        requirement: "Indoor / Outdoor AC Locations Finalized",
        scope: "Electrical|AC",
        boq: [
            "Point creation",
            "Additional wiring from DB"
        ]
    },

    "EL-AC-005": {
        requirement: "False Ceiling Trap Doors for AC",
        scope: "Electrical|AC",
        boq: [
            "Coordination with false ceiling"
        ]
    },


    /* =========================================================
       SECURITY SYSTEMS
       ========================================================= */

    "EL-SEC-001": {
        requirement: "CCTV",
        scope: "Electrical|Security systems",
        boq: [
            "New Board 5A",
            "Only conduit laying (for CAT6)"
        ]
    },

    "EL-SEC-002": {
        requirement: "Video Doorbell",
        scope: "Electrical|Security systems",
        boq: [
            "Primary point on wall",
            "New Board 5A(if required)"
        ]
    },

    "EL-SEC-003": {
        requirement: "Digital Door Lock",
        scope: "Electrical|Security systems",
        boq: [
             "Primary point on wall",
            "New Board 5A"
            
        ]
    },

    "EL-SEC-004": {
        requirement: "Home Automation",
        scope: "Electrical|Security systems",
        boq: [
             "Primary point on wall",
            "New Board 5A or 15A"
        ]
    },

    "EL-SEC-005": {
        requirement: "Motorized Curtains / Blinds",
        scope: "Electrical|Security systems",
        boq: [
            "Primary point on wall",
            "New Board 5A"
        ]
    },

    "EL-SEC-006": {
        requirement: "Router",
        scope: "Electrical|Security systems",
        boq: [
            "Only electrical provision",
            "Power points"
        ]
    },

    "EL-SEC-007": {
        requirement: "UPS",
        scope: "Electrical|Security systems",
        boq: [
            "Only electrical provision",
            "Power points"
        ]
    },


    /* =========================================================
       OTHERS
       ========================================================= */

    "EL-OTH-001": {
        requirement: "Inverter / UPS",
        scope: "Electrical|Others",
        boq: [
            "Only electrical provision",
            "Power points"
        ]
    },

    "EL-OTH-002": {
        requirement: "Builder-provided Electrical Services Retained / Coordinated",
        scope: "Electrical|Others",
        boq: [
            "Only electrical provision",
            "Power points"
        ]
    },

    "EL-OTH-003": {
        requirement: "Customer-owned Systems Requiring Electrical Coordination",
        scope: "Electrical|Others",
        boq: [
            "Only electrical provision",
            "Power points"
        ]
    }

};
