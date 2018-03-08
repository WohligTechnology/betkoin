myApp.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.getHTML("content/home.html");
        TemplateService.title = "Home"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();

        $scope.mySlides = [{
                img: 'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
                title: 'TeenPatti'
            },
            {
                img: '../img/game1.jpg',
                title: 'Poker'
            },
            {
                img: 'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
                title: 'Roulette'
            },
            {
                img: 'https://cdn.decent.bet/img/backgrounds/roulette.jpg',
                title: 'Craps'
            },
            {
                img: 'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
                title: 'Blackjack'
            },
            {
                img: 'https://cdn.decent.bet/img/backgrounds/roulette.jpg',
                title: 'Baccarat'
            },

        ];

        $scope.mySlides2 = [{
                img: 'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
                title: 'TeenPatti'
            },
            {
                img: '../img/game1.jpg',
                title: 'Poker'
            },
            {
                img: 'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
                title: 'Roulette'
            },
            {
                img: 'https://cdn.decent.bet/img/backgrounds/roulette.jpg',
                title: 'Craps'
            },
            {
                img: 'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
                title: 'Blackjack'
            },
            {
                img: 'https://cdn.decent.bet/img/backgrounds/roulette.jpg',
                title: 'Baccarat'
            },

        ];

        $timeout(function () {
            var mySwiper = new Swiper('.swiper-container', {
                slidesPerView: 5,
                spaceBetween: 30,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }
            })

        }, 100)

        $timeout(function () {
            var mySwiper = new Swiper('.swiper-container1', {
                slidesPerView: 5,
                spaceBetween: 30,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }
            })

        }, 100)

        var abc = _.times(100, function (n) {
            return n;
        });


        var i = 0;
        $scope.buttonClick = function () {
            i++;
            console.log("This is a button Click");
        };

        setTimeout(function () {
            new WOW().init();
        }, 0);


    })

    .controller('FormCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/form.html");
        TemplateService.title = "Form"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        $scope.formSubmitted = false;
        // $scope.data = {
        //     name: "Chintan",
        //     "age": 20,
        //     "email": "chinyan@wohlig.com",
        //     "query": "query"
        // };
        $scope.submitForm = function (data) {
            console.log("This is it");
            return new Promise(function (callback) {
                $timeout(function () {
                    callback();
                }, 5000);
            });
        };
    })
    .controller('FaqCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/faq.html");
        TemplateService.title = "FAQ"; // This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
    })

    .controller('AboutusCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/aboutus.html");
        TemplateService.title = "About Us"; // This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        setTimeout(function () {
            new WOW().init();
        }, 0);
    })

    .controller('TokenstructureCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/tokenstructure.html");
        TemplateService.title = "Token Structure"; // This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        setTimeout(function () {
            new WOW().init();
        }, 0);
    })

    .controller('WhitepaperCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/whitepaper.html");
        TemplateService.title = "White Paper"; // This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
    })

    .controller('PartnerCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/partner.html");
        TemplateService.title = "Partner With Us"; // This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
    })

    .controller('ContactusCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/contactus.html");
        TemplateService.title = "Contact Us"; // This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
    })

    // Example API Controller
    .controller('DemoAPICtrl', function ($scope, TemplateService, apiService, NavigationService, $timeout) {
        apiService.getDemo($scope.formData, function (data) {
            console.log(data);
        });
    });