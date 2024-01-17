import React,{useState} from "react";
import {gerarSequencia} from "./sorteio"

export default props => {

    const [qtdItens, setQtdItens] = useState(3)
    const [cardapio, setCardapio] = useState([])

    function mudarValor (novoValor){
        setQtdItens(novoValor)
    }

    function gerarCardapio(){
        setCardapio(gerarSequencia(qtdItens));
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