myApp.controller('TutorialsCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
    $scope.template = TemplateService.getHTML("content/tutorials.html");
    TemplateService.title = "Tutorials";
    TemplateService.header1 = ""; //This is the Title of the Website $scope.navigation
    $scope.navigation = NavigationService.getNavigation(); // This is the Title of the Website $scope.navigation= NavigationService.getNavigation();
    $scope.pouseVideo = function () {
        var vid = document.getElementById("myVideo");
        vid.onpause = function () {};
    }



    $scope.Roulette = [{
        imageUrl: "noU2B3hw21A",
        videoUrl: "noU2B3hw21A",
        desc: "american roulette "
    }, {
        imageUrl: "DmtD-1j7wac",
        videoUrl: "DmtD-1j7wac",
        desc: "grand casino bucharest"
    }, {
        imageUrl: "rbXzGiHQOKs",
        videoUrl: "rbXzGiHQOKs",
        desc: "immersive roulette 1"
    }, {
        imageUrl: "Z31cnsedkXo",
        videoUrl: "Z31cnsedkXo",
        desc: "immersive roulette 2"
    }, {
        imageUrl: "hDgId_CbwBU",
        videoUrl: "hDgId_CbwBU",
        desc: "immersive roulette 3"
    }, {
        imageUrl: "-su9zj3ZGIY",
        videoUrl: "-su9zj3ZGIY",
        desc: "immersive roulette 4"
    }, {
        imageUrl: "qkaWawt2bdQ",
        videoUrl: "qkaWawt2bdQ",
        desc: "immersive roulette 5"
    }, {
        imageUrl: "22uljs_ziXI",
        videoUrl: "22uljs_ziXI",
        desc: "lightning roulette 1 "
    }, {
        imageUrl: "brDDkRrbOfw",
        videoUrl: "brDDkRrbOfw",
        desc: "lightning roulette 2 "
    }, {
        imageUrl: "aFHteTJ7Cpc",
        videoUrl: "aFHteTJ7Cpc",
        desc: "vip "
    }, {
        imageUrl: "xmgpvDz-3FY",
        videoUrl: "xmgpvDz-3FY",
        desc: "vip roulette "
    }, {
        imageUrl: "I2s64_UIKHA",
        videoUrl: "I2s64_UIKHA",
        desc: " speed roulette "
    }, {
        imageUrl: "gfjrAZj_F58",
        videoUrl: "gfjrAZj_F58",
        desc: "double ball roulette  "
    }]



    $scope.Baccarat = [{
        imageUrl: "KQXR4oUMkWs",
        videoUrl: "KQXR4oUMkWs",
        desc: " baccarat standard table 1"
    }, {
        imageUrl: "HRnjx911t7E",
        videoUrl: "HRnjx911t7E",
        desc: " baccarat standard table 2"
    }, {
        imageUrl: "MaBDbTL1Yq4",
        videoUrl: "MaBDbTL1Yq4",
        desc: " live baccarat squeeze 1"
    }, {
        imageUrl: "5JDrJVtKMAY",
        videoUrl: "5JDrJVtKMAY",
        desc: "  live baccarat squeeze 2"
    }, {
        imageUrl: "3ds90K35Jgo",
        videoUrl: "3ds90K35Jgo",
        desc: "baccarat squeeze "
    }, {
        imageUrl: "Ko6OS3h5hFk",
        videoUrl: "Ko6OS3h5hFk",
        desc: "baccarat squeeze 3"
    }, {
        imageUrl: "JmXDopwjUvg",
        videoUrl: "JmXDopwjUvg",
        desc: "no commission baccarat "
    }]




    $scope.Blackjack = [{
        imageUrl: "RMnF3WL_5jw",
        videoUrl: "RMnF3WL_5jw",
        desc: "live blackjack generic 1"
    }, {
        imageUrl: "v3-1S5HDvY0",
        videoUrl: "v3-1S5HDvY0",
        desc: "diamond vip blackjack "
    }, {
        imageUrl: "-SFQUGo0P58",
        videoUrl: "-SFQUGo0P58",
        desc: "platinum vip blackjack "
    }, {
        imageUrl: "Mrcasx6UWsc",
        videoUrl: "Mrcasx6UWsc",
        desc: "live blackjack generic 2 "
    }, {
        imageUrl: "cQLhGZlWHKk",
        videoUrl: "cQLhGZlWHKk",
        desc: "vip blackjack "
    }, {
        imageUrl: "dHvs69kaaLI",
        videoUrl: "dHvs69kaaLI",
        desc: "vip environment "
    }]







    $scope.Dreamcatcher = [{
        imageUrl: "h59tkPqaV4Y",
        videoUrl: "h59tkPqaV4Y",
        desc: "dreamcatcher 1 "
    }, {
        imageUrl: "R7j-_bFLSO4",
        videoUrl: "R7j-_bFLSO4",
        desc: "dream catcher 2 "
    }, {
        imageUrl: "Fj9JjG3YOCM",
        videoUrl: "Fj9JjG3YOCM",
        desc: "dream catcher 3 "
    }]



    $scope.Texesholdem = [{
        imageUrl: "NjnRJ1ynmS4",
        videoUrl: "NjnRJ1ynmS4",
        desc: " texas holdem bonus poker"
    }, {
        imageUrl: "MGZnU3WfLSM",
        videoUrl: "MGZnU3WfLSM",
        desc: " texas holdem bonus"
    }, {
        imageUrl: "VSGB_c3fVIs",
        videoUrl: "VSGB_c3fVIs",
        desc: "ultimate texas holdem "
    }, {
        imageUrl: "kdr1kErjnNM",
        videoUrl: "kdr1kErjnNM",
        desc: " bwin poker game snippet"
    }]



    $scope.Threecardpoker = [{
        imageUrl: "lDj9yrAEoYo",
        videoUrl: "lDj9yrAEoYo",
        desc: "poker suite"
    }]
})