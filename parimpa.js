// FUNÇÃO PARA SABER O NUMERO É IMPA OU PAR

// BASTA SABE O RESTO DA DIVISÃO (%)
// SE UM NUMRO AO SER DIVIDIDO POR 2 TIVER O RESTO DA DIVISÃO IGUAL A 0 É PAR SE FOR 1 É IMPAR
function parimpa(){
    const Valor = 282;
    const divi = Valor % 2;
    if(divi === 0 ){
        console.log("o valor é par");
    }else{
        console.log("O valor é impa");
    }
};

parimpa()
