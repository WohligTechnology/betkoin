myApp.controller('LogInCtrl', function ($scope, TemplateService, NavigationService, $state, apiService, $timeout, toastr, $http, $uibModal) {
  $scope.template = TemplateService.getHTML("content/login.html");
  TemplateService.header1 = "";
  TemplateService.title = "Log in"; //This is the Title of the Website
  $scope.navigation = NavigationService.getNavigation(); // This is the Title of the Website $scope.navigation= NavigationService.getNavigation();
  // $scope.showMessageModal = function () {
  //   $scope.messageModal.show();
  //   $timeout(function () {
  //     $scope.closeMessageModal();
  //   }, 2000);
  // };
  // $scope.closeMessageModal = function () {
  //   $scope.messageModal.hide();
  // };

  $scope.playerLogin = function (data, login) {
    $scope.loginPromise = apiService.playerLogin(data, function (data) {
      console.log("login", data);
      $.jStorage.set("accessToken", data.data);
      if (data && !_.isEmpty(data.data)) {
        // $scope.openThanks();
        $state.go("dashboard");
      } else if (data.error == "Member already Logged In") {
        $scope.message = {
          heading: "User Already Loged In",
          content: "User already loged in another device. Logout from that device. Try Again!!!"
        };
        // $scope.showMessageModal();
      } else if (data.error == "Login denied") {
        $scope.message = {
          heading: "Login denied",
          content: "Login denied"
        };
        // $scope.showMessageModal();
      } else {
        $scope.message = {
          heading: "Incorrect Username Password",
          content: "Try Again!!!"
        };
        // $scope.showMessageModal();
      }
    });
  };
})