(function(window, angular) {

    "use strict";

    angular.module("website")
        .directive("chocogallery", function() {
            console.log("chocogallery");

            return {
                restrict: "A",
                templateUrl: '../app/views/template/choco-gallery.html'
            };
        });
})(window, window.angular);