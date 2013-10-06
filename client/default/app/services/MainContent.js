(function(window, angular) {

    "use strict";


    //_____________________<{ SOCIAL ICONS }>_____________________\\
    angular.module("website")
        .provider("SocialIcons", function() {

            var social = [];

            social = [{
                name: "Facebook",
                src: "http://www.facebook.com/Zaeire",
                imgSrc: [{
                    small: "imgs/icons/28x28/facebook.jpg",
                    small_blk: "imgs/icons/28x28/facebook-square.jpg"
                }, {
                    large: "imgs/icons/facebook.png",
                    large_blk: "imgs/icons/facebook-square.png"
                }]
            }, {
                name: "Twitter",
                src: "http://twitter.com/Zaeire",
                imgSrc: [{
                    small: "imgs/icons/28x28/twitter.jpg",
                    small_blk: "imgs/icons/28x28/twitter-square.jpg"
                }, {
                    large: "imgs/icons/twitter.png",
                    large_blk: "imgs/icons/twitter-square.png"
                }]
            }, {
                name: "Contact Us",
                src: "mailto:leigh@zaeire.com",
                imgSrc: [{
                    small: "imgs/icons/28x28/mail.jpg",
                    small_blk: "imgs/icons/28x28/gmail-square.jpg"
                }, {
                    large: "imgs/icons/mail.png",
                    large_blk: "imgs/icons/gmail-square.png"
                }]
            }];

            return {
                $get: function() {
                    return social;
                }
            };
        });

    //_____________________<{ IMAGES }>_____________________\\
    angular.module("website")
        .provider("ImageBank", function() {

            var ImgBank = {};

            ImgBank.gallery = [{
                img: '../../../imgs/600x400/choco001.jpg',
                width: 473,
                height: 400,
                desc: 'Piazza del Duomo, Florence, Italy'
            }, {
                img: '../../imgs/600x400/choco002.jpg',
                width: 267,
                height: 400,
                desc: 'Tuscan Landscape'
            }, {
                img: '../../imgs/600x400/choco003.jpg',
                width: 600,
                height: 400,
                desc: 'Colosseo, Rome, Italy'
            }, {
                img: '../../imgs/600x400/choco004.jpg',
                width: 600,
                height: 400,
                desc: 'Somewhere near Chinatown, San Francisco'
            }, {
                img: '../../imgs/600x400/choco005.jpg',
                width: 473,
                height: 400,
                desc: 'Medieval guard tower, Asciano, Siena, Italy'
            }, {
                img: '../../imgs/600x400/choco006.jpg',
                width: 600,
                height: 400,
                desc: 'Tuscan Landscape'
            }, {
                img: '../../imgs/600x400/choco007.jpg',
                width: 600,
                height: 400,
                desc: 'Colosseo, Rome, Italy'
            }, {
                img: '../../imgs/600x400/choco008.jpg',
                width: 393,
                height: 400,
                desc: 'Somewhere near Chinatown, San Francisco'
            }, {
                img: '../../imgs/600x400/choco009.jpg',
                width: 473,
                height: 400,
                desc: 'Medieval guard tower, Asciano, Siena, Italy'
            }, {
                img: '../../imgs/600x400/choco010.jpg',
                width: 600,
                height: 400,
                desc: 'Tuscan Landscape'
            }, {
                img: '../../imgs/600x400/choco011.jpg',
                width: 600,
                height: 400,
                desc: 'Colosseo, Rome, Italy'
            }, {
                img: '../../imgs/600x400/choco012.jpg',
                width: 473,
                height: 400,
                desc: 'Somewhere near Chinatown, San Francisco'
            }, {
                img: '../../imgs/600x400/choco013.jpg',
                width: 600,
                height: 400,
                desc: 'Medieval guard tower, Asciano, Siena, Italy'
            }, {
                img: '../../imgs/600x400/choco014.jpg',
                width: 600,
                height: 400,
                desc: 'Tuscan Landscape'
            }, {
                img: '../../imgs/600x400/choco015.jpg',
                width: 473,
                height: 400,
                desc: 'Colosseo, Rome, Italy'
            }, {
                img: '../../imgs/600x400/choco016.jpg',
                width: 600,
                height: 400,
                desc: 'Somewhere near Chinatown, San Francisco'
            }, {
                img: '../../imgs/600x400/choco017.jpg',
                width: 600,
                height: 400,
                desc: 'Medieval guard tower, Asciano, Siena, Italy'
            }, {
                img: '../../imgs/600x400/choco018.jpg',
                width: 473,
                height: 400,
                desc: 'Tuscan Landscape'
            }, {
                img: '../../imgs/600x400/choco019.jpg',
                width: 600,
                height: 400,
                desc: 'Colosseo, Rome, Italy'
            }, {
                img: '../../imgs/600x400/choco020.jpg',
                width: 600,
                height: 400,
                desc: 'Somewhere near Chinatown, San Francisco'
            }, {
                img: '../../imgs/600x400/choco021.jpg',
                width: 600,
                height: 400,
                desc: 'Medieval guard tower, Asciano, Siena, Italy'
            }, {
                img: '../../imgs/600x400/choco022.jpg',
                width: 600,
                height: 207,
                desc: 'Tuscan Landscape'
            }, {
                img: '../../imgs/600x400/choco023.jpg',
                width: 600,
                height: 400,
                desc: 'Colosseo, Rome, Italy'
            }, {
                img: '../../imgs/600x400/choco024.jpg',
                width: 600,
                height: 302,
                desc: 'Somewhere near Chinatown, San Francisco'
            }, {
                img: '../../imgs/600x400/choco025.jpg',
                width: 600,
                height: 400,
                desc: 'Medieval guard tower, Asciano, Siena, Italy'
            }, {
                img: '../../imgs/600x400/choco026.jpg',
                width: 600,
                height: 140,
                desc: 'Tuscan Landscape'
            }, {
                img: '../../imgs/600x400/choco027.jpg',
                width: 296,
                height: 400,
                desc: 'Colosseo, Rome, Italy'
            }, {
                img: '../../imgs/600x400/choco028.jpg',
                width: 600,
                height: 400,
                desc: 'Somewhere near Chinatown, San Francisco'
            }, {
                img: '../../imgs/600x400/choco029.jpg',
                width: 600,
                height: 98,
                desc: 'Medieval guard tower, Asciano, Siena, Italy'
            }, {
                img: '../../imgs/600x400/choco030.jpg',
                width: 267,
                height: 400,
                desc: 'Medieval guard tower, Asciano, Siena, Italy'
            }, {
                img: '../../imgs/600x400/choco031.jpg',
                width: 600,
                height: 400,
                desc: 'Leaning tower, Pisa, Italy'
            }];

            ImgBank.chocoImgs = [{
                img: 'imgs/chocoGallery/choco1.jpg',
                width: 473,
                height: 400,
                title: "Hazelnut Crunch",
                text: ''
            }, {
                img: 'imgs/chocoGallery/choco2.jpg',
                width: 267,
                height: 400,
                title: "Raspberry Cream",
                text: ''
            }, {
                img: 'imgs/chocoGallery/choco3.jpg',
                width: 600,
                height: 400,
                title: "Honeycomb",
                text: ''
            }, {
                img: 'imgs/chocoGallery/choco4.jpg',
                width: 600,
                height: 400,
                title: "Mint Truffles",
                text: ''
            }, {
                img: 'imgs/chocoGallery/choco5.jpg',
                width: 473,
                height: 400,
                title: "Baileys Cream",
                text: ''
            }];

            return {
                $get: function() {
                    return ImgBank;
                }
            };
        });
})(window, window.angular);