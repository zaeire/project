(function(window, angular) {

    angular.module('website', [])
        .config(function($routeProvider) {

            $routeProvider

            .when('/contact', {
                templateUrl: 'app/views/contact.html',
                controller: 'ContactCtrl'
            })

            .when('/products', {
                templateUrl: 'app/views/templates/container.html',
                controller: 'ProductsCtrl'
            })

            .when('/chocolates', {
                templateUrl: 'app/views/templates/choco-gallery.html',
                controller: 'ChocolatesCtrl'
            })

            .otherwise({
                redirectTo: '/home',
                templateUrl: 'app/views/templates/container.html',
                controller: 'HomeCtrl'
            });
        });
})(window, window.angular);