export function gerarSequencia(qtd, podeBolo, podeBiscoito){

    let meuArray = [];

    const alimentos = ['biscoito', 'pão', 'beiju', 'cuscuz', 'bolo',
                    'gran/aveia', 'fruta',
                    'leite','iogurte', 'suco',
                    'ovo', 'carne', 'queijo'];

    if(qtd > alimentos.length || qtd < 1){
        return "Informe um valor entre 1 e " + alimentos.length
    }

    for(let i=0;i<qtd;i++){
        
        let aleatorio = numeroAleatorio(0,alimentos.length-1, podeBolo, podeBiscoito)

        while(meuArray.includes(alimentos[aleatorio])){
            
			aleatorio = numeroAleatorio(0,alimentos.length-1, podeBolo, podeBiscoito);
        }
        meuArray[i] = alimentos[aleatorio];
    }
    return meuArray.sort();

}

function numeroAleatorio(min,max, pode4, pode0){
	let aleatorio = Math.floor(Math.random() * (max - min+1) + min);
	
		while((!pode4 && aleatorio==4) ||
            (!pode0 && aleatorio==0) ){
                
			aleatorio = Math.floor(Math.random() * (max - min+1) + min);
		}
	
    return aleatorio;
}
