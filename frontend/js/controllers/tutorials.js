myApp.controller('TutorialsCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
    $scope.template = TemplateService.getHTML("content/tutorials.html");
    TemplateService.title = "Tutorials";
    TemplateService.header1 = ""; //This is the Title of the Website $scope.navigation
    $scope.navigation = NavigationService.getNavigation(); // This is the Title of the Website $scope.navigation= NavigationService.getNavigation();
    $scope.pouseVideo = function () {
        var vid = document.getElementById("myVideo");
        vid.onpause = function () {};
    }
})