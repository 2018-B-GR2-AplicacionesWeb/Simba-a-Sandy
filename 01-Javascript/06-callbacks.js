const fs = require('fs');

console.log('hola');

fs.readFile(
    '04-operadores.js',
    'utf-8',
    (error,textoLeidoDelArchivo)=> {

        if (error) {

            try {
                throw new Error(error);
            } catch (e) {

                console.log(e)
            }

        } else {

            fs.writeFile(
                '06-texto.txt',
                textoLeidoDelArchivo +
                'mundo',
                (err)=>{
                    if(err)console.log('error');
                    console.log('archivo actualizado');

                }

            );
            console.log(textoLeidoDelArchivo);

        }
}
);



console.log('fin');