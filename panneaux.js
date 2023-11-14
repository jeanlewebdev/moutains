const montreal = document.querySelector('.montreal')
const ocean = document.querySelector('.ocean')
const picardie = document.querySelector('.picardie')
const everest = document.querySelector('.everest')
const espace = document.querySelector('.espace')


montreal.addEventListener('click',()=>{
    montreal.classList.toggle('ouvert')
})
ocean.addEventListener('click',()=>{
    ocean.classList.toggle('ouvert')
})
picardie.addEventListener('click',()=>{
    picardie.classList.toggle('ouvert')
})
everest.addEventListener('click',()=>{
    everest.classList.toggle('ouvert')
})
espace.addEventListener('click',()=>{
    espace.classList.toggle('ouvert')
})