/* Script para o calculo das operações matematicas
    - Soma;
    - Subtração;
    - Multiplicação;
    - Divisão;
    - Resto.
 Será necessario mais 2 variáveis para receber os números dos usuarios
 */
var numero1;
var numero2;
// para obter o numero digitado pelo usuario usaremos o comando prompt
// que é um input para dados
numero1=prompt("Digite um Número","0");
numero2=prompt("Digite outro número");
var soma = parseInt(numero1) + parseInt(numero2);
var subtrair = parseInt(numero1) - parseInt(numero2);
var multiplicar = parseInt(numero1) * parseInt(numero2);
var dividir = parseInt(numero1) / parseInt(numero2);
var resto = parseInt(numero1) % parseInt(numero2);

alert("O resultado das operações é:\n\n"+ 
"soma: "+soma+
"\nsubtração: "+subtrair+
"\nmultiplicação "+multiplicar+
"\ndivisão "+dividir+
"\nresto "+resto);