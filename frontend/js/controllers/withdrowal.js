myApp.controller('WithdrowalCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
    $scope.template = TemplateService.getHTML("content/withdrowal.html");
    TemplateService.title = "Withdrowal"; //This is the Title of the Website $scope.navigation
    $scope.navigation = NavigationService.getNavigation(); // This is the Title of the Website $scope.navigation= NavigationService.getNavigation();
})