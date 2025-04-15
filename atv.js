const numPar = parseInt(prompt("Digite um numero"));// contante para saber o numero do usuario 
if(isNaN(numPar)|| numPar<0){// para saber se oque os usuario digitou é valido
    alert("erro seu numero não é valido");
}else{//para saber se o numero é par 
    if(numPar%2==0){
        alert("seu numero é par:");
    }else{
        alert("seu numero é impar:");
    }
}

    
