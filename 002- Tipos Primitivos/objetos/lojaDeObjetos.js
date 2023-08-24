//Revenda de carros

//Carros no estoque
const estoque = [
 {
    
    marca: 'fiat',
    modelo: 'Brava',
    ano: 1999,
    valor: 7.000,
    disponivel:false
},
{
    
    marca: 'peugeot',
    modelo: '206 soleil',
    ano: 2003,
    valor: 14.800,
    disponivel: true
},
{
    
    marca: 'chevrolet',
    modelo: 'celta',
    ano: 2004,
    valor: 14.900,
    disponivel:true
}
]

//Adicionando carros no estoque
const adicionaCarros = (marca,modelo,ano,valor)=>{
    estoque.push({ 
        marca: marca,
        modelo: modelo,
        ano: ano,
        valor: valor,
        disponivel: true

    })
}

adicionaCarros('honda','civic',1999,23.000)
//Atualiza disponibilidade do carro
const mudaDisponibilidadeDoCarro =(codCarro,disponibilidade)=>{
    estoque[codCarro].disponivel = disponibilidade
}

//escolha cliente
const carrinho = []
const opcaoDoCliente = 1

//Adiciona ao carrinho
const adcionaCarrinho = (opcaoDoCliente)=>{
    if(estoque[opcaoDoCliente].disponivel){
        carrinho.push(estoque[opcaoDoCliente])
        console.log('carro adicionado ao carrinho')
    }else{
        console.log('veiculo indisponivel')
    }
}

//Exclui veiculo do carrinho
const excluiDocarrinho = (opcaoDoCliente)=>{
    carrinho.splice(carrinho.indexOf(opcaoDoCliente), 1);
}

//Ao finalizar compra atualiza o estoque
const atualizandoEstoque = (carrinho)=>{
    for (const item of carrinho) {
        if(estoque[item] === carrinho[item]){
            estoque.splice(estoque.indexOf(item), 1);
        }
    }
}
console.log(estoque)
adcionaCarrinho(1)
adcionaCarrinho(2)
//excluiDocarrinho(2)
atualizandoEstoque(carrinho)
console.log('======================')
console.log(estoque)
