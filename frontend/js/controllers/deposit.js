myApp.controller('DepositCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
    $scope.template = TemplateService.getHTML("content/deposit.html");
    TemplateService.title = "Deposit";
    TemplateService.header1 = ""; //This is the Title of the Website $scope.navigation
    $scope.navigation = NavigationService.getNavigation(); // This is the Title of the Website $scope.navigation= NavigationService.getNavigation();
    $scope.walletAddress = $.jStorage.get('walletAddress');
    $scope.QRcode = "https://chart.googleapis.com/chart?cht=qr&chl=" + $scope.walletAddress + "&chs=250x250"
})