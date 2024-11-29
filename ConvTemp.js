//algoritmo que converte uma temperatura dada em graus Celsius para  Fahrenheit. 
//O programa deve pedir ao usuário que insira a temperatura em Celsius e  mostrar o resultado da conversão. 

function ConvTemp() {
    const cel = 30;

    const resul = (cel * 1.8);
    const far= resul + 32;

    console.log("A sua temperatura em Fahrenheit é: " + far); 

}  

ConvTemp();

