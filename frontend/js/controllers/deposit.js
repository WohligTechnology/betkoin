myApp.controller('DepositCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
    $scope.template = TemplateService.getHTML("content/deposit.html");
    TemplateService.title = "Deposit"; //This is the Title of the Website $scope.navigation
    $scope.navigation = NavigationService.getNavigation(); // This is the Title of the Website $scope.navigation= NavigationService.getNavigation();
})