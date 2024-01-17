

export default (props) =>{

    const alimentos = [' biscoito', 'pão', 'beiju', 'cuscuz',
                    ' gran/aveia', 'fruta',
                    ' leite',' iogurte', 'suco',
                    'ovo', 'carne', 'queijo'];

    const a = numeroAleatorio(props.min,props.max);

    var b;

    do{
        b = numeroAleatorio(props.min,props.max);
    }while(b === a);

    var c;

    do{
        c = numeroAleatorio(props.min,props.max);
    }while(c === a || c===b);

    return (
        <div>
            <h2><strong>Menu:</strong></h2>
            <p>{alimentos[a]}</p>
            <p>{alimentos[b]}</p>
            <p>{alimentos[c]}</p>
        </div>
    );
}

function numeroAleatorio(min,max){
    return Math.floor(Math.random() * (max - min+1) + min);
}