(function(window, angular) {

    "use strict";

    angular.module('website')
        .controller("ProductsCtrl", function($scope, $routeParams) {

            $scope.title = "Products";
            $scope.body = "This is where the products will go";

            $scope.products = function() {
                console.log('Hello from Products', $scope);
            };
        });

})(window, window.angular);