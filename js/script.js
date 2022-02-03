'use strict'
$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        waitForAnimate: false,
        appendDots: '.strategies-content__slider__dots',
        centerMode: false,

    })
})