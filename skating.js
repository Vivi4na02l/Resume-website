const divCanvas = document.querySelector('#divCanvas')
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext("2d");

let W = canvas.width
let H = canvas.height

canvasSize();
window.addEventListener("resize", event => {
    canvasSize();
    ctx.imageSmoothingEnabled = false;
})

function canvasSize() {
    divCanvas.style.width = '10px'
    let divW = divCanvas.style.width
    let widthSize = divW.split('')

    divW = divW.slice(0, (widthSize.length-2))

    // alert(Math.floor(window.innerWidth/divW))
    let multiply = Math.floor(window.innerWidth/divW)

    divCanvas.style.width = divW * (multiply/2) + 'px'
    divCanvas.style.height = divCanvas.style.width/2
}

// Creates character
let skater = new Image()
skater.src = 'img/v_idle.png'

let xSkater = W/2
let ySkater = H/2

let Skater = {
    x: xSkater,
    y: ySkater,
    W: W/10,
    H: W/10,

    draw() {
        ctx.drawImage(skater, this.x, this.y, this.W, this.H)
    },

    update() {
        if (upKey && this.y > 0)  {
            this.y++
        } else if (downKey && this.y ) {
            this.y--
        }
    },
}

window.onload = () => {
    init(true);
    render(); //start the animation
};

function init() {
    Skater.x = W/2 - Skater.W
    Skater.y = H/2 - Skater.H
}

function render() {
    Skater.draw()
}