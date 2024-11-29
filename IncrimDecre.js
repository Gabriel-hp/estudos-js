// Escreva um programa que inicializa uma variável inteira com um valor fornecido pelo  usuário. 
//Em seguida, o programa deve incrementar esse valor em 1 e mostrar o resultado.
//  Depois, decrementar o valor original em 1 e mostrar o resultado novamente. 


function IncDec(){
    const valor = 25;

    const incrementar = valor +1;
    const decrementar = valor -1;


    console.log("o numero que você solicitou é " + valor + " esse é o resultado dele incrimentado " + incrementar, " esse é o resultado dele decrementado " + decrementar)
}

IncDec()