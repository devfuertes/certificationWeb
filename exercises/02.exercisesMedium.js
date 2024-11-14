/* ----------------------------------
 ? Ejercicios Week 0 Nivel Medio
 --------------------------------- */

//  1. Crea una función que elimine el primer y último caracter de un string recibido por parámetros.

/* const removeLastFirt = function(value = '') {
    let result = ''
    for (let i = 1; i < value.length-1; i++) {
        result += value[i];
    }
    return result
}
 */
//Opción 2 Métodos

const removeLastFirt = function (value = "") {
  let result = "";
  for (let i = 1; i < value.length - 1; i++) {
    result += value[i];
  }
  const r = value.slice(1, value.length - 1);
  return r;
};
console.log(removeLastFirt("camión"));

//  2. Escribe una función que reciba una palabra y revise si es un palíndromo.

function isPalindrome(value = "") {
  let textArray = value.split("");
  let textReverse = textArray.reverse();

  console.log(textArray, textReverse);

  return value === textReverse.join("")
    ? `${value} ES un Palíndromo`
    : `${value} NO es un Palíndromo`;
}

console.log(isPalindrome("ama"));

// 3. Crea una función que cuente las vocales que contiene una palabra dada por parámetros.

const countVocals = function (value = "") {
  const lowerValue = value.toLowerCase();
  let accumulator = 0;
  const vocals = "aeiouáéíóúü";

  for (let i = 0; i < lowerValue.length; i++) {
    const item = lowerValue[i];
    accumulator += vocals.includes(item);
    // if (vocals.includes(item)) {
    //     accumulator++;
    // }
  }
  return accumulator;
};

console.log(countVocals("El Murciélago verde")); // 8

// 4. Crea una función que verifique si una cadena de texto recibida por parámetros es un pangrama (contiene todas las letras del abecedario).

function isPangram(value) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  value = value.toLowerCase();

  console.log(value);
  return alphabet.split("").every((letter) => value.includes(letter));
}
console.log(
  isPangram(
    "Un jugoso zumo de piña y kiwi bien frío es exquisito y no lleva alcohol"
  )
);

// 5. Escribe una función que compruebe si una cadena de texto contiene todas las vocales.

function containVocals(text) {
  const vocals = "aeiou";
  word = text.toLowerCase().replace(/[^aeiou]/g, "");

  console.log(word);
  return vocals.split("").every((letter) => word.includes(letter));
}
console.log("5.");
console.log(containVocals("surroccidental"));

// 6. Crea una función que realice una cuenta atrás desde un número recibido por parámetros.

function countBack(number) {
  for (let i = number; i >= 0; i--) {
    console.log(i);
  }
}
console.log(countBack(10));

// 7. Escribe una función que reciba por parámetros el año de nacimiento, y calcule la edad de la persona.

function agePerson(year) {
  const todayAge = 2024;
  const result = todayAge - year;

  return `Tú edad es: ${result}`;
}
console.log(agePerson(1975));

// 8. Crea una función que reciba la edad de una persona por parámetros y verifique si es mayor de edad. Imprime por consola un string con el resultado.
function ofLegalAge(age) {
  return age >= 18
    ? `Tú edad es ${age}, eres mayor de edad`
    : `Tú edad es ${age}, eres menor de edad`;
}
console.log(ofLegalAge(18));

// 9. Crea una función que simule el lanzamiento de un dado e imprime por consola el resultado cada vez que se ejecuta.

function rollDiceN(n) {
  let accumulator = 0;
  for (let i = 0; i < n; i++) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log("Valor del dado:", dice);
    // accumulator = accumulator + dice
    accumulator += dice;
  }
  console.log("Total:", accumulator);
}

rollDiceN(1)

// 10. Crea una función que reciba un año por parámetros y compruebe e imprima por consola si el año es bisiesto o no.
/* Tomar el año y dividirlo por 4. Si da un número entero, este es considerado bisiesto.
    En el caso de los años divisibles por 100, luego se deben dividir por 400. Si resulta que la operación da un número    entero, se trata de un año bisiesto. */

function leapAge(year) {
  if (year % 4 === 0 || year % 400 === 0) {
    console.log(`${year} Es un año bisiesto`);
  } else if (year % 100 !== 0) {
    console.log(`${year} No es un año bisiesto`);
  }


}

leapAge(1996);
leapAge(2001);
leapAge(1976);


 



// 11. Escribe una función que simula el juego piedra, papel y tijera. Recibirá como parámetro una opción (piedra, papel o tijera) en forma de string. La máquina, elegirá automáticamente una opción aleatoria. Imprime por consola ambas elecciones y en caso de ganar el jugador un mensaje de victoria, y en caso de perder uno de derrota.

// 12. La serie de Fibonacci es un problema matemático que realiza la suma de los dos números anteriores para generar el siguiente. Crea una función que imprima por consola la serie de Fibonacci hasta un número introducido por el usuario. El usuario debe ser preguntado por este número al iniciar la aplicación.

// 13. Escribe una función generadora de nombres de usuario aleatorios, a partir de dos grupos de palabras dadas. Estos grupos de palabras pueden estar agrupados en arrays. (nombres=['Hugo', 'Luis'], apellidos=['Duro', 'Fabiano']). Retorna un nombre de usuario aleatorio con nombre, apellido y un número aleatorio del 1 al 100. (Por ejemplo -> 'Pepe Pérez 87'.)

// 14. Crea una función calculadora de propinas. Debe recibir el total de la cuenta y el porcentaje de propina deseado, con ello deberá calcular e imprimir por consola la cuenta, la propina que corresponde a la cuenta introducida, y el total a pagar. Redondea a dos decimales.

// 15. Escribe una función que calcule el descuento aplicado a un precio. La función recibirá el precio y el descuento del artículo en venta, con ellos deberá calcular e imprimir por consola el precio, el descuento y el total del precio una vez aplicado el descuento. Redondea a dos decimales.
