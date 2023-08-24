const peso =  120
const altura = 1.87

//Função que calcula imc
const calculaImc = (peso,altura)=>{
    return peso / (altura**2)
}
console.log(calculaImc(peso,altura))
//Função que retorna resultado imc feita com is else
const retornaResultado = (imc) =>{
    if(imc < 17){
        return 'Muito abaixo do peso'
    }else if(imc >= 18.5 && imc <= 24.99){
        return 'Abaixo do peso'
    }else if(imc >= 18.5 && imc <= 24.99){
        return 'Peso normal'
    }else if(imc >= 25 && imc <= 29.99){
        return 'Acima do peso'
    }else if(imc >= 30 && imc <= 34.99){
        return 'Obesidade I'
    }else if(imc >= 35 && imc <= 39.99){
        return 'Obesidade II'
    }else{
        return 'Acima de obesidade II'
    }
        
}

//Funcão que retorna resultado imc feita com switch
const retornaResultado2 = (imc)=>{
    switch (true) {
        case imc < 17:
            console.log('Muito abaixo do peso')
            break;
        case imc >= 18.5 && imc <= 24.99:
            console.log('Abaixo do peso')
            break
        case imc >= 25 && imc <= 29.99:
            console.log('Acima do peso')
            break
        case imc >= 30 && imc <= 34.99:
            console.log('Obesidade I')
            break
        case imc >= 35 && imc <= 39.99:
            console.log('Obesidade II')
            break
        default:
            console.log('valor muito acima')
            break;
    }
}
// console.log(retornaResultado(calculaImc(peso,altura)))
retornaResultado2(calculaImc(peso,altura))


   