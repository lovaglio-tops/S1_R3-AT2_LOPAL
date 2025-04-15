const valorCompra = parseInt(prompt("Digite o valor da sua compra:"));//saber o numero do usuario
const desconto = valorCompra*0.1// valor do desconto 
const compraDesconto = valorCompra-desconto// valor da compra com desconte de 10%
if(isNaN(valorCompra)|| valorCompra<100||valorCompra<0){ // para saber se a compra tem desconto
    alert("Voçe digitou um valor de compra que não tem desconto")
}else{//saber o valor da compra com desconto
    if(valorCompra>=100){
    alert("sua compra com desconto é:"+compraDesconto);
    }
}
