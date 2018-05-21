myApp.factory('apiService', function ($http, $q, $timeout, $state) {
    return {

        // This is a demo Service for POST Method.
        getDemo: function (formData, callback) {
            $http({
                url: adminurl + 'demo/demoService',
                method: 'POST',
                data: formData
            }).success(callback);
        },
        // This is a demo Service for POST Method.
        signUp: function (formData, callback) {
            $http.post(adminurl + 'Cryptocurrency/signUp', formData).then(function (data) {
                data = data.data;
                callback(data);
            });

        },
        playerLogin: function (formData, callback) {
            $http.post(adminurl + 'member/playerLogin', formData).then(function (data) {
                data = data.data;
                callback(data);
            });

        },
        sendAccessToken: function (callback) {
            var accessToken = $.jStorage.get("accessToken");
            if (!_.isEmpty(accessToken)) {
                $http.post(adminurl + 'member/getAccessLevel', {
                    accessToken: accessToken
                }).then(function (data) {
                    callback(data);
                });
            } else {
                $state.go("login");
            }
        },
        getCoinTx: function (formData, callback) {
            $http.post(adminurl + 'CoinTransaction/getCoinTx', formData).then(function (data) {
                data = data.data;
                callback(data);
            });

        },
        partnerWith: function (formData, callback) {
            $http.post(adminurl + 'PartnerWithUs/save', formData).then(function (data) {
                data = data.data;
                callback(data);
            });

        },

    };
});