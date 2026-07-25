//Nível Básico

// exercicio 1 Exibir o dia e a hora atuais

/*Escreva um programa em JavaScript para exibir o dia e a hora atuais no seguinte formato.  
Exemplo de saída: Hoje é: terça-feira.
Hora atual: 22:30:38. */

const data_horario = new Date();
document.getElementById("dataHora").innerHTML = data_horario;

