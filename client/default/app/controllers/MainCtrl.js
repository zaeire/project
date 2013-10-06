(function(window, angular) {

    "use strict";

    angular.module('website')
        .controller("MainCtrl", function($scope, $location) {

            $scope.setRoute = function(route) {
                $location.path(route);
            };

            $scope.main = function() {
                console.log('Hello from Main', $scope);
            };



        });

})(window, window.angular);