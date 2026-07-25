//exer 03 aula6

var nome = window.prompt("Qual seu nome?")
var idade = window.prompt("Qual sua idade")

document.write(`Seu nome é ${nome} <br>`);
document.write(`Seu nome possui ${nome.length} palavras <br>`);
document.write(`Sua idade é ${idade} <br>`);
document.write(`Seu nome em Maiúsculo ${nome.toUpperCase()} <br>`)
document.write(`Seu nome em minúsculo ${nome.toLowerCase()}`)

var valor = window.prompt("Escolha um valor")

document.write(`O seu valor é ${valor.fixed(2)}`)
document.write(`O valor em monetário ${valor} `)