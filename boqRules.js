/* ===========================================================
   BOQ RULE ENGINE
   ===========================================================

   PURPOSE
   -------
   One rule = one HOTO requirement.

   The rule engine controls:
   1. Requirement text shown in Action Summary
   2. BOQ impact generated when LS Scope = Yes
   3. Underlying BOQ items / cross-trade dependencies

   IMPORTANT
   ---------
   - Rules are keyed strictly by HOTO Question ID.
   - Action Summary remains ONE ROW per HOTO requirement.
   - Multiple BOQ impacts are combined into one BOQ Impact cell.
   - Cx / No handling is done by the Action Summary builder.
   =========================================================== */


const BOQ_RULES = {

    /* ===========================================================
       LIGHTING
       =========================================================== */

    "EL-LGT-001": {
        requirement: "False Ceiling Lighting",

        lsScope: [
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Primary point"
            },
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Secondary point / switching"
            },
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Wiring"
            },
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Installation"
            },
            {
                trade: "False Ceiling",
                category: "False Ceiling",
                item: "Light cut-out / opening"
            }
        ]
    },


    "EL-LGT-002": {
        requirement: "Cove light in False Ceiling",

        lsScope: [
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Primary point"
            },
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Secondary point"
            },
            {
                trade: "Civil",
                category: "Cutting",
                item: "Gala cutting"
            },
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Installation"
            },
            {
                trade: "False Ceiling",
                category: "False Ceiling",
                item: "False ceiling cove"
            }
        ]
    },


    "EL-LGT-003": {
        requirement: "Profile Lighting in False Ceiling",

        lsScope: [
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Primary point"
            },
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Secondary point"
            },
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Wiring"
            },
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Installation"
            },
            {
                trade: "False Ceiling",
                category: "False Ceiling",
                item: "Profile / channel provision and cut-out"
            }
        ]
    },


    "EL-LGT-004": {
        requirement: "Track Light in False Ceiling",

        lsScope: [
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Primary point"
            },
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Secondary point"
            },
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Wiring"
            },
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Track installation"
            },
            {
                trade: "False Ceiling",
                category: "False Ceiling",
                item: "Track light ceiling provision"
            }
        ]
    },


    "EL-LGT-005": {
        requirement: "Designer Ceiling Light",

        lsScope: [
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Primary point"
            },
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Secondary point / switching"
            },
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Wiring"
            },
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Fixture installation"
            },
            {
                trade: "False Ceiling",
                category: "False Ceiling",
                item: "Fixture cut-out / support provision"
            }
        ]
    },


    "EL-LGT-006": {
        requirement: "Surface-Mounted Ceiling Light",

        lsScope: [
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Primary point"
            },
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Secondary point / switching"
            },
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Wiring"
            },
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Installation"
            }
        ]
    },


    "EL-LGT-007": {
        requirement: "Wall Light",

        lsScope: [
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Wall light point"
            },
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Switching / secondary point"
            },
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Wiring"
            },
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Installation"
            },
            {
                trade: "Civil",
                category: "Cutting",
                item: "Wall cutting / chasing"
            }
        ]
    },


    "EL-LGT-008": {
        requirement: "Backlighting / Cove Lighting in Wall Panelling",

        lsScope: [
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Primary point"
            },
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Secondary point"
            },
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Wiring"
            },
            {
                trade: "Civil",
                category: "Cutting",
                item: "Gala cutting"
            },
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Installation"
            },
            {
                trade: "Carpentry",
                category: "Wall Panelling",
                item: "Lighting provision within wall panelling"
            }
        ]
    },


    "EL-LGT-009": {
        requirement: "Backlighting / Cove Lighting in Headboard",

        lsScope: [
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Primary point"
            },
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Secondary point"
            },
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Wiring"
            },
            {
                trade: "Civil",
                category: "Cutting",
                item: "Gala cutting"
            },
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Installation"
            },
            {
                trade: "Carpentry",
                category: "Headboard",
                item: "Lighting provision within headboard"
            }
        ]
    },


    "EL-LGT-010": {
        requirement: "Cabinet Lighting in Modular Storage",

        lsScope: [
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Lighting point"
            },
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Wiring"
            },
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Installation"
            },
            {
                trade: "Carpentry",
                category: "Modular Storage",
                item: "Lighting provision within cabinet"
            }
        ]
    },


    "EL-LGT-011": {
        requirement: "Backlighting / Cove Lighting in Modular Storage",

        lsScope: [
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Primary point"
            },
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Secondary point"
            },
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Wiring"
            },
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Installation"
            },
            {
                trade: "Carpentry",
                category: "Modular Storage",
                item: "Backlighting / cove provision"
            }
        ]
    },


    "EL-LGT-012": {
        requirement: "Wardrobe Lighting",

        lsScope: [
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Lighting point"
            },
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Wiring"
            },
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Installation"
            },
            {
                trade: "Carpentry",
                category: "Wardrobe",
                item: "Lighting provision within wardrobe"
            }
        ]
    },


    "EL-LGT-013": {
        requirement: "Lighting in Display / Crockery / Bar Unit",

        lsScope: [
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Lighting point"
            },
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Wiring"
            },
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Installation"
            },
            {
                trade: "Carpentry",
                category: "Furniture",
                item: "Lighting provision within unit"
            }
        ]
    },


    "EL-LGT-014": {
        requirement: "Lighting in TV Unit",

        lsScope: [
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Lighting point"
            },
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Wiring"
            },
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Installation"
            },
            {
                trade: "Carpentry",
                category: "TV Unit",
                item: "Lighting provision within TV unit"
            }
        ]
    },


    "EL-LGT-015": {
        requirement: "Lighting in Partition",

        lsScope: [
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Lighting point"
            },
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Wiring"
            },
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Installation"
            },
            {
                trade: "Carpentry",
                category: "Partition",
                item: "Lighting provision within partition"
            }
        ]
    },


    "EL-LGT-016": {
        requirement: "Lighting in Mandir Unit",

        lsScope: [
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Lighting point"
            },
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Wiring"
            },
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Installation"
            },
            {
                trade: "Carpentry",
                category: "Mandir",
                item: "Lighting provision within mandir unit"
            }
        ]
    },


    "EL-LGT-017": {
        requirement: "Lighting in Staircase Area",

        lsScope: [
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Lighting points"
            },
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Switching / two-way switching as applicable"
            },
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Wiring"
            },
            {
                trade: "Electrical",
                category: "Lighting",
                item: "Installation"
            }
        ]
    },


    /* ===========================================================
       POWER / MODULE
       =========================================================== */

    "EL-PWR-001": {
        requirement: "Additional 5A General-Use Socket",

        lsScope: [
            {
                trade: "Electrical",
                category: "Power/Module",
                item: "5A socket point"
            },
            {
                trade: "Electrical",
                category: "Power/Module",
                item: "Switch / module"
            },
            {
                trade: "Electrical",
                category: "Power/Module",
                item: "Wiring"
            },
            {
                trade: "Electrical",
                category: "Power/Module",
                item: "Installation"
            },
            {
                trade: "Civil",
                category: "Cutting",
                item: "Wall cutting / chasing"
            }
        ]
    },


    "EL-PWR-002": {
        requirement: "Additional 15A Heavy-Duty Socket",

        lsScope: [
            {
                trade: "Electrical",
                category: "Power/Module",
                item: "15A power point"
            },
            {
                trade: "Electrical",
                category: "Power/Module",
                item: "Switch / module"
            },
            {
                trade: "Electrical",
                category: "Power/Module",
                item: "Wiring"
            },
            {
                trade: "Electrical",
                category: "Power/Module",
                item: "Installation"
            },
            {
                trade: "Civil",
                category: "Cutting",
                item: "Wall cutting / chasing"
            }
        ]
    },


    "EL-PWR-003": {
        requirement: "32A Power Point",

        lsScope: [
            {
                trade: "Electrical",
                category: "Power/Module",
                item: "32A power point"
            },
            {
                trade: "Electrical",
                category: "Power/Module",
                item: "Switch / module"
            },
            {
                trade: "Electrical",
                category: "Power/Module",
                item: "Dedicated wiring"
            },
            {
                trade: "Electrical",
                category: "Power/Module",
                item: "Installation"
            },
            {
                trade: "Civil",
                category: "Cutting",
                item: "Wall cutting / chasing"
            }
        ]
    },


    "EL-PWR-004": {
        requirement: "Two-Way Switching",

        lsScope: [
            {
                trade: "Electrical",
                category: "Power/Module",
                item: "Two-way switches"
            },
            {
                trade: "Electrical",
                category: "Power/Module",
                item: "Wiring"
            },
            {
                trade: "Electrical",
                category: "Power/Module",
                item: "Installation"
            }
        ]
    },


    "EL-PWR-005": {
        requirement: "Bedside Charging and Switch Points",

        lsScope: [
            {
                trade: "Electrical",
                category: "Power/Module",
                item: "Charging socket points"
            },
            {
                trade: "Electrical",
                category: "Power/Module",
                item: "Switch modules"
            },
            {
                trade: "Electrical",
                category: "Power/Module",
                item: "Wiring"
            },
            {
                trade: "Electrical",
                category: "Power/Module",
                item: "Installation"
            },
            {
                trade: "Civil",
                category: "Cutting",
                item: "Wall cutting / chasing"
            }
        ]
    },


    "EL-PWR-006": {
        requirement: "Balcony Decorative / Festival Lighting Power Point",

        lsScope: [
            {
                trade: "Electrical",
                category: "Power/Module",
                item: "Dedicated power point"
            },
            {
                trade: "Electrical",
                category: "Power/Module",
                item: "Switch / module"
            },
            {
                trade: "Electrical",
                category: "Power/Module",
                item: "Wiring"
            },
            {
                trade: "Electrical",
                category: "Power/Module",
                item: "Installation"
            }
        ]
    },


    "EL-PWR-007": {
        requirement: "Relocation of Existing Electrical Modules",

        lsScope: [
            {
                trade: "Electrical",
                category: "Power/Module",
                item: "Module relocation"
            },
            {
                trade: "Electrical",
                category: "Power/Module",
                item: "Rewiring"
            },
            {
                trade: "Electrical",
                category: "Power/Module",
                item: "Installation"
            },
            {
                trade: "Civil",
                category: "Cutting",
                item: "Existing point dismantling / wall cutting"
            },
            {
                trade: "Civil",
                category: "Making Good",
                item: "Closing / making good of old point"
            }
        ]
    },


    "EL-PWR-008": {
        requirement: "TV Unit Power Points",

        lsScope: [
            {
                trade: "Electrical",
                category: "Power/Module",
                item: "TV power points"
            },
            {
                trade: "Electrical",
                category: "Power/Module",
                item: "Wiring"
            },
            {
                trade: "Electrical",
                category: "Power/Module",
                item: "Installation"
            },
            {
                trade: "Civil",
                category: "Cutting",
                item: "Wall cutting / chasing"
            },
            {
                trade: "Carpentry",
                category: "TV Unit",
                item: "Power provision within TV unit"
            }
        ]
    },


    "EL-PWR-009": {
        requirement: "Study Unit Power Points",

        lsScope: [
            {
                trade: "Electrical",
                category: "Power/Module",
                item: "Power points"
            },
            {
                trade: "Electrical",
                category: "Power/Module",
                item: "Wiring"
            },
            {
                trade: "Electrical",
                category: "Power/Module",
                item: "Installation"
            },
            {
                trade: "Civil",
                category: "Cutting",
                item: "Wall cutting / chasing"
            },
            {
                trade: "Carpentry",
                category: "Study Unit",
                item: "Power provision within study unit"
            }
        ]
    },


    "EL-PWR-010": {
        requirement: "Mandir Unit Power Points",

        lsScope: [
            {
                trade: "Electrical",
                category: "Power/Module",
                item: "Power points"
            },
            {
                trade: "Electrical",
                category: "Power/Module",
                item: "Wiring"
            },
            {
                trade: "Electrical",
                category: "Power/Module",
                item: "Installation"
            },
            {
                trade: "Civil",
                category: "Cutting",
                item: "Wall cutting / chasing"
            },
            {
                trade: "Carpentry",
                category: "Mandir",
                item: "Power provision within mandir unit"
            }
        ]
    },


    "EL-PWR-011": {
        requirement: "Power / Charging Points within Furniture",

        lsScope: [
            {
                trade: "Electrical",
                category: "Power/Module",
                item: "Power / charging points"
            },
            {
                trade: "Electrical",
                category: "Power/Module",
                item: "Wiring"
            },
            {
                trade: "Electrical",
                category: "Power/Module",
                item: "Installation"
            },
            {
                trade: "Carpentry",
                category: "Furniture",
                item: "Electrical provision within furniture"
            }
        ]
    },


    "EL-PWR-012": {
        requirement: "Electronic Furniture Power Provision",

        lsScope: [
            {
                trade: "Electrical",
                category: "Power/Module",
                item: "Power point"
            },
            {
                trade: "Electrical",
                category: "Power/Module",
                item: "Wiring"
            },
            {
                trade: "Electrical",
                category: "Power/Module",
                item: "Installation"
            },
            {
                trade: "Carpentry",
                category: "Furniture",
                item: "Electrical provision for electronic furniture"
            }
        ]
    },


    /* ===========================================================
       APPLIANCES / FIXTURES
       =========================================================== */

    "EL-APP-001": {
        requirement: "New Dishwasher Provision",

        lsScope: [
            {
                trade: "Electrical",
                category: "Appliance/Fixtures",
                item: "Dishwasher power point"
            },
            {
                trade: "Electrical",
                category: "Appliance/Fixtures",
                item: "Wiring"
            },
            {
                trade: "Electrical",
                category: "Appliance/Fixtures",
                item: "Installation"
            },
            {
                trade: "Plumbing",
                category: "Dishwasher",
                item: "Water inlet / drain coordination"
            },
            {
                trade: "Civil",
                category: "Cutting",
                item: "Cutting / chasing if required for services"
            }
        ]
    },


    "EL-APP-002": {
        requirement: "Dishwasher Relocation",

        lsScope: [
            {
                trade: "Electrical",
                category: "Appliance/Fixtures",
                item: "Relocation of dishwasher power point"
            },
            {
                trade: "Electrical",
                category: "Appliance/Fixtures",
                item: "Rewiring"
            },
            {
                trade: "Electrical",
                category: "Appliance/Fixtures",
                item: "Installation"
            },
            {
                trade: "Plumbing",
                category: "Dishwasher",
                item: "Water inlet / drain relocation"
            },
            {
                trade: "Civil",
                category: "Cutting",
                item: "Service cutting / chasing"
            },
            {
                trade: "Civil",
                category: "Making Good",
                item: "Making good of old service points"
            }
        ]
    },


    "EL-APP-003": {
        requirement: "New Washing Machine Provision",

        lsScope: [
            {
                trade: "Electrical",
                category: "Appliance/Fixtures",
                item: "Washing machine power point"
            },
            {
                trade: "Electrical",
                category: "Appliance/Fixtures",
                item: "Wiring"
            },
            {
                trade: "Electrical",
                category: "Appliance/Fixtures",
                item: "Installation"
            },
            {
                trade: "Plumbing",
                category: "Washing Machine",
                item: "Water inlet / drain coordination"
            },
            {
                trade: "Civil",
                category: "Cutting",
                item: "Cutting / chasing if required for services"
            }
        ]
    },


    "EL-APP-004": {
        requirement: "Washing Machine Relocation",

        lsScope: [
            {
                trade: "Electrical",
                category: "Appliance/Fixtures",
                item: "Relocation of washing machine power point"
            },
            {
                trade: "Electrical",
                category: "Appliance/Fixtures",
                item: "Rewiring"
            },
            {
                trade: "Electrical",
                category: "Appliance/Fixtures",
                item: "Installation"
            },
            {
                trade: "Plumbing",
                category: "Washing Machine",
                item: "Water inlet / drain relocation"
            },
            {
                trade: "Civil",
                category: "Cutting",
                item: "Service cutting / chasing"
            },
            {
                trade: "Civil",
                category: "Making Good",
                item: "Making good of old service points"
            }
        ]
    },


    "EL-APP-005": {
        requirement: "New Water Purifier / RO Provision",

        lsScope: [
            {
                trade: "Electrical",
                category: "Appliance/Fixtures",
                item: "RO power point"
            },
            {
                trade: "Electrical",
                category: "Appliance/Fixtures",
                item: "Wiring"
            },
            {
                trade: "Electrical",
                category: "Appliance/Fixtures",
                item: "Installation"
            },
            {
                trade: "Plumbing",
                category: "RO",
                item: "Water inlet / drain coordination"
            },
            {
                trade: "Civil",
                category: "Cutting",
                item: "Service cutting / chasing if required"
            }
        ]
    },


    "EL-APP-006": {
        requirement: "Water Purifier / RO Relocation",

        lsScope: [
            {
                trade: "Electrical",
                category: "Appliance/Fixtures",
                item: "Relocation of RO power point"
            },
            {
                trade: "Electrical",
                category: "Appliance/Fixtures",
                item: "Rewiring"
            },
            {
                trade: "Electrical",
                category: "Appliance/Fixtures",
                item: "Installation"
            },
            {
                trade: "Plumbing",
                category: "RO",
                item: "Water inlet / drain relocation"
            },
            {
                trade: "Civil",
                category: "Cutting",
                item: "Service cutting / chasing"
            },
            {
                trade: "Civil",
                category: "Making Good",
                item: "Making good of old service points"
            }
        ]
    },


    "EL-APP-007": {
        requirement: "New Geyser Provision",

        lsScope: [
            {
                trade: "Electrical",
                category: "Appliance/Fixtures",
                item: "Geyser power point"
            },
            {
                trade: "Electrical",
                category: "Appliance/Fixtures",
                item: "Dedicated wiring"
            },
            {
                trade: "Electrical",
                category: "Appliance/Fixtures",
                item: "Installation"
            },
            {
                trade: "Plumbing",
                category: "Geyser",
                item: "Water inlet / outlet coordination"
            },
            {
                trade: "Civil",
                category: "Cutting",
                item: "Service cutting / chasing if required"
            }
        ]
    },


    "EL-APP-008": {
        requirement: "Geyser Relocation",

        lsScope: [
            {
                trade: "Electrical",
                category: "Appliance/Fixtures",
                item: "Relocation of geyser power point"
            },
            {
                trade: "Electrical",
                category: "Appliance/Fixtures",
                item: "Rewiring"
            },
            {
                trade: "Electrical",
                category: "Appliance/Fixtures",
                item: "Installation"
            },
            {
                trade: "Plumbing",
                category: "Geyser",
                item: "Water inlet / outlet relocation"
            },
            {
                trade: "Civil",
                category: "Cutting",
                item: "Service cutting / chasing"
            },
            {
                trade: "Civil",
                category: "Making Good",
                item: "Making good of old service points"
            }
        ]
    },


    "EL-APP-009": {
        requirement: "Clothes Dryer Provision",

        lsScope: [
            {
                trade: "Electrical",
                category: "Appliance/Fixtures",
                item: "Dryer power point"
            },
            {
                trade: "Electrical",
                category: "Appliance/Fixtures",
                item: "Wiring"
            },
            {
                trade: "Electrical",
                category: "Appliance/Fixtures",
                item: "Installation"
            },
            {
                trade: "Plumbing",
                category: "Dryer",
                item: "Service coordination where applicable"
            }
        ]
    },


    "EL-APP-010": {
        requirement: "Refrigerator Provision",

        lsScope: [
            {
                trade: "Electrical",
                category: "Appliance/Fixtures",
                item: "Refrigerator power point"
            },
            {
                trade: "Electrical",
                category: "Appliance/Fixtures",
                item: "Wiring"
            },
            {
                trade: "Electrical",
                category: "Appliance/Fixtures",
                item: "Installation"
            }
        ]
    },


    "EL-APP-011": {
        requirement: "Microwave / Oven / OTG Provision",

        lsScope: [
            {
                trade: "Electrical",
                category: "Appliance/Fixtures",
                item: "Dedicated appliance power point"
            },
            {
                trade: "Electrical",
                category: "Appliance/Fixtures",
                item: "Wiring"
            },
            {
                trade: "Electrical",
                category: "Appliance/Fixtures",
                item: "Installation"
            },
            {
                trade: "Carpentry",
                category: "Kitchen",
                item: "Appliance niche / cabinet coordination"
            },
            {
                trade: "Civil",
                category: "Cutting",
                item: "Service cutting / chasing if required"
            }
        ]
    },


    "EL-APP-012": {
        requirement: "Chimney Provision",

        lsScope: [
            {
                trade: "Electrical",
                category: "Appliance/Fixtures",
                item: "Chimney power point"
            },
            {
                trade: "Electrical",
                category: "Appliance/Fixtures",
                item: "Wiring"
            },
            {
                trade: "Electrical",
                category: "Appliance/Fixtures",
                item: "Installation"
            },
            {
                trade: "Carpentry",
                category: "Kitchen",
                item: "Chimney cabinet / cut-out coordination"
            },
            {
                trade: "Civil",
                category: "Cutting",
                item: "Chimney duct / core cutting as required"
            }
        ]
    },


    "EL-APP-013": {
        requirement: "Exhaust Fan Provision",

        lsScope: [
            {
                trade: "Electrical",
                category: "Appliance/Fixtures",
                item: "Exhaust fan point"
            },
            {
                trade: "Electrical",
                category: "Appliance/Fixtures",
                item: "Wiring"
            },
            {
                trade: "Electrical",
                category: "Appliance/Fixtures",
                item: "Installation"
            },
            {
                trade: "Civil",
                category: "Cutting",
                item: "Wall / window opening coordination"
            }
        ]
    },


    "EL-APP-014": {
        requirement: "Ceiling Fan Installation",

        lsScope: [
            {
                trade: "Electrical",
                category: "Appliance/Fixtures",
                item: "Fan point"
            },
            {
                trade: "Electrical",
                category: "Appliance/Fixtures",
                item: "Regulator / switching"
            },
            {
                trade: "Electrical",
                category: "Appliance/Fixtures",
                item: "Wiring"
            },
            {
                trade: "Electrical",
                category: "Appliance/Fixtures",
                item: "Installation"
            },
            {
                trade: "False Ceiling",
                category: "False Ceiling",
                item: "Fan support / structural provision where applicable"
            }
        ]
    },


    /* ===========================================================
       AIR CONDITIONING
       =========================================================== */

    "EL-AC-001": {
        requirement: "Split AC Provision",

        lsScope: [
            {
                trade: "Electrical",
                category: "AC",
                item: "AC power point"
            },
            {
                trade: "Electrical",
                category: "AC",
                item: "Dedicated wiring"
            },
            {
                trade: "Electrical",
                category: "AC",
                item: "Indoor unit installation"
            },
            {
                trade: "Electrical",
                category: "AC",
                item: "Outdoor unit power provision"
            },
            {
                trade: "Plumbing",
                category: "AC",
                item: "Condensate drain coordination"
            },
            {
                trade: "Civil",
                category: "Cutting",
                item: "Wall opening / core cutting for AC services"
            },
            {
                trade: "Civil",
                category: "Making Good",
                item: "Making good after AC service routing"
            }
        ]
    },


    "EL-AC-002": {
        requirement: "Cassette AC Provision",

        lsScope: [
            {
                trade: "Electrical",
                category: "AC",
                item: "AC power point"
            },
            {
                trade: "Electrical",
                category: "AC",
                item: "Dedicated wiring"
            },
            {
                trade: "Electrical",
                category: "AC",
                item: "Installation"
            },
            {
                trade: "False Ceiling",
                category: "False Ceiling",
                item: "Cassette AC cut-out / opening"
            },
            {
                trade: "Plumbing",
                category: "AC",
                item: "Condensate drain coordination"
            }
        ]
    },


    "EL-AC-003": {
        requirement: "Central / Ducted AC Provision",

        lsScope: [
            {
                trade: "Electrical",
                category: "AC",
                item: "AC power provision"
            },
            {
                trade: "Electrical",
                category: "AC",
                item: "Dedicated wiring"
            },
            {
                trade: "Electrical",
                category: "AC",
                item: "Installation"
            },
            {
                trade: "False Ceiling",
                category: "False Ceiling",
                item: "AC grill / diffuser provision"
            },
            {
                trade: "Plumbing",
                category: "AC",
                item: "Condensate drain coordination"
            }
        ]
    },


    "EL-AC-004": {
        requirement: "Finalized Indoor and Outdoor AC Locations",

        lsScope: [
            {
                trade: "Electrical",
                category: "AC",
                item: "Indoor unit power provision"
            },
            {
                trade: "Electrical",
                category: "AC",
                item: "Outdoor unit power provision"
            },
            {
                trade: "Electrical",
                category: "AC",
                item: "Installation coordination"
            },
            {
                trade: "Plumbing",
                category: "AC",
                item: "Condensate drain coordination"
            },
            {
                trade: "Civil",
                category: "Cutting",
                item: "AC service opening / core cutting where required"
            }
        ]
    },


    "EL-AC-005": {
        requirement: "False Ceiling AC Trap Door",

        lsScope: [
            {
                trade: "False Ceiling",
                category: "False Ceiling",
                item: "Trap door / access panel"
            },
            {
                trade: "False Ceiling",
                category: "False Ceiling",
                item: "Frame / support"
            },
            {
                trade: "False Ceiling",
                category: "False Ceiling",
                item: "Finishing"
            }
        ]
    },


    /* ===========================================================
       SECURITY SYSTEMS
       =========================================================== */

    "EL-SEC-001": {
        requirement: "CCTV Provision",

        lsScope: [
            {
                trade: "Electrical",
                category: "Security systems",
                item: "CCTV power point"
            },
            {
                trade: "Electrical",
                category: "Security systems",
                item: "Data / signal cabling"
            },
            {
                trade: "Electrical",
                category: "Security systems",
                item: "Installation"
            },
            {
                trade: "Civil",
                category: "Cutting",
                item: "Concealed cable routing / cutting if required"
            }
        ]
    },


    "EL-SEC-002": {
        requirement: "Video Doorbell Provision",

        lsScope: [
            {
                trade: "Electrical",
                category: "Security systems",
                item: "Doorbell power / electrical point"
            },
            {
                trade: "Electrical",
                category: "Security systems",
                item: "Data / signal cabling"
            },
            {
                trade: "Electrical",
                category: "Security systems",
                item: "Installation"
            },
            {
                trade: "Civil",
                category: "Cutting",
                item: "Wall cutting / chasing"
            }
        ]
    },


    "EL-SEC-003": {
        requirement: "Digital Door Lock Provision",

        lsScope: [
            {
                trade: "Electrical",
                category: "Security systems",
                item: "Power provision"
            },
            {
                trade: "Electrical",
                category: "Security systems",
                item: "Wiring"
            },
            {
                trade: "Electrical",
                category: "Security systems",
                item: "Installation"
            },
            {
                trade: "Carpentry",
                category: "Door",
                item: "Door / lock preparation and coordination"
            }
        ]
    },


    "EL-SEC-004": {
        requirement: "Home Automation Provision",

        lsScope: [
            {
                trade: "Electrical",
                category: "Security systems",
                item: "Automation modules / control points"
            },
            {
                trade: "Electrical",
                category: "Security systems",
                item: "Control wiring / cabling"
            },
            {
                trade: "Electrical",
                category: "Security systems",
                item: "Installation"
            },
            {
                trade: "Electrical",
                category: "Power/Module",
                item: "Switch / module coordination"
            }
        ]
    },


    "EL-SEC-005": {
        requirement: "Motorized Curtains / Blinds Provision",

        lsScope: [
            {
                trade: "Electrical",
                category: "Security systems",
                item: "Motor power point"
            },
            {
                trade: "Electrical",
                category: "Security systems",
                item: "Wiring"
            },
            {
                trade: "Electrical",
                category: "Security systems",
                item: "Installation"
            },
            {
                trade: "Carpentry",
                category: "Furniture",
                item: "Curtain / blind provision coordination"
            }
        ]
    },


    "EL-OTH-006": {
        requirement: "Internet / Router Equipment Provision",

        lsScope: [
            {
                trade: "Electrical",
                category: "Security systems",
                item: "Router power point"
            },
            {
                trade: "Electrical",
                category: "Security systems",
                item: "Data / LAN point"
            },
            {
                trade: "Electrical",
                category: "Security systems",
                item: "Installation"
            },
            {
                trade: "Carpentry",
                category: "Furniture",
                item: "Router location / storage provision where applicable"
            }
        ]
    },


    /* ===========================================================
       OTHERS
       =========================================================== */

    "EL-OTH-001": {
        requirement: "Inverter / UPS Provision",

        lsScope: [
            {
                trade: "Electrical",
                category: "Others",
                item: "UPS / inverter power provision"
            },
            {
                trade: "Electrical",
                category: "Others",
                item: "Dedicated wiring"
            },
            {
                trade: "Electrical",
                category: "Others",
                item: "Installation"
            },
            {
                trade: "Electrical",
                category: "Others",
                item: "Changeover / connection coordination"
            },
            {
                trade: "Civil",
                category: "Cutting",
                item: "Service routing / cutting if required"
            }
        ]
    },


    "EL-OTH-002": {
        requirement: "Builder-Provided Electrical Services Retention / Coordination",

        lsScope: [
            {
                trade: "Electrical",
                category: "Others",
                item: "Existing service retention"
            },
            {
                trade: "Electrical",
                category: "Others",
                item: "Service coordination"
            },
            {
                trade: "Electrical",
                category: "Others",
                item: "Reconnection / shifting where required"
            }
        ]
    },


    "EL-OTH-003": {
        requirement: "Customer-Owned System Electrical Coordination",

        lsScope: [
            {
                trade: "Electrical",
                category: "Others",
                item: "Power provision"
            },
            {
                trade: "Electrical",
                category: "Others",
                item: "Electrical / control cabling coordination"
            },
            {
                trade: "Electrical",
                category: "Others",
                item: "Installation coordination"
            }
        ]
    }

};


/* ===========================================================
   RULE ENGINE HELPERS
   =========================================================== */

function getBOQRule(questionId) {

    return BOQ_RULES[questionId] || null;

}


function getRequirementText(question) {

    if (!question) {
        return "";
    }

    const rule = getBOQRule(question.id);

    if (rule && rule.requirement) {
        return rule.requirement;
    }

    /*
       If a rule does not exist yet, retain the original
       HOTO question rather than inventing a requirement.
    */
    return question.question || "";

}


function getBOQImpactText(questionId) {

    const rule = getBOQRule(questionId);

    if (!rule || !Array.isArray(rule.lsScope)) {
        return "";
    }

    /*
       ONE Action Summary row per HOTO requirement.

       Example:

       Primary point + Secondary point + Gala cutting
       + Installation + False ceiling cove
    */

    return rule.lsScope
        .map(item => item.item)
        .filter(Boolean)
        .join(" + ");

}


function getBOQImpactItems(questionId) {

    const rule = getBOQRule(questionId);

    if (!rule || !Array.isArray(rule.lsScope)) {
        return [];
    }

    return rule.lsScope;

}


/* ===========================================================
   ACTION SUMMARY RESPONSE LOGIC
   =========================================================== */

function getActionSummaryImpact(question, scope) {

    /*
       Yes / LS Scope
       ----------------
       Generate the complete BOQ chain.

       Cx
       ----------------
       Do not generate LS BOQ.
       The Action Summary should show:
       "Coordination with Cx"

       No
       ----------------
       No Action Summary row.
    */

    if (scope === "Cx") {
        return "Coordination with Cx";
    }

    if (scope === "Yes") {
        return getBOQImpactText(question.id);
    }

    if (scope === "No") {
        return "";
    }

    return "";

}


/* ===========================================================
   ACTION SUMMARY REQUIREMENT
   =========================================================== */

function getActionSummaryRequirement(question) {

    return getRequirementText(question);

}


/* ===========================================================
   VALIDATION
   =========================================================== */

function validateBOQRules(questionBank = []) {

    const errors = [];
    const warnings = [];

    const questionIds = {};

    questionBank.forEach(question => {

        if (!question || !question.id) {
            errors.push("Question without an ID found.");
            return;
        }

        if (questionIds[question.id]) {

            errors.push(
                `Duplicate HOTO Question ID found: ${question.id}`
            );

        }

        questionIds[question.id] = true;

    });


    /*
       Check whether every HOTO question has a BOQ rule.
    */

    questionBank.forEach(question => {

        if (
            question &&
            question.id &&
            !BOQ_RULES[question.id]
        ) {

            warnings.push(
                `No BOQ rule found for ${question.id}: ${question.question || ""}`
            );

        }

    });


    /*
       Check whether a BOQ rule points to a HOTO ID
       that doesn't exist in the question bank.
    */

    Object.keys(BOQ_RULES).forEach(id => {

        if (!questionIds[id]) {

            warnings.push(
                `BOQ rule exists but HOTO question ID was not found: ${id}`
            );

        }

    });


    return {
        errors,
        warnings
    };

}
