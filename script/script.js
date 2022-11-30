const btnProject = document.querySelector('#cardProject').addEventListener('click', showProjects)
const btnTheme = document.querySelector('#theme').addEventListener('click', changeTheme)
const hamburguer = document.querySelector('.menu').addEventListener('click', menu)
function showProjects(){
    const header = document.querySelector('header')
    header.style.display = 'none'
    const main = document.querySelector('main')
    main.style.display = 'block'
}
function changeTheme(){
    const theme = document.querySelector('header').classList.toggle('light-theme')
}
function menu(){
    const main = document.querySelector('main')
    main.style.display = 'none'
    const header = document.querySelector('header')  
    header.style.display = 'flex'
}