
const soma = (numero)=>{
    for (let i = 0; i <= 10; i++) {
        console.log (`${numero} + ${i} = ${numero+i}`)
    }
}
const subtracao = (numero)=>{
    for(let i = 0; i <= 10;i++){
        console.log(`${numero} - ${i} = ${numero-i}`)
    }
}
const multiplicacao = (numero)=>{
    for(let i = 0;i <= 10;i++){
        console.log(`${numero} X ${i} = ${numero*i}`)
    }
}
const divisao = (numero)=>{
    for(let i = 0; i <= 10;i++){
        console.log(`${numero} / ${i} = ${(numero/i).toFixed(2)}`)
    }
}

const tabuada = (numero,operacao)=>{
    switch (true) {
        case operacao == 'soma':
            soma(numero)
            break;
        case operacao == 'subtracao':
            subtracao(numero)
            break
        case operacao == 'multiplicacao':
            multiplicacao(numero)
            break
        case operacao == 'divisao':
            divisao(numero)
            break
        default:
            console.log('Operação inválida ou inexistente')
            break;
    }   
}

tabuada(3,'soma')
console.log('=-=-=-=-=-=-=-=-==-')
tabuada(5,'subtracao')
console.log('=-=-=-=-=-=-=-=-==-')
tabuada(6,'multiplicacao')
console.log('=-=-=-=-=-=-=-=-==-')
tabuada(7,'divisao')