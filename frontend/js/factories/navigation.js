myApp.factory('NavigationService', function () {
    var navigation = [{
            name: "About Us",
            classis: "active",
            anchor: "aboutus",
            subnav: []
        },
        {
            name: "How To Get Started",
            classis: "active",
            anchor: "get-started",
            subnav: []
        },
        {
            name: "Partner With Us",
            classis: "active",
            anchor: "partner",
            subnav: []
        },

        // {
        //     name: "Token Structure",
        //     classis: "active",
        //     anchor: "tokenstructure",
        //     subnav: []
        // },
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
        },
        // {
        //     name: "Game Tutorials",
        //     classis: "active",
        //     anchor: "tutorials",
        //     subnav: []
        // },
        {
            name: "Contact Us",
            classis: "active",
            anchor: "contactus",
            subnav: []
        },
        {
            name: "Gallery",
            classis: "active",
            anchor: "tutorials",
            subnav: []
        },
        // {
        //     name: "Login",
        //     classis: "active",
        //     anchor: "login",
        //     subnav: []
        // },
        // {
        //     name: "Signup",
        //     classis: "active",
        //     anchor: "signup",
        //     subnav: []
        // }

    ];

    return {
        getNavigation: function () {
            return navigation;
        },
    };
});