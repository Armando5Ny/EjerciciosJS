//Este es un comentario de una sola linea usando dos barras o diagonales 


/*Este es un comentario multilinea usando una diagonal y asterisco para abrir y asterisco diagonal para cerrar */

/* */


//Una alerta es una ventana de dialogo que muestra un mensaje
//alert ("Hola Mando, Buenas :D");


//Pedimos la informacion al usuario con un prompt, la guardamos en una variable llamada nombre para despues mostrarlo
nombre = prompt("Quien eres?");

//Usamos un console.log para mostrar lo que se guardo en la variable nombre
console.log (nombre);


//Programa para calcular el area de un triangulo

//Definimos dos variables llamadas base y altura, donde el valor a tomar en cuenta para la formula es definido por el usuario a traves de un prompt

base = prompt("ingrese la base del triangulo");
altura = prompt("ingrese la altura del triangulo");

//Creamos una formula que utilice los datos ingresados
areaTriangulo = (base * altura)/2;

alert("areaTriangulo");
//Concatenacion de mensaje + resultado
console.log("El area del triangulo es: " + areaTriangulo);
