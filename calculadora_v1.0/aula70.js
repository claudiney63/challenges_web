const teclasNum = [...document.querySelectorAll('.num')]
const teclasOp = [...document.querySelectorAll('.op')]
const teclaRes = document.querySelector('.res')
const mostrador = document.querySelector('#mostrador')
const tclear = document.querySelector('#tclear')
const tseparador = document.querySelector('#tseparador')
const tcpy = document.querySelector('#tcpy')
const aba_calc = document.getElementById('aba_calc')
const calc = document.getElementById('calc')

let operador = true
let separador = true
let aba = true

teclasNum.map((tecla) => {
    tecla.addEventListener('click', () => {
        mostrador.textContent === '0'
            ? mostrador.textContent = ''
            : mostrador.textContent = mostrador.textContent
        mostrador.textContent += tecla.textContent
        operador = true
    })
})

tseparador.addEventListener('click', () => {
    if (separador) {
        mostrador.textContent += tseparador.textContent
        separador = false
    }
})

teclasOp.map((teclaOp) => {
    teclaOp.addEventListener('click', () => {
        if (operador) {
            mostrador.textContent += teclaOp.textContent == 'x' ? '*' : teclaOp.textContent
            operador = !operador
            separador = true
        }
    })
})

teclaRes.addEventListener('click', () => {
    mostrador.textContent = eval(mostrador.textContent)
})

tclear.addEventListener('click', () => {
    mostrador.textContent = '0'
})

tcpy.addEventListener('click', () => {
    navigator.clipboard.writeText(mostrador.textContent)
})

aba_calc.addEventListener('click', () => {
    calc.classList.toggle('calc_exibir')
    if(aba) {
        aba_calc.textContent = '<<'
        aba = !aba
    } else {
        aba_calc.textContent = '>>'
        aba = !aba
    }
})