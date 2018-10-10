function sumarDosNumeros (numeroUno,numeroDos) {
    // validaciones
    var numeroUnoEsNumber = typeof numeroUno == "number";
    var numeroDosEsNumber = typeof numeroDos == "number";
    return numeroUno + numeroDos;

    if (numeroUnoEsNumber && numeroDosEsNumber){

        return numeroUno + numeroDos;
    }
    else {
        return 0;
    }
}

sumarDosNumeros('a',null);

sumarDosNumeros();

console.log(sumarDosNumeros(1,2,3,4,5,6));

console.log(sumarDosNumeros(2,5));


function Saludar (){
    console.log('hola a todos');
}

console.log(saludar());


function sumarNumeros (...parametros){
    console.log(parametros);

}

sumarNumeros(1,2,3,4);

function saludar(nombre, funcionMensajeria ) {
    var saludo = `hola ${nombre.toUpperCase()}`;
    funcionMensajeria(saludo);
    return saludo;
}