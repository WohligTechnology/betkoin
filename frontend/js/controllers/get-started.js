myApp.controller('GetstartedCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
    $scope.template = TemplateService.getHTML("content/get-started.html");
    TemplateService.title = "Get Started"; //This is the Title of the Website $scope.navigation
    TemplateService.header1 = "";
    $scope.navigation = NavigationService.getNavigation(); // This is the Title of the Website $scope.navigation= NavigationService.getNavigation();
})