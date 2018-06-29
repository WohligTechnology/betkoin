myApp.controller('SignupCtrl', function ($scope, TemplateService, NavigationService, $state, apiService, $timeout, toastr, $http) {
    $scope.template = TemplateService.getHTML("content/signup.html");
    TemplateService.header1 = "";
    TemplateService.title = "Sign Up"; //This is the Title of the Website $scope.navigation
    $scope.navigation = NavigationService.getNavigation(); // This is the Title of the Website $scope.navigation= NavigationService.getNavigation();
    // $scope.openThanks = function () {
    //     $scope.openthank = $uibModal.open({
    //       animation: true,
    //       templateUrl: "views/content/modal/thanks.html",
    //       scope: $scope,
    //       size: 'md',
    //       // backdropClass: 'back-drop'
    //     });
    //   }
    $scope.signUpFun = function (userData) {
        console.log("userData data", userData);

    apiService.signUp(userData, function (data) {
        console.log("signUp data",data);
        if(data.value){
            $scope.data = data.data;
            $.jStorage.set("accessToken", $scope.data.accessToken[0]);
            $state.go('dashboard');
        }
        else{
            $scope.errorSignup= data.error.errors.username.message;
            console.log("$scope.errorSignup",$scope.errorSignup);
        }

})