(function(window, angular) {

    "use strict";

    angular.module('website')
        .controller("ContactCtrl", function($scope, $routeParams, SocialIcons) {

            //________________<{ $scope varibales }>______________\\
            $scope.title = "Contact";
            $scope.body = "This is where the contacts info will go";
            $scope.social = SocialIcons;

            console.log("Hello from the ContactCtrl\n", $scope.social);

            //________________<{ $scope methods }>_________________\\
            $scope.show = function() {
                console.log("Just passed to toggle() from show()");
                $scope.toggle = true;
            };
        });

})(window, window.angular);