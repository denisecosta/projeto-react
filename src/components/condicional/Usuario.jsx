import React from "react";
import If, {Else} from "./If"

export default props => {

    const usuario = props.usuario || {}

    return (
        <div>
            <div>
                <If test={usuario && usuario.nome}>
                    Seja bem vindo <strong>{usuario.nome}</strong>!

                    <Else>
                        Seja bem vindo <strong>Visitante</strong>!
                    </Else>
                </If>
            </div>

            {/*<div>
                <If test={usuario || usuario.nome}>
                    Seja bem vindo <strong>Visitante</strong>!
                </If>
    </div>*/}
        </div>
    )
}