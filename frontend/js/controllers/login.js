myApp.controller('LogInCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
    $scope.template = TemplateService.getHTML("content/login.html");
    TemplateService.header1 = "";
    TemplateService.title = "Log in"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation(); // This is the Title of the Website $scope.navigation= NavigationService.getNavigation();
})