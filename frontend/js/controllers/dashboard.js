myApp.controller('DashboardCtrl', function ($scope, TemplateService, NavigationService,apiService, $timeout, toastr, $http) {
    $scope.template = TemplateService.getHTML("content/dashboard.html");
    TemplateService.title = "Dashboard"; //This is the Title of the Website $scope.navigation
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
        var userData={};
        userData._id= $.jStorage.get('memberId');
        apiService.getCoinTx(userData,function (data) {
            console.log("$scope.coinTxData",data.data);
            if (data.value) {
                $scope.coinTxData = data.data.results;
            }
        })
    };
    $scope.getCoinTxData();
    
})