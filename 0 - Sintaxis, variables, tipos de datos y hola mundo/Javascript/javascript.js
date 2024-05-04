//Comentarios de una linea en Javascript}
/*
Comentario
de varias
lineas
*/

/* Comentario JSDoc es una convención de documentación para JavaScript 
  que permite describir la estructura y tipos de los parámetros de una función, 
  así como el tipo de retorno de la función A continuación un ejemplo */

/**
 * Esta función concatena dos cadenas de texto y devuelve el resultado.
 * @param {string} str1 - La primera cadena de texto.
 * @param {string} str2 - La segunda cadena de texto.
 * @returns {string} La concatenación de las dos cadenas de texto.
 */

function concatenarCadenas(str1, str2) {
  return str1 + str2;
}

//En javascript una variable se declara con la palabra reservada let.
//Se puede utilizar camelCase, snake_case son las mas comunes para variables.
let miVariable = "string"
let mi_variable = 0

//Para constantes se usa la palabra reservada const 
//Se puede utilizar PascalCase, UPPER_SNAKE_CASE son las mas comunes para constantes.
const MiConstante = 3.14
const MI_CONSTANTE_STRING = "Constante string"

//Tipos de datos primitivos
//También podemos iniciar varias variables de esta forma.
let string = "string"
    variable_entera = 12
    variable_flotante = 12.5

let booleano = true
//Para reasignar una variable se omite usar la palabra let.
    booleano = false

// Un array es una estructura de datos, a los cuales se puede acceder de diferentes formas.
const Array = [0, 1, 2, 3, 4]

let acceder = Array[0] //va a ser la primera posición del array.
console.log(acceder + " primera posición del array.")
let tercera_posicion = Array[2]
console.log(tercera_posicion + " tercera posición del array.")



//Un objeto es una colección de pares "clave:valor" donde cada valor se accede desde su clave.
const Objeto = {
  clave: "valor",
  numero: 12,
  booleano: true,
  flotante: 3.14,
  random: "37"
}

let acceder_objeto = Objeto.numero
console.log(acceder_objeto + " El valor al que accedimos con la clave numero")

//Un array de objetos es un array que contiene múltiples objetos como sus elementos.
const ARREGLO_CON_OBJETOS = [
  {
    objeto: 1
  },
  {
    objeto: 2,
    compuesto: "37",
    nivel: {
      profundidad: ["array", "string", "boolean", true, 12],
      test: {
        hola: true
      }
    }
  },
  {
    objeto: "3"
  }
]

// Para acceder a un array con objetos es igual, simplemente se debe ir concatenando 
//hasta llegar al dato requerido

let concatenar = ARREGLO_CON_OBJETOS[1].nivel.profundidad[1] // El string "string"
let concatenando = ARREGLO_CON_OBJETOS[1].nivel.test.hola // El boolean true
console.log(`Primer valor ${concatenar}, segundo valor ${concatenando}`)

//Para imprimir por consola se puede hacer con string literal, es muy practico al momento de 
// agregar variables y cualquier tipo de dato.
let emoji = ":D"
console.log(`Hola mundo ${emoji} en JavaScript`)

// Para ejecutar un archivo JS se puede hacer desde consola con Node
// node archivo.js