
    let edad= 29;
const casado = false;

const edadV2= 30;
const nombre= 'sandy';
nombre.toUpperCase()

const hijos= null;

const mascotas ={};
mascotas.cachetes= 'cachetes';
mascotas.numero= 1;
delete mascotas.numero;


const carros= [];

const arreglo=['A','b','c'];

const respuestaForEach = arreglo.forEach(
    (valor, indice,arreglo)=> {
        console.log('valor',valor);
        console.log('indice', indice);
        console.log('arreglo',arreglo);
    }
);


const respuestaForEach =arreglo.forEach((v) => console.log (v));
//console.log()

const respuestaMap= arreglo.map(
    (valorActual)=> {
        return valorActual.toUpperCase();
    }
);
console.log(arreglo);
console.log(respuestaMap);

const arregloNumeros=[5,4,6,7,3,9,1,8,2,10];

const respuestaFilter = arregloNumeros
    .filter(
        (valorActual) => {
            return valorActual %2===0;
        }
    );

    console.log(respuestaFilter);

    const respuestaFind = arregloNumeros.find(
        (valorActuarl)=> {
           return valorActual === 7
        }
    );

    console.log(respuestaFind);


    const respuestaSome =arregloNumeros.some(
        (valorActual)=> {
            return valorActual>10;
        }
    );

    const respuestaEvery =arregloNumeros.every(
        (valorActual)=> {
            return valorActual<4;
        }
    );


    const respuestaReduce =arregloNumeros.reduce(
        (valorAcumulado,valorActual)=> {
            return (valorAcumulado + valorActual,0 );
        }
    );




    const arregleNumerosClonado1 = JSON.parse(JSON.stringify(arregloNumeros))