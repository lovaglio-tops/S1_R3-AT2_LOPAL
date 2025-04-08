const idade = parseInt(prompt("Digite sua idade:"));

if(isNaN(idade)|| idade<0){
    alert("Você digitou um caracter errado:");
}else{
    if(idade>=18){
        alert("Voçê é maior de idade:")
    }else{
        alert("você é menor de idade:")
    }
}
    
    
