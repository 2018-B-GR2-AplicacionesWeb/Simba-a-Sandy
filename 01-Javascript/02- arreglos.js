var arreglo =[
    1,
    2.2,
    "hola",
    true,
    false,
    {},
    undefined,
    null,
    []
];

var arregloNumeros=[1,2,3];
arregloNumeros [0];
arregloNumeros [1];
arregloNumeros [2];

console.log('arregloNumeros[4]', arregloNumeros[4]);
arregloNumeros.push(4),
console.log(arregloNumeros);

arregloNumeros.pop();
    console.log(arregloNumeros);


arregloNumeros.splice(0,0,0);
console.log(arregloNumeros);

arregloNumeros.splice(2,0,1.5);
console.log(arregloNumeros);

var usuario= 1.5;
var indiceUsuario= arregloNumeros.indexOf(usuario);
arregloNumeros.splice(indiceUsuario,1);
//console.log(arregloNumeros);

console.log(arregloNumeros.splice(2,5));

var arregloNotasPrimerBimestre = [8.5,9,4];
var arregloNotasSegundoBimestre = [8.5,9,4];

//destruccturacion de arreglos

var arregloNotas2018B = [...arregloNotasPrimerBimestre,...arregloNotasSegundoBimestre];
console.log(arregloNotas2018B);

// destructuracion de objetos

var adrian2018A ={
    sexualidad:0,
    web:7
};

var adrian2018B ={
    musica:7,
    moviles:8
};

var adrian ={
    ...adrian2018A,
    ...adrian2018B
};

console.log(adrian);