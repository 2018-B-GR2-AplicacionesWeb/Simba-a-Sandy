
let nombre: string ='sandy';
nombre='1';
let edad: number| string  = 21.2;
edad = '12';


let casado: boolean = false;
casado =true;
casado = null;
const arregloNumeros:number [] = [1,2,3];
arregloNumeros.push(1);

const sandy :{
    nombre:string;
    apellido?: string;
    edad?: number
    estado?: 'activo' |'inactivo';
    saludar?:(nombre:string)=> string

}={
    nombre: 'sandy',
    edad:25,
    estado: 'activo',


};


function saludar(nombre:string,
                 apellido?:string,
                 ...otrosNombres:number[]


):string |number {


    return 'hola';
}

let respuestaSaludar= <number> saludar('sandy','simbaña', 44545454);


class UsuarioClase{
  nombre:string;
}

interface UsuarioInterface {
    nombre:string;

}

const usuario ={
    nombre:'sandy'
};