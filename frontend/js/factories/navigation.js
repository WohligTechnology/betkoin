myApp.factory('NavigationService', function () {
    var navigation = [{
            name: "Home",
            classis: "active",
            anchor: "home",
            // subnav: [{
            //     name: "Subnav1",
            //     classis: "active",
            //     anchor: "home"
            // }]
        },
        // {
        //     name: "Form",
        //     classis: "active",
        //     anchor: "form",
        //     subnav: []
        // },
        {
            name: "About Us",
            classis: "active",
            anchor: "aboutus",
            subnav: []
        },
        {
            name: "Token Structure",
            classis: "active",
            anchor: "tokenstructure",
            subnav: []
        },
        {
            name: "White Paper",
            classis: "active",
            //anchor: "whitepaper",
            newtab: 'whitepaper',
            subnav: []
        },
        {
            name: "FAQ",
            classis: "active",
            anchor: "faq",
            subnav: []
        }

    ];

    return {
        getNavigation: function () {
            return navigation;
        },
    };
});