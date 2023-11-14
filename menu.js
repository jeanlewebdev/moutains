const burger = document.querySelector('.burger')
const header = document.querySelector('.header')
const menu = document.querySelector('.menu')

burger.addEventListener('click', ()=>{

    header.classList.toggle('visible')
    menu.classList.toggle('visible')

})