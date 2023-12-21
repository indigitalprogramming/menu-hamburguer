const openMenuButton = document.querySelector('.open-menu')
const closeMenuButton = document.querySelector('.close-menu')
const menu = document.querySelector('.menu')

openMenuButton.addEventListener('click', () => {
    menu.classList.toggle('active')
})

closeMenuButton.addEventListener('click', () => {
    menu.classList.toggle('active')
})
