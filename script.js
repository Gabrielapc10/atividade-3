var itens = [
    {nome:"coxinha", preco:8.00, categoria:"comida"},
    {nome:"coca-cola", preco:4.00, categoria:"bebida"},
    {nome:"pastel", preco:9.00, categoria:"comida"},
    {nome:"caldo", preco:10.00, categoria:"bebida"},
    {nome:"suco", preco:3.00, categoria:"bebida"},
];

console.log(itens);



function listarMenu(itens){
    for( i=0; i < itens.length; i++){
        console.log("Cardapio",itens[i]);   
    }
} 

listarMenu(itens);

var pedido = prompt("Qual o pedido:",pedido);
var qtd = prompt("Quantidade:",qtd);

function mult(preco,qtd){
    let valor = preco * qtd
    return valor
}

