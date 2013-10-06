(function(window, angular) {

    "use strict";

    angular.module("website")
        .directive("zoom-gallery", function(ImageBank) {

            var data = ImageBank.chocoImgs;
            console.info("zoom-gallery", data);

            return function(data) {

                deck = new CardView('#zoom-wrapper', {
                    effect: 'zoom',
                    dataset: data,
                    onUpdateContent: function(el, data) {
                        el.querySelector('img').src = data.img;
                        el.querySelector('h3').innerHTML = data.title;
                        el.querySelector('p').innerHTML = data.text;
                    }
                });

                document.addEventListener('touchmove', function(e) {
                    e.preventDefault();
                }, false);

            };

        });
})(window, window.angular);