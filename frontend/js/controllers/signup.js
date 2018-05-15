myApp.controller('SignupCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
    $scope.template = TemplateService.getHTML("content/signup.html");
    TemplateService.header1 = "";
    TemplateService.title = "Sign Up"; //This is the Title of the Website $scope.navigation
    $scope.navigation = NavigationService.getNavigation(); // This is the Title of the Website $scope.navigation= NavigationService.getNavigation();
})