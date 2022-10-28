const divCanvas = document.querySelector('#divCanvas')
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext("2d");

// let W = canvas.width
// let H = canvas.height

// divCanvas.style.width, canvas.width = window.innerWidth * 0.80 + 'px'
// divCanvas.style.height, canvas.height = window.innerHeight * (2 * window.innerWidth * 0.80) + 'px'

canvasSize();
window.addEventListener("resize", event => {
    canvasSize();
})

function canvasSize() {
    divCanvas.style.width = '10px'
    let divW = divCanvas.style.width
    let widthSize = divW.split('')

    divW = divW.slice(0, (widthSize.length-2))

    alert(Math.floor(window.innerWidth/divW))
    let multiply = Math.floor(window.innerWidth/divW)

    divCanvas.style.width = divW * (multiply/2) + 'px'
    divCanvas.style.height = divCanvas.style.width/2
}

// // Creates character
// let vIdle = new Image()
// vIdle.src = 'img/v_idle'

// window.onload = () => {
//     init(true);
//     render(); //start the animation
// };

// function init() {
    
// }

// function render() {
//     // draw() {
//     //     ctx.drawImage(nave, this.x, this.y, this.W, this.H)
//     // }
// }