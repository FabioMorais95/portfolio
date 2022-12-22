const btnProject = document.querySelector('#cardProject').addEventListener('click', showProjects)
const btnTheme = document.querySelector('#theme').addEventListener('click', changeTheme)
const hamburguer = document.querySelector('.menu').addEventListener('click', menu)
const about = document.querySelector('#aboutProjects').addEventListener("click", openModal)

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

setInterval(()=>{
    const p = document.querySelector('#watch')
    let time = new Date()
    let hours = time.getHours()
    let minutes = time.getMinutes()
    let seconds = time.getSeconds()
    if(hours < 10){
        hours = `0${hours}`
    }
    if(minutes < 10){
        minutes = `0${minutes}`
    }
    if(seconds < 10){
        seconds = `0${seconds}`
    }
    p.innerHTML = `${hours}:${minutes}:${seconds}`
})


function openModal(){
    closeMenu()
    closeCards()
    aboutProjects()
}

function aboutProjects(){
    const main = document.querySelector('main')
    const sectionModal = document.createElement('section')
    sectionModal.id = 'sectionModal'

    const pModal = document.createElement('p')
    pModal.id = 'pModal'
    pModal.innerHTML = `
    Esse portfólio foi pensado em demonstrar apenas os conhecimentos adquiridos sobre JavaScript,
    deixando um pouco de lado a estilização e focando nas aplicações Js. Inclusive, esse "modal" foi inteiramente construído através de <span>JavaScript</span> :). Espero que gostem!`
    
    const spanModal = document.createElement('span')
    spanModal.id = 'spanModal'
    spanModal.innerHTML = `Se surgir interesse, me chame para bater um papo, estou à disposição! &#128075`

    const linkToBeggin = document.createElement('a')
    linkToBeggin.href = 'index.html'
    linkToBeggin.id = 'btnBackToBeggin'
    linkToBeggin.innerText = 'Ok'
    linkToBeggin.addEventListener('click', backToBeggin)

    socialMedias()

    main.appendChild(sectionModal)
    sectionModal.append(pModal, spanModal, linkToBeggin, ulModal)
    sectionModal.style.display = 'flex'
}
let ulModal
let github;
let linkedin;

function socialMedias(){
    ulModal = document.createElement('ul')
    ulModal.id = 'ulModal'
    const liGithub = document.createElement('li')
    
    github = document.createElement('a')
    github.id = 'githubModal'
    github.href = 'https://github.com/FabioMorais95'
    github.target = '_blank'
    github.innerHTML = `<i class="fa-brands fa-github social-media"></i>`

    const liLinkedin = document.createElement('li')
    linkedin = document.createElement('a')
    linkedin.id = 'linkedinModal'
    linkedin.href = 'https://linkedin.com/in/fabio-rmorais/'
    linkedin.target = '_blank'
    linkedin.innerHTML = `<i class="fa-brands fa-linkedin social-media">`

    ulModal.append(liGithub, liLinkedin)
    liGithub.appendChild(github)
    liLinkedin.appendChild(linkedin)
}

function backToBeggin(){
    const sectionModal = document.querySelector('#sectionModal')
    sectionModal.style.display = 'none'
    
}
function closeCards(){
    const cards = document.querySelector('.cards')
    cards.style.display = 'none'
}
function closeMenu(){
    const menu = document.querySelector('header')
    menu.style.display = 'none'
}