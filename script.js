let buttonMenu = document.getElementById('button-menu')
let menu = document.getElementById('menu')
let links = menu.querySelectorAll('.links-mobile')
let header = document.getElementById('header')
let hideMenu = false

header.appendChild(menu)

const displayMenu = () => {
    if (hideMenu == false) {
        menu.style.display = "block"
        hideMenu = true
    } else {
        menu.style.display = "none"
        hideMenu = false
    }
}

buttonMenu.addEventListener('click', () =>  {
    displayMenu()
})

links.forEach(link => {
    link.addEventListener('click', () => {
        displayMenu()
    })
})
