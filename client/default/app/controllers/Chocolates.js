(function(window, angular) {

    "use strict";

    angular.module('website')
        .controller("ChocCtrl", function($scope, $routeParams, ImageBank) {

            console.info("$scope - ChocCtrl \n", $scope);
            //________________<{ $scope variables }>_________________\\

            $scope.title = "Chocolates";
            $scope.body = "This is where the Chocolates will go";

            //________________<{ $scope methods }>_________________\\

        });

})(window, window.angular);