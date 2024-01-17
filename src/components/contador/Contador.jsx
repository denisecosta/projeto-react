import "./Contador.css"
import React from "react";

import Display from "./Display";
import Botoes from "./Botoes";
import PassoForm from "./PassoForm";

export default class Contador extends React.Component {

    state = {
        numero: 0,
        valor: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5
    }

    incrementar = () =>  {
        this.setState({
            numero: this.state.numero + this.state.passo
    })
    }

    decrementar = () =>  {
        this.setState({
            valor: this.state.valor - 1
    })
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        });
    }

    render(){
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero ={this.state.numero} valor = {this.state.valor}/>
                
                <PassoForm passo = {this.state.passo} setPasso={this.setPasso}/>
                <Botoes incremente={this.incrementar} decremente={this.decrementar}/>
            </div>
        )
    }
}