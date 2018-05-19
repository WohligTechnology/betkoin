myApp.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal) {
        $scope.template = TemplateService.getHTML("content/home.html");
        TemplateService.title = "Home";
        TemplateService.header1 = ""; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        // location.href = "#zeroPage";
        $scope.gameData = [{
                img: 'img/game4.jpg',
                title: 'TeenPatti',
                description: " Love to play Teen Patti games? Download the game on Kings App on your smartphone. You can play multiplayer Teenpatti games with real players from all across the world and have unlimited fun! You can also create your own private table to play amongst your own set of friends! "
            },
            {
                img: 'img/p1.jpg',
                title: 'Texas Holdem Poker',
                description: " Join the world’s most popular Poker game with more tables, more tournaments, and more people to challenge than ever before. It’s Texas Hold ‘Em Poker the way YOU want to play! You can also create your own private table to play amongst your own set of friends! "
            },
            {
                img: 'img/r1.jpg',
                title: 'Roulette',
                description: "Now experience the excitement and thrill of playing roulette in the real Las Vegas casino surroundings on your phones. Also, the player will get commission on the turnover achieved on the roulette table by them.  "
            }, {
                img: 'img/Baccarat.jpg',
                title: 'Live Baccarat',
                description: "Baccarat is one of the most popular card games that is played across the world in all casinos. This game has been featured in many TV shows, and in numerous movies such as James Bond where the game is seen being played by suave and sophisticated gentlemen in exclusive casinos. Our app gives you the opportunity to experience the thrills of playing  baccarat games from the comfort of your own home"
            }, {
                img: 'img/blackjack.jpg',
                title: 'Live Blackjack',
                description: "Win BIG at your next casino trip by playing this Blackjack app, with the best casino-style experience. Hey Blackjack Fans! We’ve made some updates and optimized the gameplay to make sure you have the best blackjack experience around!"
            }, {
                img: 'img/money.png',
                title: 'Live Money Wheel',
                description: "These wheels will definitely take casino players to where they want to go where wheels equate to a money-making scenic route. Win casino money in wheel bonus rounds in arcade games, slot games, table games and more. Watching the wheels go by is much more action packed than it used to be."
            }, {
                img: 'https://cdn.decent.bet/img/backgrounds/roulette.jpg',
                title: 'Live Roulette',
                description: "Roulette Live captures the sprint of a truly awesome week-end in Vegas!  Invite your friends to the most social table game on the market.Spin the wheel, feel the tension and watch the fireworks if you win big!"
            }, {
                img: 'img/game1.jpg',
                title: 'Live Ultimate Texas Holdem',
                description: "Ultimate Poker, with its speed and simplicity, is designed both for the expert looking for a clean Texas Hold'em No Limit experience, and for new comers looking for a simple poker app to pick up the world's most popular card game."
            },
            {
                img: 'img/exteme.png',
                title: 'Live Extreme Texas Holdem ',
                description: "You are bored to play a poker game everyday, aren’t you? EXTREME POKER is Great New Game depend on the poker rules.Play the most amazing multi-decision Hold'em game in the world! "
            },
            {
                img: 'img/casino.jpg',
                title: 'Live Casino Holdem',
                description: "its An exciting variation of the much-loved five-card Texas Hold’em poker game, Live Casino Hold’em. Available as standard and dedicated tables for players on desktop and tablet, it’s the perfect way to attract poker enthusiasts to your Live Casino and to keep them entertained. "
            },
            {
                img: 'img/triplecard.png',
                title: 'Live Three Card Poker',
                description: "Three Card Poker is the most popular specialty table game of all times, you can experience it live too! it's one of the easiest games around, making it the absolutely perfect choice!"
            },
            {
                img: 'img/threecardpoker.jpg',
                title: 'Live Triple Card Poker ',
                description: "Live Tripple Card Poker offers all of the excitement of a standard poker game in a live gaming format against the dealer. If you’re interested in winning big, Live Three Card Poker is the must-play attraction.Play triple card poker head-to-head against the dealer! "
            },
            {
                img: 'img/7cardstud.jpg',
                title: 'Live Caribbean Stud',
                description: "Come see why this has always been one of the most popular poker variations!<br>1. beat the dealer by having a better hand.<br>2. win up to 1000: 1 on the optional 5 + 1 bonus bet "
            },
        ]
        $scope.mySlides = [{
                img: 'img/game4.jpg',
                title: 'TeenPatti'
            },
            {
                img: 'img/p1.jpg',
                title: 'Texas Holdem Poker',
                description: ""
            }, {
                img: 'img/r1.jpg',
                title: 'Roulette',
                description: " "
            }, {
                img: 'img/Baccarat.jpg',
                title: 'Live Baccarat'
            }, {
                img: 'img/blackjack.jpg',
                title: 'Live Blackjack'
            }, {
                img: 'img/money.png',
                title: 'Live Money Wheel'
            }, {
                img: 'https://cdn.decent.bet/img/backgrounds/roulette.jpg',
                title: 'Live Roulette'
            }, {
                img: 'img/game1.jpg',
                title: 'Live Ultimate Texas Holdem'
            },
            {
                img: 'img/exteme.png',
                title: 'Live Extreme Texas Holdem '
            },
            {
                img: 'img/casino.jpg',
                title: 'Live Casino Holdem'
            },

            {
                img: 'img/threecardpoker.jpg',
                title: 'Live Three Card Poker'
            },
            {
                img: 'img/triplecard.png',
                title: 'Live Triple Card Poker '
            },
            {
                img: 'img/7cardstud.jpg',
                title: 'Live Caribbean Stud'
            },


            // {
            //     img: 'https://cdn.decent.bet/img/backgrounds/craps.jpg',
            //     title: 'Craps'
            // },

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
            // {
            //     img: 'img/TexasHold.jpg',
            //     title: 'Texas Holdem Bonus Poker'
            // },
            // {
            //     img: 'img/dreamcatcher.png',
            //     title: 'Dreamcatcher'
            // }
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
        $scope.openCasino = function (s) {
            $scope.modalName = s;
            $scope.feedbackInstance = $uibModal.open({
                animation: true,
                templateUrl: "views/content/modal/common-casino.html",
                scope: $scope,
                size: 'md',
                // backdropClass: 'back-drop'
            });
        }
        $scope.openCricket = function () {
            $scope.feedbackInstance = $uibModal.open({
                animation: true,
                templateUrl: "views/content/cricket.html",
                scope: $scope,
                size: 'md',
                // backdropClass: 'back-drop'
            });
        }
        $scope.openFootball = function () {
            $scope.feedbackInstance = $uibModal.open({
                animation: true,
                templateUrl: "views/content/football.html",
                scope: $scope,
                size: 'md',
                // backdropClass: 'back-drop'
            });
        }
        $scope.openTennis = function () {
            $scope.feedbackInstance = $uibModal.open({
                animation: true,
                templateUrl: "views/content/tennis.html",
                scope: $scope,
                size: 'md',
                // backdropClass: 'back-drop'
            });
        }
        $scope.openGreyhoundRacing = function () {
            $scope.feedbackInstance = $uibModal.open({
                animation: true,
                templateUrl: "views/content/greyhoundracing.html",
                scope: $scope,
                size: 'md',
                // backdropClass: 'back-drop'
            });
        }
        $scope.openHorseRacing = function () {
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
        TemplateService.header1 = "";
        TemplateService.title = "FAQ"; // This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
    })

    .controller('AboutusCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/aboutus.html");
        TemplateService.title = "About Us";
        TemplateService.header1 = ""; // This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        setTimeout(function () {
            new WOW().init();
        }, 0);
    })

    .controller('TokenstructureCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/tokenstructure.html");
        TemplateService.title = "Token Structure";
        TemplateService.header1 = ""; // This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        setTimeout(function () {
            new WOW().init();
        }, 0);
    })

    .controller('WhitepaperCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/whitepaper.html");
        TemplateService.title = "White Paper";
        TemplateService.header1 = ""; // This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
    })

    .controller('PartnerCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http, $uibModal) {
        $scope.template = TemplateService.getHTML("content/partner.html");
        TemplateService.title = "Partner With Us";
        TemplateService.header1 = ""; // This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();

        //Thank You Modal
        $scope.openThanku = function () {
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
        TemplateService.title = "Contact Us";
        TemplateService.header1 = ""; // This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
    })

    // Example API Controller
    .controller('DemoAPICtrl', function ($scope, TemplateService, apiService, NavigationService, $timeout) {
        apiService.getDemo($scope.formData, function (data) {
            console.log(data);
        });
    });