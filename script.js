var itens = [
    {nome:"coxinha", preco:8.00, categoria:"comida"},
    {nome:"coca-cola", preco:4.00, categoria:"bebida"},
    {nome:"pastel", preco:9.00, categoria:"comida"},
    {nome:"caldo", preco:10.00, categoria:"bebida"},
    {nome:"suco", preco:3.00, categoria:"bebida"},
];

console.log(itens);

function listarMenu(itens){
    console.log("Cardapio");
    for(let i=0; i < itens.length; i++){
        console.log(i+1,itens[i].nome,"|R$:",itens[i].preco,"|Categoria:",itens[i].categoria);   
    }
} 
listarMenu(itens);

var pedido = prompt("Qual o pedido:");
var qtd = Number(prompt("Quantidade:"));

let pedidos = []

function cadastrarPedido(produto,quantidade){
let encontrado = false
for(let i=0; i < itens.length ; i++){
    if(produto===itens[i].nome) {
        console.log("___________________");
        encontrado = true
        let total = itens[i].preco * quantidade;
        pedidos.push({ 
            nome:produto,
            quantidade:quantidade,
            preco:itens[i].preco ,
            total:total
        });
        
        break
    } 
}
if(encontrado===false){
    console.log("Não temos esse produto.");
}
}

cadastrarPedido(pedido,qtd)

function listarPedidos(pedidos){
  
    for(let i=0; i < pedidos.length; i++){
        console.log("Pedido");
        console.log("Pedido:", pedidos[i].nome);
        console.log("Quantidade:", pedidos[i].quantidade);
        console.log("Preço unitário: R$", pedidos[i].preco);
        console.log("Valor total: R$", pedidos[i].total);       
    }
}
listarPedidos(pedidos);
