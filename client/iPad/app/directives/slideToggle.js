(function(window, angular) {

    "use strict";

    angular.module("website")
        .directive("togglestyle", function() {

            return function(scope, element) {
                element.bind("click", function() {
                    console.log("toggleClass");
                    element.toggleClass('arrow-right-down');

                    if (element.hasClass('arrow-right-down')) {
                        scope.isVisible = !scope.isVisible;
                        console.log("isVisible");
                    }
                });
            };

        });

    angular.module("website")
        .directive("contactinfo", function() {

            return {
                restrict: "C",
                // templateUrl: 'views/contact.html'
                template: '<div id="contactDiv" class="show inset-shadow" ng-show="toggle" togglestyle>' + '<div class="well well-large">' + 'gdjfgjdhgfhgdshjgf' + '</div></div>'
            };

        });
})(window, window.angular);