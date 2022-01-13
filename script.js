


        let colorLabel = document.getElementById("colorLabel")
        let button = document.getElementById("colorButton")
        let body = document.body
        let root = document.querySelector(':root');


        function r() {
            return Math.floor(Math.random() * 16).toString(16)
        }

        button.onclick = function name(params) {
            let color = "#" + r() + r() + r() + r() + r() + r()
            body.classList.replace("color","color")
            root.style.setProperty('--color', color)
            colorLabel.innerHTML = color.toUpperCase()
            console.log(color)
        }