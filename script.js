

function boasvindas(nome,datanascimento,anoatual){
    return `ola seu nome e ${nome} e voce tem ${anoatual - datanascimento}anos`

} 
alert(boasvindas(prompt(`digite seu nome`),prompt(`digite o ano de seu nascimento`),2021))
