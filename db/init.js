var docs = [
    {
        name: "routes",
        data: [
            { _id: 1, url1: "/", url2: "/index" },
        ]
    },
    {
        name: "toolbars",
        data: [
            { name: "create", text: "Create", idx: 1 },
            { name: "edit", text: "Edit", idx: 2 },
            { name: "delete", text: "Delete", idx: 3 },
            { name: "save", text: "Save", idx: 4 },
            { name: "cancel", text: "Cancel", idx: 5 },
            { name: "refresh", text: "Refresh", idx: 6 },
        ]
    },
    {
        name: "menus",
        data: [
            {
                name: "srv", text: "Service", items: [
                    {
                        name: "svmst", text: "Master", items: [
                            { name: "svbrand", text: "Merek", url: "srv/brand" },
                            { name: "svmodel", text: "Model", url: "srv/model" },
                            { name: "svtask", text: "Jasa / Pekerjaan", url: "srv/task" },
                            { name: "svmech", text: "Mekanik", url: "srv/mech" },
                        ]
                    },
                    {
                        name: "svtrn", text: "Transaction", items: [
                            { name: "svjoborder", text: "Job Order", url: "srv/joborder" },
                            { name: "svjobclose", text: "Finish Job Order", url: "srv/jobclose" },
                            { name: "svinvoice", text: "Invoice", url: "srv/invoice" },
                        ]
                    },
                    { name: "svinq", text: "Inquiry" },
                ]
            },
            {
                name: "spr", text: "Sparepart", items: [
                    { name: "spmst", text: "Master" },
                    {
                        name: "sptrn", text: "Transaction", items: [
                            { name: "sppur", text: "Purchase Order", url: "spr/sppur" }
                        ]
                    },
                    { name: "spinq", text: "Inquiry" },
                ]
            },
            {
                name: "sls", text: "Sales", items: [
                    { name: "slmst", text: "Master" },
                    { name: "sltrn", text: "Transaction" },
                    { name: "slinq", text: "Inquiry" },
                ]
            },
            { name: "fin", text: "Finance" },
        ],
    },
    {
        name: "dropdowns",
        data: [
            { idx: 01, name: "honda", text: "Honda", group: "brand" },
            { idx: 02, name: "toyota", text: "Toyota", group: "brand" },
            { idx: 03, name: "suzuki", text: "Suzuki", group: "brand" },
            { idx: 04, name: "yahaha", text: "Yamaha", group: "brand" },
            { idx: 05, name: "ford", text: "Ford", group: "brand" },
            { idx: 06, name: "lexus", text: "Lexus", group: "brand" },
            { idx: 99, name: "others", text: "Others", group: "brand" },

            { idx: 01, name: "pdi", text: "Service PDI", group: "task" },
            { idx: 02, name: "fsc", text: "Service Gratis", group: "task" },
            { idx: 03, name: "rtn", text: "Service Berkala", group: "task" },
            { idx: 04, name: "claim", text: "Service Claim", group: "task" },
            { idx: 05, name: "campaign", text: "Service Campaign", group: "task" },
            { idx: 99, name: "others", text: "Others", group: "task" },

            { idx: 01, name: "mech01", text: "Mekanik 01", group: "mechanic" },
            { idx: 02, name: "mech02", text: "Mekanik 02", group: "mechanic" },
            { idx: 03, name: "mech03", text: "Mekanik 03", group: "mechanic" },
            { idx: 04, name: "mech04", text: "Mekanik 04", group: "mechanic" },
            { idx: 05, name: "mech05", text: "Mekanik 05", group: "mechanic" },

            { idx: 01, name: "sedan", text: "Sedan", group: "model" },
            { idx: 02, name: "minibus", text: "Minibus", group: "model" },
            { idx: 03, name: "pickup", text: "Pickup", group: "model" },
            { idx: 99, name: "others", text: "Others", group: "model" },

            { idx: 01, name: "MT", text: "Manual Transmission", group: "transtype" },
            { idx: 02, name: "AT", text: "Automatic Transmission", group: "transtype" },

            { idx: 01, name: "cupon", text: "Kupon", group: "servicetype" },
            { idx: 02, name: "claim", text: "Claim", group: "servicetype" },
            { idx: 03, name: "rutin", text: "Rutin", group: "servicetype" },
            { idx: 99, name: "others", text: "Lain-lain", group: "servicetype" },
        ]
    },
];

require("./initdb").save(docs);
