function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")


    const img = document.querySelector("#profile img")

if (html.classList.contains('light')) {

    img.setAttribute('src', './image/avatar-light.svg')
} else {
    img.setAttribute('src', './image/avatar.svg')
    }
}

