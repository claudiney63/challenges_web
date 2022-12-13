const data = document.getElementById('data')
const container = document.getElementById('container')

data.innerHTML = `
    ${new Date().getDay() < 10 ? "0" + new Date().getDay() : new Date().getDay()}
    /
    ${new Date().getMonth() < 10 ? "0" + (new Date().getMonth() + 1) : (new Date().getMonth() + 1)}
    /
    ${new Date().getFullYear()}`

const horas = document.getElementById('horas')

setInterval(() => {
    let hours = new Date().getHours() < 10 ? "0" + new Date().getHours() : new Date().getHours()
    let minutos = new Date().getMinutes() < 10 ? "0" + new Date().getMinutes() : new Date().getMinutes()
    let segundos = new Date().getSeconds() < 10 ? "0" + new Date().getSeconds() : new Date().getSeconds()

    horas.innerHTML = `${hours}:${minutos}:${segundos}`

    if(alarme_ativado && !alarme_tocando) {
        if(new Date().getTime() >= ts_alarme) {
            alarme_tocando = true
            som_alarme.play()
            container.classList.add('alarme_ativado')
        }
    }
}, 1000)


let som_alarme = new Audio("X2Download.app - Som de Despertador - Efeito Sonoro (128 kbps).mp3")

som_alarme.loop = -1

let ts_atual = null
let ts_alarme = null
let alarme_tocando = null
let alarme_ativado = null

const btn_ativar = document.getElementById("btn_ativar")
const temp_number = document.getElementById('temp_number')
const hora_alarme = document.getElementById("hora_alarme")
const btn_parar = document.getElementById("btn_parar")

btn_ativar.addEventListener('click', () => {
    ts_atual = Date.now()
    ts_alarme = ts_atual+(temp_number.value*1000)
    alarme_ativado = true
    const data_alarme = new Date(ts_alarme)

    let hours = data_alarme.getHours() < 10 ? "0" + data_alarme.getHours() : data_alarme.getHours()
    let minutos = data_alarme.getMinutes() < 10 ? "0" + data_alarme.getMinutes() : data_alarme.getMinutes()
    let segundos = data_alarme.getSeconds() < 10 ? "0" + data_alarme.getSeconds() : data_alarme.getSeconds()

    hora_alarme.innerHTML = `Hora do Alarme: ${hours}:${minutos}:${segundos}`
})

btn_parar.addEventListener('click', () => {
    alarme_ativado = false
    alarme_tocando = false
    hora_alarme.innerHTML = 'Hora do Alarme:'
    temp_number.value = 0
    som_alarme.pause()
    som_alarme.currentTime = 0
    container.classList.remove('alarme_ativado')
})