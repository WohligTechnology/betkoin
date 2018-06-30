myApp.controller('DashboardCtrl', function ($scope, TemplateService, NavigationService, $stateParams, $state, apiService, $timeout, toastr, $http) {
    $scope.template = TemplateService.getHTML("content/dashboard.html");
    TemplateService.title = "Dashboard";
    TemplateService.header1 = ""; //This is the Title of the Website $scope.navigation
    $scope.navigation = NavigationService.getNavigation(); // This is the Title of the Website $scope.navigation= NavigationService.getNavigation();
    $scope.TableData = [{
        "srno": "1",
        "datetime": "3 Apr 2018 02:58:32 PM",
        "username": "Withdrawal",
        "desc": "Enim Nulla leo",
        "amount": "85000",
        "give": "Bitcoin Wallet",
        "status": "Done"
    }, {
        "srno": "2",
        "datetime": "3 Apr 2018 02:58:32 PM",
        "username": "Withdrawal",
        "desc": "Enim Nulla leo",
        "amount": "85000",
        "give": "Bitcoin Wallet",
        "status": "Done"
    }, {
        "srno": "3",
        "datetime": "3 Apr 2018 02:58:32 PM",
        "username": "Withdrawal",
        "desc": "Enim Nulla leo",
        "amount": "85000",
        "give": "Bitcoin Wallet",
        "status": "Done"
    }, {
        "srno": "4",
        "datetime": "3 Apr 2018 02:58:32 PM",
        "username": "Withdrawal",
        "desc": "Enim Nulla leo",
        "amount": "85000",
        "give": "Bitcoin Wallet",
        "status": "Done"
    }, {
        "srno": "5",
        "datetime": "3 Apr 2018 02:58:32 PM",
        "username": "Withdrawal",
        "desc": "Enim Nulla leo",
        "amount": "85000",
        "give": "Bitcoin Wallet",
        "status": "Done"
    }, {
        "srno": "6",
        "datetime": "3 Apr 2018 02:58:32 PM",
        "username": "Withdrawal",
        "desc": "Enim Nulla leo",
        "amount": "85000",
        "give": "Bitcoin Wallet",
        "status": "Done"
    }];

    $scope.getCoinTxData = function () {

    };
    $scope.getCoinTxData();

    $scope.playerData = function () {
        apiService.sendAccessToken(function (data) {
            if (data.data.value) {
                $scope.singlePlayerData = data.data.data;
                var userData = {};
                userData._id = $scope.singlePlayerData._id;
                apiService.getCoinTx(userData, function (data) {
                    console.log("$scope.coinTxData", data.data);
                    if (data.value) {
                        $scope.coinTxTotalData = data.data.total;
                        $scope.coinTxData = data.data.results;
                    }
                })
            } else if ("No Member Found") {
                $.jStorage.flush();
                $state.go('login');
            }
        })
    };
    $scope.playerData();
    //for pagination
    // $scope.totalItems = 64;
    // $scope.currentPage = 4;

    // $scope.setPage = function (pageNo) {
    //     $scope.currentPage = pageNo;
    // };

    // $scope.maxSize = 5;
    // $scope.bigTotalItems = 175;
    // $scope.bigCurrentPage = 1;



    if ($stateParams.page && !isNaN(parseInt($stateParams.page))) {
        $scope.currentPage = $stateParams.page;
    } else {
        $scope.currentPage = 1;
    }


    $scope.pageChanged = function (page) {
        $state.go('dashboard', {
            page: page
        });
    };

    $scope.getAllItems = function () {
        apiService.sendAccessToken(function (data) {
            if (data.data.value) {
                $scope.singlePlayerData = data.data.data;
                $scope.totalItems = undefined;
                var userData = {};
                userData.page = $scope.currentPage
                userData._id = $scope.singlePlayerData._id;

                apiService.getCoinTx(userData, function (data) {
                    console.log("$scope.coinTxData", data.data);
                    if (data.value) {
                        $scope.coinTxData = data.data.results;
                        $scope.totalItems = data.data.total;
                        $scope.maxRow = data.data.options.count;
                    }
                })
            } else if ("No Member Found") {
                $.jStorage.flush();
                $state.go('login');
            }
        })




    };
    $scope.getAllItems();
})