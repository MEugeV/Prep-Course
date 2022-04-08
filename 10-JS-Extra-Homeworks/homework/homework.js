// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let rdoString=[]
  for(let i in objeto) {
    rdoString.push([i,objeto[i]])
  }
  return rdoString
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let acumuladora=0
  let objeto={}
  let i=0
  let j=0
  for (i=0; i<string.length;i++) {
    if (string.indexOf(string[i])===string.lastIndexOf(string[i])) {
      objeto[string[i]]=1
    } else {for (j=0; j<string.length;j++) {
      if(string[i]===string[j]) {
        acumuladora= acumuladora + 1
      }
    }
    objeto[string[i]]=(acumuladora)
    }
    acumuladora=0
    j=0
  }
  return objeto
}



function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let nuevaPalabra=""
  let i=0
  for(i=0 ;i<s.length;i++) {
    if (s[i] === s[i].toUpperCase()) {
      nuevaPalabra = nuevaPalabra + s[i]
      }
    }
  i=0  
  for(i=0 ;i<s.length;i++) {
    if (s[i] === s[i].toLowerCase()) {
    nuevaPalabra = nuevaPalabra + s[i]
    }
  }
  return nuevaPalabra
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let i=0
  let j=0
  let strSplit = []
  let palabraAlReves=""
  let strFraseAlReves=[]
  let fraseAlReves=""
  strSplit = str.split(" ")
  for (i=0; i<strSplit.length; i++ ) {
    for (j=strSplit[i].length-1; j>=0;j--) {
      palabraAlReves = palabraAlReves + strSplit[i][j] 
    } 
    strFraseAlReves.push(palabraAlReves)  
    palabraAlReves=""
  }
  fraseAlReves=strFraseAlReves.join(" ")
  return fraseAlReves
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let acum=0
  for (i=0;i<Math.floor(numero.toString().length/2);i++) {
    if(numero.toString()[i]===numero.toString()[numero.toString().length-1-i]) {
      acum = acum + 1
    }
  }
  if(acum===Math.floor(numero.toString().length/2)) {
    return "Es capicua"
  } else {
    return "No es capicua"
  }
}



function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let cadenaSplit=[]
  let nuevaCadena=""
  cadenaSplit= cadena.split("")
  for(i=0;i<cadenaSplit.length;i++) {
    if(!(cadenaSplit[i]==="a" || cadenaSplit[i] === "b" || cadenaSplit[i] === "c" )){
      nuevaCadena=nuevaCadena + cadenaSplit[i]
    }
  }
  return nuevaCadena
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  //haciendo antes una acumuladora para ver si cumple la condicion de ser el menor en el primer string que se presenta
  //y que vuelva a cero y vuelva a iterar, hacer la primera iteracion y despues haces otro hasta qeu el length del string sea >0
  //que lo recorra hasta que sea vacio el strin
  //qeu los vaya pusheando y shifteando de a uno
  let menorLong= Infinity
  let posicMenorlong=""
  let arrOrdenado=[]
  let i=0
  let j=0
  while (arr.length>0) {
  for (i=0;i<arr.length;i++) {
    if(arr[i].length < menorLong) {
      menorLong=arr[i].length
      posicMenorlong=i
    }
  }
  arrOrdenado.push(arr[posicMenorlong])
  arr.splice(posicMenorlong,1)
  menorLong=Infinity
  }
  return arrOrdenado
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  let i=0
  let j=0
  let arreglo3=[]  
  for(i=0; i<arreglo1.length;i++) {
    for(j=0; j<arreglo2.length;j++) {
      if(arreglo1[i]===arreglo2[j]) {
        arreglo3.push(arreglo1[i])
      }
      }
      j=0
  }
  return arreglo3
}




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

