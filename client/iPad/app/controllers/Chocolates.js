(function(window, angular) {

    "use strict";

    angular.module('website')
        .controller("ChocolatesCtrl", function($scope, $routeParams, ImageBank) {

            console.info("$scope - ChocCtrl \n", $scope);
            //________________<{ $scope variables }>_________________\\

            $scope.title = "Chocolates";
            $scope.body = "This is where the Chocolates will go";
            $scope.imageBank = ImageBank;

            //________________<{ $scope methods }>_________________\\

            $scope.chocos = function() {
                console.log('Hello from Chocolates', $scope);
            };

            $scope.chocoGallery = function() {
                document.addEventListener('touchmove', function(e) {
                    e.preventDefault();
                }, false);

                var gallery,
                    el,
                    i,
                    page,
                    dots = document.querySelectorAll('#nav li'),
                    slides = ImageBank.chocoImgs;

                gallery = new SwipeView('#chocolates', {
                    numberOfPages: slides.length
                });

                // Load initial data
                for (i = 0; i < 3; i++) {
                    page = i === 0 ? slides.length - 1 : i - 1;
                    el = document.createElement('img');
                    el.className = 'loading';
                    el.src = slides[page].img;
                    el.width = slides[page].width;
                    el.height = slides[page].height;
                    el.onload = function() {
                        this.className = '';
                    };
                    gallery.masterPages[i].appendChild(el);

                    el = document.createElement('span');
                    el.innerHTML = slides[page].desc;
                    gallery.masterPages[i].appendChild(el);
                }

                gallery.onFlip(function() {
                    var el,
                        upcoming,
                        i;

                    for (i = 0; i < 3; i++) {
                        upcoming = gallery.masterPages[i].dataset.upcomingPageIndex;

                        if (upcoming != gallery.masterPages[i].dataset.pageIndex) {
                            el = gallery.masterPages[i].querySelector('img');
                            el.className = 'loading';
                            el.src = slides[upcoming].img;
                            el.width = slides[upcoming].width;
                            el.height = slides[upcoming].height;

                            el = gallery.masterPages[i].querySelector('span');
                            el.innerHTML = slides[upcoming].desc;
                        }
                    }

                    document.querySelector('#nav .selected').className = '';
                    dots[gallery.pageIndex + 1].className = 'selected';
                });

                gallery.onMoveOut(function() {
                    gallery.masterPages[gallery.currentMasterPage].className = gallery.masterPages[gallery.currentMasterPage].className.replace(/(^|\s)swipeview-active(\s|$)/, '');
                });

                gallery.onMoveIn(function() {
                    var className = gallery.masterPages[gallery.currentMasterPage].className;
                    /(^|\s)swipeview-active(\s|$)/.test(className) || (gallery.masterPages[gallery.currentMasterPage].className = !className ? 'swipeview-active' : className + ' swipeview-active');
                });
            };
        });

})(window, window.angular);