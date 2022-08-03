// Mejores prácticas
// Simplificar function lo mas que se pueda

// 1. Utilizar keyword function
// 2. Nombrar nuestra function
// 3. Utilizar () abrir y cerrar la function{}

function myFunction() {
    // aqui va el cuerpo de la function
    console.log("hola mando");
}
myFunction();

function myName(){
    let name = "Armando";
    console.log(name);
}
//myName();
//Variable con scope local
function scopeFunction(){
    let local = "esto se encuentra dentro de la funcion"
    console.log(local);
}
//scopeFunction();

var nombre ="Armando";
function globalScope(){
    console.log(nombre);
}
//globalScope();

// Scope de variables
// Let
// Scope global, local
//Hoisting: la variable no existe para nuestro interprete de JS.
//console.log(a);
let a = "Hoisting let";
//VAR 
// Scope global, local
// Hoisting: no se puede utilizar o invocar antes de declararla.
//console.log(x);
var x ="hola";

// Const
// Scope global, local
//Hoisting : No se puede utilizar. No existe para nuestro interprete de JS.
//console.log(c);
const c = "Hoisting const";



// Input
const miNombre ="Armando";
function fiufiu(x) {
    console.log(x);
}
// Parametro declarado en variable
fiufiu(miNombre);
// Parametro aleatorio
fiufiu("Armando Andrade");
fiufiu(2);
//function con mas de 1 parametro
function dosParam(x,y){
    console.log(x + y);
}
dosParam("hola" + "mando");

// Invocacion con 2 parametros aleatorios
function dosParam(x,y){
    console.log(x);
    console.log(y);
}
dosParam("Hola" , "Mando");
//////////////


//OUTPUT
function out(){
    let x="hola";
    return x;
}

//Podemos recibir el dato de forma directa
//console.log(out());
//Podemos guardar el output en una variable
//Y la podemos utilizar despues
const receive=out();
//console.log(receive);

//Function con parametro y return
function areaRectangulo(b,a){
    var resultado=b*a;
    return resultado;
}
console.log(areaRectangulo(6,3));

function areaTriangulo(b,a){
    var resultado=b*a/2;
    return resultado;
}
console.log(areaTriangulo(8,4));

