myApp.controller('headerCtrl', function ($scope,apiService, $state, TemplateService) {
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
                console.log("$scope.walletAddress", $.jStorage.get('walletAddress'));
            } else if ("No Member Found") {
                $.jStorage.flush();
                $state.go('login');
            }
        })
    };
    $scope.playerData();

    $scope.logout=function(){
        $.jStorage.flush();
        $state.go('login');
    }
    $scope.test = function () {
        $scope.working = true;
    }

    $('html').click(function () {
        $scope.working = false;
        $('#subscribe-pop').css("display", "none");
    })

    $('#footleft').click(function (e) {
        e.stopPropagation();
    });

    $('#link').click(function (e) {
        $scope.working = true;
        $('#subscribe-pop').toggle();
    });
});
myApp.controller('headernewCtrl', function ($scope, $state, apiService, TemplateService, $timeout) {
    $scope.template = TemplateService;
    TemplateService.header = "";


    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
    $.fancybox.close(true);

  

});