
declare var require: any;
const rxjs = require ('rxjs');

const numeros$ = rxjs.of(1,2,3,4) ;

numeros$.subscribe(

    next:(ok) => {
        console.log('en ok',ok );

},
    error: (error)=> {
        console.log('errror',error);
},

    complete: (complete) =>{
        console.log('completo',complete);
}
)