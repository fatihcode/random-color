let label = document.getElementById("Label")
let button = document.getElementById("Button")
let body = document.body
let root = document.querySelector(':root');


function rnd() {
    return Math.floor(Math.random() * 16).toString(16)
}

button.onclick = () => {
    let color = "#" + rnd() + rnd() + rnd() + rnd() + rnd() + rnd()
    body.classList.replace("color", "color")
    root.style.setProperty('--color', color)
    label.innerHTML = color.toUpperCase()
    console.log(color)
}