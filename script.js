let label = document.getElementById("Label")
let button = document.getElementById("Button")
let body = document.body
let root = document.querySelector(':root');

const auto = document.getElementById("auto")


function rnd() {
    return Math.floor(Math.random() * 16).toString(16)
}

button.onclick = () => {
    change()
}

function change() {

    let color = "#" + rnd() + rnd() + rnd() + rnd() + rnd() + rnd()
    body.classList.replace("color", "color")
    root.style.setProperty('--color', color)
    label.innerHTML = color.toUpperCase()
    console.log(color)
}





auto.addEventListener("click", function toggle(checked) {

    console.log("içerde1")

    if (auto.checked != checked) {
        console.log("içerde2")
        let aktive = setInterval(() => change(), 3000);
    }

    // if (auto.checked = checked) {
    //     console.log("içerde2")
    //     setTimeout(() => {
    //         clearInterval(aktive);
    //     }, timeout);
    // }


})


// function toggle(source) {
//     checkboxes = document.getElementsByName('foo');
//     for(var checkbox in checkboxes)
//       checkbox.checked = source.checked;
//   }
 