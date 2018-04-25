myApp.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal) {
        $scope.template = TemplateService.getHTML("content/home.html");
        TemplateService.title = "Home"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        // location.href = "#zeroPage";
        $scope.mySlides = [{
                img: 'img/game4.jpg',
                title: 'TeenPatti'
            },
            {
                img: 'img/game1.jpg',
                title: 'Ultimate Texas Holdem'
            },
            {
                img: 'https://cdn.decent.bet/img/backgrounds/roulette.jpg',
                title: 'Roulette'
            },
            // {
            //     img: 'https://cdn.decent.bet/img/backgrounds/craps.jpg',
            //     title: 'Craps'
            // },
            {
                img: 'img/blackjack.jpg',
                title: 'Blackjack'
            },
            {
                img: 'img/Baccarat.jpg',
                title: 'Baccarat'
            },
            // {
            //     img: '../img/Casinowar.jpg',
            //     title: 'Casino war'
            // },
            // {
            //     img: '../img/Bigsixwheel.jpg',
            //     title: 'Big six wheel'
            // },
            // {
            //     img: '../img/7cardstud.jpg',
            //     title: '7 card stud'
            // },
            // {
            //     img: '../img/Slots.jpg',
            //     title: 'Slots'
            // },
            // {
            //     img: '../img/Bingo.jpg',
            //     title: 'Bingo'
            // },
            // {
            //     img: '../img/LotteryBetting.jpg',
            //     title: 'Lottery Betting'
            // },
            // {
            //     img: '../img/Dicegames.jpg',
            //     title: 'Dice games'
            // },
            // {
            //     img: '../img/Rummy.jpg',
            //     title: 'Rummy'
            // },
            // {
            //     img: '../img/Pinball.jpg',
            //     title: 'Pinball'
            // },
            // {
            //     img: '../img/Paigow.jpg',
            //     title: 'Pai gow'
            // },
            {
                img: 'img/TexasHold.jpg',
                title: 'Texas Holdem Bonus Poker'
            },
            {
                img: 'img/casino.jpg',
                title: 'Casino Holdem'
            },
            {
                img: 'img/threecardpoker.jpg',
                title: 'Three Card Poker'
            },
            {
                img: 'img/7cardstud.jpg',
                title: 'Caribbean Stud Poker'
            },
            {
                img: 'img/dreamcatcher.png',
                title: 'Dreamcatcher'
            }
            // {
            //     img: '../img/Keno.jpg',
            //     title: 'Keno'
            // }

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
                    // nextEl: '.swiper-button-next',
                    // prevEl: '.swiper-button-prev',
                    nextEl: '.next',
                    prevEl: '.prev'
                },
                autoplay: {
                    delay: 1500,
                },
                keyboard: {
                    enabled: true,
                    onlyInViewport: false
                },
                breakpoints: {
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    }
                }
            })
            console.log("inside timeout");
        }, 100);

        $timeout(function () {
            var mySwiper = new Swiper('.swiper-container2', {
                slidesPerView: 5,
                spaceBetween: 30,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    // nextEl: '.swiper-button-next',
                    // prevEl: '.swiper-button-prev',
                    nextEl: '.next2',
                    prevEl: '.prev2'
                },
                autoplay: {
                    delay: 1500,
                },
                keyboard: {
                    enabled: true,
                    onlyInViewport: false
                },
                breakpoints: {
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    }
                }
            })
            console.log("inside timeout");
        }, 100);

        $scope.mySlides2 = [{
                img: 'img/Cricket.jpg',
                title: 'Cricket'
            },
            {
                img: 'img/Football.jpg',
                title: 'Football'
            },
            {
                img: 'img/Tennis.jpg',
                title: 'Tennis'
            },
            {
                img: 'img/GreyhoundRacing.jpg',
                title: 'Greyhound Racing'
            },
            {
                img: 'img/HorseRacing.jpg',
                title: 'Horse Racing'
            }
        ];

        $scope.createswiper = function () {
            console.log("inside createswiper fn")
            $timeout(function () {
                var mySwiper1 = new Swiper('.swiper-container1', {
                    slidesPerView: 5,
                    spaceBetween: 30,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    navigation: {
                        // nextEl: '.swiper-button-next',
                        // prevEl: '.swiper-button-prev',
                        nextEl: '.next2',
                        prevEl: '.prev2'
                    },
                    keyboard: {
                        enabled: true,
                        onlyInViewport: false
                    },
                    autoplay: {
                        delay: 1000,
                    },
                    breakpoints: {
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        }
                    }
                })
                console.log("inside timeout swiper1");
            }, 50);
        }

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

        //fullpage scroll
        // $scope.mainOptions = {
        //     sectionsColor: ['#1f282e', '#000', '#1f282e', '#000', '#1f282e'],
        //     anchors: ['zeroPage', 'firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
        //     scrollingSpeed: 1000
        // };

        $scope.openCricket = function (){
            $scope.feedbackInstance = $uibModal.open({
                animation: true,
                templateUrl: "views/content/cricket.html",
                scope: $scope,
                size: 'md',
                // backdropClass: 'back-drop'
            });
        }
        $scope.openFootball = function (){
            $scope.feedbackInstance = $uibModal.open({
                animation: true,
                templateUrl: "views/content/football.html",
                scope: $scope,
                size: 'md',
                // backdropClass: 'back-drop'
            });
        }
        $scope.openTennis = function (){
            $scope.feedbackInstance = $uibModal.open({
                animation: true,
                templateUrl: "views/content/tennis.html",
                scope: $scope,
                size: 'md',
                // backdropClass: 'back-drop'
            });
        }
        $scope.openGreyhoundRacing = function (){
            $scope.feedbackInstance = $uibModal.open({
                animation: true,
                templateUrl: "views/content/greyhoundracing.html",
                scope: $scope,
                size: 'md',
                // backdropClass: 'back-drop'
            });
        }
        $scope.openHorseRacing = function (){
            $scope.feedbackInstance = $uibModal.open({
                animation: true,
                templateUrl: "views/content/horseracing.html",
                scope: $scope,
                size: 'md',
                // backdropClass: 'back-drop'
            });
        }               

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

    .controller('PartnerCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http, $uibModal) {
        $scope.template = TemplateService.getHTML("content/partner.html");
        TemplateService.title = "Partner With Us"; // This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();

        //Thank You Modal
        $scope.openThanku = function (){
            $scope.feedbackInstance = $uibModal.open({
                animation: true,
                templateUrl: "views/content/thanku.html",
                scope: $scope,
                size: 'md',
                // backdropClass: 'back-drop'
            });
        }
        
        $scope.checklen1 = function (data) {
            $scope.formData = {};
            $scope.mobilenoerror = "";
            // $scope.formData.contactno.$error.tel = false;
            var len1 = data.length;
            if (len1 < 10) {
                $scope.mobilenoerror = "Please enter valid Mobile Number";
                console.log('In Length', len);
                // $scope.formData.contactno.$error.tel = true;
            } else if (len1 == 10) {
                $scope.mobilenoerror = "";
            }
        }

        //Form Validation
      $scope.contactForm = {};
      $scope.submitForm = function (data) {
          console.log('dkhicjii', data);
          if (!data.dob) {
              $scope.dobError = true;
              console.log("im im", $scope.showError);
          }
          if (!data.pan) {
              $scope.panError = true;
              console.log("im im", $scope.showError);
          }
          if (!data.aadhar) {
              $scope.aadharError = true;
              console.log("im im", $scope.showError);
          }
          if (!data.name) {
              $scope.nameError = true;
              console.log("im im", $scope.showError);
          }
          if (!data.income) {
              $scope.incomeError = true;
              console.log("im im", $scope.showError);
          }
          if (!data.fname) {
              $scope.fError = true;
              console.log("im im", $scope.showError);
          }
          if (!data.acholder) {
              $scope.acholderError = true;
              console.log("im im", $scope.showError);
          }
          if (!data.branch) {
              $scope.branchError = true;
              console.log("im im", $scope.showError);
          }
          if (!data.ifsc) {
              $scope.ifscError = true;
              console.log("im im", $scope.showError);
          }
          if (!data.mobileno) {
              $scope.mobilenoError = true;
              console.log("im im", $scope.showError);
          }
          if (!data.accno) {
              $scope.accnoError = true;
              console.log("im im", $scope.showError);
          }
          if (!data.email) {
              $scope.emailError = true;
              console.log("im im", $scope.showError);
          }
          if (!data.contactno) {
              $scope.contactnoError = true;
              console.log("im im", $scope.showError);
          }
          if (!data.query) {
              $scope.queryError = true;
              console.log("im im", $scope.showError);
          }
  
          console.log("This is it");
          return new Promise(function (callback) {
              $timeout(function () {
                  callback();
              }, 5000);
          });
      };

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