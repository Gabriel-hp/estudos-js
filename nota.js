//Média de notas:

//Peça 3 notas e diga se a média é suficiente para passar (média ≥ 6).

/*function media(){
    const nota1 = 4;
    const nota2 = 7;
    const nota3 = 5;
    const calcNota = nota1 + nota2 + nota3;
    const divi = calcNota / 3;
     if(divi<6){
        console.log("reprovado, sua media é " + divi);
    }else{
        console.log("Aprovado, sua media é " + divi);
    }
};*/

// agora melhorando vamos adcionar a recuperação, se for menor que 5 reprovado se menor que 6 recuperação

function media(){
    const nota1 = 4;
    const nota2 = 7;
    const nota3 = 5;
    const calcNota = nota1 + nota2 + nota3;
    const divi = calcNota / 3;

    if(divi < 5 ){
        console.log("Reprovado, sua media é " + divi);
    }else if(divi >= 5 && divi < 6 ){
        console.log("Em recuperação sua media é " + divi);
    }else{
        console.log("Aprovado, sua media é " + divi);
    }
};

media()