$(function () {

    // $(".menuBurger").on({
    //     click: function(){
    //         $(".divNavigation").toggle();
    //     },
    // })

    const burger = document.querySelector('.menuBurger');
    const divNav = document.querySelector('.divNavigation');
    const nameNav = document.querySelector('.divNavigation');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        divNav.classList.toggle('active');
    })

    nameNav.addEventListener('click', () => {
        burger.classList.toggle('active');
        divNav.classList.toggle('active');
    })

});