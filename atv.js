const idade = parseInt(prompt("Digite sua idade:"));//constante para saber a idade do usuario

if(isNaN(idade)|| idade<0){// para saber se o usuario digitou algo invalido
    alert("Você digitou um caracter errado:");
}else{//para saber se o usuario é maior de idade
    if(idade>=18){
        alert("Voçê é maior de idade:")
    }else{
        alert("você é menor de idade:")
    }
}
    
    
