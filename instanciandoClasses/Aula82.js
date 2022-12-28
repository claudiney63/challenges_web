const palco = document.getElementById('palco')
const num_objetos = document.getElementById('num_objetos')
const txt_qtde = document.getElementById('txt_qtde')
const btn_add = document.getElementById('btn_add')
const btn_remover = document.getElementById('btn_remover')

let largura_palco = palco.offsetWidth
let altura_palco = palco.offsetHeight
let bolas = []
let num_bolas = 0

//criando a classe bola
//definindo suas propriedades em relação ao palco
class Bola {
    constructor(arrayBolas, palco) {
        this.tamanho = Math.floor(Math.random()*15)+10
        this.r = Math.floor(Math.random()*255)
        this.g = Math.floor(Math.random()*255)
        this.b = Math.floor(Math.random()*255)
        this.posicao_x = Math.floor(Math.random()*(largura_palco-this.tamanho))
        this.posicao_y = Math.floor(Math.random()*(altura_palco-this.tamanho))
        this.velx = Math.floor(Math.random()*2)+0.5 //velocidadfe o movimento
        this.vely = Math.floor(Math.random()*2)+0.5 //velocidade do movimento
        this.direcao_x = (Math.random()*10) > 5 ? 1 : -1
        this.direcao_y = (Math.random()*10) > 5 ? 1 : -1
        this.palco = palco
        this.arrayBolas = arrayBolas
        this.id = Date.now()+"_"+Math.floor(Math.random()*100000000)
        this.desenhar()
        this.controle = setInterval(this.controlarBola, 10)
        this.me = document.getElementById(this.id)
        num_bolas++
        num_objetos.textContent = num_bolas
    }

    posicionAtual = () => { //pega a posição atual da bolinha
        return this.arrayBolas.indexOf(this)
    }

    removerBola = () => { //remover a bolinha do palco
        clearInterval(this.controle)
        bolas = bolas.filter((b) => {
            if(b.id != this.id) {
                return b
            }
        })
        this.me.remove()
        num_bolas--
        num_objetos.innerHTML = num_bolas
    }

    desenhar = () => { //criando forma e cor da bolinha
        const div = document.createElement("div")
        div.setAttribute("id", this.id)
        div.setAttribute("class", "bola")
        div.setAttribute("style", `
        left: ${this.posicao_x}px; top: ${this.posicao_y}px;
        width: ${this.tamanhoam}px; height: ${this.tamanho}px;
        background-color: rgb(${this.r},${this.g},${this.b});`)
        this.palco.appendChild(div)
    }

    colisao_bordas = () => { //controla as colisões das bordas do palco
        if(this.posicao_x + this.tamanho >= largura_palco) {
            this.direcao_x = -1
        } else if(this.posicao_x <= 0) {
            this.direcao_x = 1
        } 
        if(this.posicao_y + this.tamanho >= altura_palco) {
            this.direcao_y = -1
        } else if(this.posicao_y <= 0) {
            this.direcao_y = 1
        }
    }

    controlarBola = () => {
        this.colisao_bordas()
        this.posicao_x += this.direcao_x*this.velx
        this.posicao_y += this.direcao_y*this.vely
        this.me.setAttribute("style", `
        left: ${this.posicao_x}px; top: ${this.posicao_y}px;
        width: ${this.tamanho}px; height: ${this.tamanho}px;
        background-color: rgb(${this.r},${this.g},${this.b});`)

        if((this.posicao_x > largura_palco) || (this.posicao_x > altura_palco)) {
            this.removerBola()
        }
    }
}

//determinar o novo tamanho da janela do palco, ao redimencionar
window.addEventListener('resize', () => {
    largura_palco = palco.offsetWidth
    altura_palco = palco.offsetHeight
})

//adicionar as bolinhas no balco
btn_add.addEventListener('click', () => {
    const qtde = txt_qtde.value
    for(let i = 0; i < qtde; i++) {
        //instaciar novas bolinhas
        bolas.push(new Bola(bolas, palco))
    }
})

btn_remover.addEventListener('click', () => {
    bolas.map((el) => {
        //remover cada bolinha
        el.removerBola()
    })
})