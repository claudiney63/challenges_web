const olhos = [...document.getElementsByClassName('olho')]

let x_mouse = 0
let y_mouse = 0

window.addEventListener('mousemove', (evt) => {
    x_mouse = evt.clientX
    y_mouse = evt.clientY

    const rotacao = Math.atan2(y_mouse, x_mouse) * 180 / Math.PI

    olhos.forEach((o) => {
        o.style.transform = 'rotate('+rotacao+'deg)'
    })
})

