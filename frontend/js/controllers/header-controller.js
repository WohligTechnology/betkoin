myApp.controller('headerCtrl', function ($scope, apiService, $state, TemplateService, $timeout) {
    $scope.template = TemplateService;
    $scope.working = false;
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
    $.fancybox.close(true);

    $scope.playerData = function () {
        apiService.sendAccessToken(function (data) {
            if (data.data.value) {
                $scope.singlePlayerData = data.data.data;
                $scope.image = $scope.singlePlayerData.image;
                $scope.memberId = $scope.singlePlayerData._id;
                $.jStorage.set('memberId', $scope.memberId);
                $scope.username = $scope.singlePlayerData.username;
                $scope.accessLevel = $scope.singlePlayerData.accessLevel;
                $scope.userType = $scope.singlePlayerData.userType;
                $scope.balance = $scope.singlePlayerData.creditLimit + $scope.singlePlayerData.balanceUp;
                $.jStorage.set('walletAddress', $scope.singlePlayerData.walletDetails.address);
                $.jStorage.set('username', $scope.singlePlayerData.username);
                $.jStorage.set('accessLevel', $scope.singlePlayerData.accessLevel);
                console.log("$scope.walletAddress", $.jStorage.get('walletAddress'));
            } else if ("No Member Found") {
                $.jStorage.flush();
                $state.go('login');
            }
        })
    };
    if (!$.jStorage.get('username')) {
        $scope.playerData();
    } else {
        $scope.username = $.jStorage.get('username');
        $scope.accessLevel = $.jStorage.get('accessLevel');
    }

    $scope.logout = function () {
        $.jStorage.flush();
        $state.go('login');
    }
    $scope.openDropdown = function () {
        $scope.working = true;
        $('#subscribe-pop').css("display", "block");
    };
    $timeout(function () {
        $('html').click(function () {
            $scope.working = false;
            $('#subscribe-pop').css("display", "none");
        })
    }, 300)


    $('#footleft').click(function (e) {
        e.stopPropagation();
    });

    $('#link').click(function (e) {
        $scope.working = true;
        $('#subscribe-pop').toggle();
    });
    $scope.scrollTop = function () {
        $('html, body').animate({
            scrollTop: $('body,html').offset().top - 100
        }, 3000);
    }

});
myApp.controller('headernewCtrl', function ($scope, $state, apiService, TemplateService, $timeout) {
    $scope.template = TemplateService;
    TemplateService.header = "";


    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
    $.fancybox.close(true);



});