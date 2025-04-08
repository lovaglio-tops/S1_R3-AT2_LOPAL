const numero = parseFloat(prompt("Digite um numero"));// contante para armazenar o numero do usuario

if(isNaN(numero)){//caso o usuario nao digite um numero ele vai apontar um erro
    alert("erro você não digitou um numero:");
}else{//se nao ele vai analisar se é positivo ou negativo
    if(numero>0){
        alert("numero é positivo");   
    }else{
        alert("numero é negativo")
    }
} 
   
    
    
