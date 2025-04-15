const numPar = parseInt(prompt("Digite um numero"));
if(isNaN(numPar)|| numPar<0){
    alert("erro seu numero não é valido");
}else{
    if(numPar%2==0){
        alert("seu numero é par:");
    }else{
        alert("seu numero é impar:");
    }
}

    
