export function gerarSequencia(qtd){

    let meuArray = [];

    const alimentos = ['biscoito', 'pão', 'beiju', 'cuscuz',
                    'gran/aveia', 'fruta',
                    'leite','iogurte', 'suco',
                    'ovo', 'carne', 'queijo',
                    'bolo'];

    if(qtd > alimentos.length || qtd < 1){
        return "Informe um valor entre 1 e " + alimentos.length
    }

    for(let i=0;i<qtd;i++){
        
        let aleatorio = numeroAleatorio(0,alimentos.length-1)

        while(meuArray.includes(alimentos[aleatorio])){
            console.log(alimentos[aleatorio])
            aleatorio = numeroAleatorio(0,alimentos.length-1);
        }
        meuArray[i] = alimentos[aleatorio];
    }
    return meuArray.sort();

}

function numeroAleatorio(min,max){
    return Math.floor(Math.random() * (max - min+1) + min);
}
