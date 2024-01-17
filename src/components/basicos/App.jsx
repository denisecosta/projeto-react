import '../App.css'

import React from "react";

import Primeiro from "./Primeiro";
import ComParametro from "./ComParametro";
import Fragmento from "./Fragmento";
import Aleatorio from "./Aleatorio";
import Card from "../layout/Card";
import Familia from "./Familia";
import FamiliaMembro from './FamiliaMembro';
import ListaAlunos from '../repeticao/ListaAlunos';
import TabelaProdutos from '../repeticao/TabelaProdutos';
import ParOuImpar from '../condicional/ParOuImpar';
import Usuario from '../condicional/Usuario';
import DiretaPai from '../comunicacao/DiretaPai';
import IndiretaFilho from '../comunicacao/IndiretaFilho';
import IndiretaPai from '../comunicacao/IndiretaPai';
import Input from '../formulario/Input';
import Contador from '../contador/Contador';
import Cardapio from '../mega/Cardapio';

export default _ => {
    return(
        <div className='App'>
            <div className="Cards">

                <Card titulo = "#13 - Mega" color="#7B68EE">
                    <Cardapio></Cardapio>
                </Card>

                <Card titulo = "#12 - Contador" color="#DAA520">
                    <Contador numeroInicial = {10}></Contador>

                </Card>

                <Card titulo = "#11 - Componente Controlado (Input)" color="#3CB371">
                    <Input></Input>
                </Card>

                <Card titulo = "#10 - Comunicação Indireta" color = "#20B2AA">
                    <IndiretaPai/>
                </Card>

                <Card titulo = "#09 - Comunicação Direta" color = "#4169E1">
                    <DiretaPai></DiretaPai>
                </Card>

                <Card titulo="#08 - Renderização Condicional" color="#696969">
                    <ParOuImpar numero ={-1}></ParOuImpar>
                    <Usuario usuario={{nome : 'Fernando'}}></Usuario>
                    <Usuario usuario={{email : 'teste@teste.com'}}></Usuario>
                </Card>

                <Card titulo="#07 - Produtos" color = "#FF4500">
                    <TabelaProdutos></TabelaProdutos>
                </Card>

                <Card titulo="#06 - Repetição" color = "#FF7F50">
                    <ListaAlunos></ListaAlunos>
                </Card>

                <Card titulo="#05 - Componente com Filhos" color="#F08080">
                    <Familia sobrenome="Ferreira" >
                        <FamiliaMembro nome="Pedro" />
                        <FamiliaMembro nome="Ana"  />
                        <FamiliaMembro nome="Gustavo" />
                    </Familia>
                        'oi'
                </Card>

                <Card titulo = "Exemplo de Card" color ="#6495ED">
                    <Aleatorio max = {11} min = {0}/>
                </Card>

                <Card titulo="#02 - Fragmento" color = '#8FBC8F'>
                    <Fragmento/>
                </Card>

                <Card titulo="#01 - Com parâmetro"color = '#F4A460'>
                    <ComParametro titulo = "SBC"
                                subtitulo = "Sociedade Brasileira de Computação"
                                nota = {7}
                    ></ComParametro>
                </Card>

                <Card titulo ="#03 - Primeiro Componente" color='#DA70D6'>
                    <Primeiro></Primeiro>
                </Card>
            
        
        
        </div>
    </div>
    )
}