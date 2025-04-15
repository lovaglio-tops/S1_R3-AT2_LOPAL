const valorCompra = parseInt(prompt("Digite o valor da sua compra:"));
const desconto = valorCompra*0.1
const compraDesconto = valorCompra-desconto
if(isNaN(valorCompra)|| valorCompra<100||valorCompra<0){
    alert("Voçe digitou um valor de compra que não tem desconto")
}else{
    if(valorCompra>=100){
    alert("sua compra com desconto é:"+compraDesconto);
    }
}
