const click = document.querySelector(".click")
const mouse = document.querySelector(".mouse")
const body = document.querySelector("body")
const mouseText = document.querySelector(".mouseText")
const clickText = document.querySelector(".clickText")

function randomBgColor() {
    var red = Math.floor(Math.random() * 256)
    var green = Math.floor(Math.random() * 256)
    var blue = Math.floor(Math.random() * 256)
    var color = "#" + red.toString(16) + green.toString(16) + blue.toString(16)
    return color
}

click.addEventListener("click", () => {
    body.style = `background-color:${randomBgColor()}`
    clickText.textContent = "\n" + `${randomBgColor()}`
    clickText.style.border = `2px solid red`
    mouseText.style.border = `none`
    mouseText.textContent = ""
})

mouse.addEventListener("mouseleave", () => {
    body.style = `background-color:${randomBgColor()}`
    mouseText.textContent = "\n" + `${randomBgColor()}`
    clickText.style.border = `none`
    mouseText.style.border = `2px solid red`
    clickText.textContent = ""
})

