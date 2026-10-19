var itens = [
    {nome:"coxinha", preco:8.00, categoria:"comida"},
    {nome:"coca-cola", preco:4.00, categoria:"bebida"},
    {nome:"pastel", preco:9.00, categoria:"comida"},
    {nome:"caldo", preco:10.00, categoria:"bebida"},
    {nome:"suco", preco:3.00, categoria:"bebida"},
];

console.log(itens);

function listarMenu(itens){
    for(let i=0; i < itens.length; i++){
        console.log("Cardapio",itens[i]);   
    }
} 
listarMenu(itens);

var pedido = prompt("Qual o pedido:");
var qtd = Number(prompt("Quantidade:"));

let pedidos = []


for(let i=0; i < itens.length ; i++){
    if(pedido===itens[i].nome) {
        console.log("Temos esse item:",itens[i]);

        let total = itens[i].preco * qtd;
        console.log("Valor total R$:", total);
        console.log("Pedidos");
        pedidos.push({ 
            nome:pedido,
            quantidade:qtd,
            preco:itens[i].preco ,
            total:total
        });
        break
    } 
}

function listarPedidos(pedidos){
    for(let i=0; i < pedidos.length; i++){
        console.log("lista de Pedidos",pedidos[i]);
        
    }

}
listarPedidos(pedidos);
