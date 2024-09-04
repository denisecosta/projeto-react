import React,{useState} from "react";
import {gerarSequencia} from "./sorteio"

export default props => {

    const [qtdItens, setQtdItens] = useState(3)
    const [cardapio, setCardapio] = useState([])

    const limiteBolo = 7;
    const limiteBiscoito = 8;
	const [qtdBolo, setQtdBolo] = useState(0);
    const [qtdBiscoito, setQtdBiscoito] = useState(0);

    function mudarValor (novoValor){
        setQtdItens(novoValor)
    }

    function gerarCardapio(){
        console.log('quantidade de biscoito: ', qtdBiscoito)
        const sequencia = gerarSequencia(qtdItens, qtdBolo < limiteBolo, qtdBiscoito < limiteBiscoito)
        setCardapio(sequencia);
        if(sequencia.includes('bolo')){
            setQtdBolo(qtdBolo+1)
        }
        if(sequencia.includes('biscoito')){
            setQtdBiscoito(qtdBiscoito+1)
        }
    }

    return (
        <div>
            <label>{cardapio.join(', ')}</label>
            <br/>
            <input onChange= {e => mudarValor(+e.target.value)} type="number"></input>
            <button onClick={gerarCardapio}>Get</button>
        </div>
    )


}