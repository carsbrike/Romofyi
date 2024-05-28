const menu = document.querySelector('.hamburger')
const nav = document.querySelector('.menu')


menu.addEventListener('click', () => {
    nav.classList.toggle('open')
})
