const numero = parseInt(prompt("Digite um numero:"));//constante para saber o numero do usuario
if(isNaN(numero)|| numero<0){//para saber se oque usuario digitou é valido
    alert("numero ou caracter invalido");
}else if(numero%5==0){//para saber se numero é multiplo de 5 
    alert("seu numero é multiplo de cinco");
} else{
    alert("numero não é multiplo de 5");
}
