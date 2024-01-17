import React from "react"

export default function ComParametro(props){

    const status = props.nota >= 7 ? 'Boa' : 'Ruim'

    return(<div>
            <h2>{props.titulo}</h2>
            <h3>{props.subtitulo}</h3>
            <p>Avaliação: {props.nota}</p>
            <p>A organização é consideradao {status}</p>
        </div>
    )
}