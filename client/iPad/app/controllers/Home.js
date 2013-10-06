(function(window, angular) {

    "use strict";

    angular.module('website')
        .controller("HomeCtrl", function($scope, $routeParams) {

            $scope.title = "Home";
            $scope.body = "This is where the home will go";

            $scope.home = function() {
                console.log('Hello from Home', $scope);
            };
        });

})(window, window.angular);