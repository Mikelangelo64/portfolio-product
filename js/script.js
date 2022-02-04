'use strict'


$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        waitForAnimate: false,
        appendDots: '.strategies-content__slider__dots',
        responsive:[
            {
                breakpoint: 1030,
                settings:{
                    slidesToShow: 2,
                }
            },{
                breakpoint: 430,
                settings:{
                    slidesToShow: 1,
                    centerMode: true,
                    variableWidth: true,

                }
            }
        ]

    })

    //scrollTo
    const menuLinks =document.querySelectorAll('.menu__link[data-goto]')
    console.log(menuLinks)
    if(menuLinks.length > 0){
        menuLinks.forEach(menuLink => {
            menuLink.addEventListener("click", onMenuLinkClick)
        })
    }

    function onMenuLinkClick(e){ 
        const menuLink = e.target
        console.log(menuLinks)
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto)
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight
            const burger = $('.burger')[0]
            
            if(burger.classList.contains('_active-menu')){
                burger.classList.remove('_active-menu')
                document.body.classList.remove('_lock')
                $('.header-content__main')[0].classList.remove('_active-menu')
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            })
            e.preventDefault()
            
        } 
    }

    //burger
    $('.burger').click(function(event){
        $('.burger, .header-content__main').toggleClass('_active-menu')
        $('body').toggleClass('_lock')
    })

    //bottom on 425px's screen
    $('.bottom-content__resources__title').click(function(event){
        $(this).toggleClass('_bottom-active__resources').next().toggleClass('_bottom-active__resources')
        $('.bottom-content__recources__and__stuff').toggleClass('_bottom-active__resources')
        if($('.bottom-content__stuff__title').hasClass('_bottom-active__stuff')){
            $('.bottom-content__stuff__title').removeClass('_bottom-active__stuff').next().removeClass('_bottom-active__stuff')
            $('.bottom-content__recources__and__stuff').removeClass('_bottom-active__stuff')
        }
        
    })

    $('.bottom-content__stuff__title').click(function(event){
        $(this).toggleClass('_bottom-active__stuff').next().toggleClass('_bottom-active__stuff')
        
        $('.bottom-content__recources__and__stuff').toggleClass('_bottom-active__stuff')
        if($('.bottom-content__resources__title').hasClass('_bottom-active__resources')){
            $('.bottom-content__resources__title').removeClass('_bottom-active__resources').next().removeClass('_bottom-active__resources')
            $('.bottom-content__recources__and__stuff').removeClass('_bottom-active__resources')
        }
        
        
    })

    //DARK-THEME
    $('.theme').click(function(event){
        $('.theme').toggleClass('_dark-switch')
    })
})