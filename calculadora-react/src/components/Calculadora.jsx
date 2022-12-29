import { useState } from "react"

export default function Calculadora() {

    const [valor, setValor] = useState('')
    const [resultado, setResultado] = useState(0)
    const [acumulador, setAcumulador] = useState(0)
    const [operado, setOperado] = useState(false)

    //criando a tela da calculadora
    const Tela = (valor, resultado) => {

        return (
            <div style={cssTela}>
                <span style={cssOperacao}>{valor}</span>
                <span style={cssResultado}>{resultado}</span>
            </div>
        )
    }

    const Btn = (label, onClick) => {
        return (
            <button style={cssBtn} onClick={onClick}>{label}</button>
        )
    }

    //FUNÇÕES

    const addDigitoTela = (digito) => {
        if((digito === '+' || digito === '-' || digito === '*' || digito === '/') && operado) {
            setOperado(false)
            setValor(resultado+digito)
            return
        }
        if(operado) {
            setValor(digito)
            setOperado(true)
            return
        }
        const valorDaTelaDigitado = valor+digito
        setValor(valorDaTelaDigitado)
    }

    const limparTela = () => {
        setOperado(false)
        setValor('')
        setResultado(0)
        setAcumulador(0)
        return
    }

    const operacao = (operacao) => {
        if(operacao === 'backspace') {
            let vTerla = valor
            vTerla = vTerla.substring(0, (vTerla.length-1))
            setValor(vTerla)
            setOperado(false)
            return
        }
        try {
            const r = eval(valor) //calculo
            setAcumulador(r)
            setResultado(r)
            setOperado(true)
        } catch {
            setResultado('ERROR')
        }
    }

    //ESTILOS

    const cssContainer = {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        width: 300,
        border: '1px solid #000'
    }

    const cssBotoes = {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }

    const cssTela = {
        display: 'flex',
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#444',
        flexDirection: 'column',
        width: 260
    }
    
    const cssOperacao = {
        fontSize: 25,
        color: '#fff',
        height: 20
    }
    
    const cssResultado = {
        fontSize: 50,
        color: '#fff'
    }
    
    const cssBtn = {
        fontSize: 30,
        height: 75,
        width: 75,
        padding: 20,
        backgroundColor: '#000',
        color: '#fff',
        borderColor: '#000',
        textAlign: 'center',
        outline: 'none'
    }

    return (
        <div style={cssContainer}>
            <h3 style={{padding: 8}}>Calculadora Matematica Simples <br /> v1.0</h3>
            {Tela(valor, resultado)}
            <div style={cssBotoes}>
                {Btn('AC', limparTela)}
                {Btn('(', () => {addDigitoTela('(')})}
                {Btn(')', () => {addDigitoTela(')')})}
                {Btn('/', () => {addDigitoTela('/')})}
                {Btn('7', () => {addDigitoTela('7')})}
                {Btn('8', () => {addDigitoTela('8')})}
                {Btn('9', () => {addDigitoTela('9')})}
                {Btn('x', () => {addDigitoTela('*')})}
                {Btn('4', () => {addDigitoTela('4')})}
                {Btn('5', () => {addDigitoTela('5')})}
                {Btn('6', () => {addDigitoTela('6')})}
                {Btn('-', () => {addDigitoTela('-')})}
                {Btn('1', () => {addDigitoTela('1')})}
                {Btn('2', () => {addDigitoTela('2')})}
                {Btn('3', () => {addDigitoTela('3')})}
                {Btn('+', () => {addDigitoTela('+')})}
                {Btn('0', () => {addDigitoTela('0')})}
                {Btn(',', () => {addDigitoTela('.')})}
                {Btn('<-', () => {operacao('backspace')})}
                {Btn('=', () => {operacao('=')})}
            </div>
        </div>
    )
}