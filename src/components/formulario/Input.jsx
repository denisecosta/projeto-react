import '../layout/Input.css'

import React, {useState} from "react";

export default props => {

    let meuInput = 'Não é possível alterar!'

    const [valor, setValor] = useState('Inicial')

    function quandoMudar(e){
        setValor(e.target.value)
    }

    return (
        <div className="Input">
            <h2>{valor}</h2>
            <input value = {valor} onChange={quandoMudar}/>
            <input value = {undefined} />
            <input value = {meuInput} readOnly />
            <input value = 'oi' readOnly />
        </div>
    )
}