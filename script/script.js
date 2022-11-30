const btnProject = document.querySelector('#cardProject').addEventListener('click', showProjects)
const btnTheme = document.querySelector('#theme').addEventListener('click', changeTheme)

function showProjects(){
    console.log('está funcionando')
    const header = document.querySelector('header')
    header.style.display = 'none'
}
function changeTheme(){
    const theme = document.querySelector('header').classList.toggle('light-theme')
}
