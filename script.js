//Ejercicio 1: Números más diez


// const numeros = [1, 2, 3, 4, 5];

// const numerosMasDiez = numeros.map(numero=>numero+10);
// console.log(numerosMasDiez)

//Opción función mumuki

// const numerosMasDiez = (numeros) => {
   
//     const aumentados = numeros.map(numero=>numero+10);
    
//    return aumentados
//   } 
  
// console.log(numerosMasDiez([10, 20, 30, 40, 50]))


//Ejercicio 2: Dobles
//Usando map definí la función dobles que tome una lista de numeros y devuelva un nuevo array con cada valor multiplicado por dos



// const numeros = [3, 7, 13, 99];

//     const dobles = numeros.map(numero => numero * 2);
        
// console.log(dobles)

//[6, 14, 26, 198]


//Opción función mumuki
// const dobles = (numeros) => {

//     const duplicadas = numeros.map(numero => numero * 2);
  
//     return duplicadas
//   }
  
//   console.log(dobles([3, 7, 13, 99]))


//Ejercicio 3: Gritar todas
//Usando map definí la función gritarTodas que tome una lista de frasescon frases al azar y devuelva un nuevo array en donde cada frase empiece y termine con un signo de exclamación.

// const gritarTodas = (frases) => {

//     const exclamadas = frases.map(frase => `¡${frase}!`);

//     return exclamadas

// }

// console.log(gritarTodas(['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.']))

// Ejercicio 4: Enlistar
// Usando map definí la función enlistar que tome una lista de libros con libros para leer y devuelva un nuevo array en donde cada título de los libros esté dentro de una etiqueta <li></li>.

// const enlistar = (librosJS) => {


//     const enlistados = librosJS.map(libro => `<li>${libro}</li>`)

// return enlistados

// }

// console.log(enlistar(['JavaScript for Kids: A Playful Introduction to Programming','Composing Software','Eloquent JavaScript: A Modern Introduction to Programming','JavaScript: The Good Parts','Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries','Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript','JavaScript: The Definitive Guide','You Don’t Know JS','JavaScript Allongé: The Six Edition']))

//Ejercicio 5: Longitudes
//Usando map, definí una función longitudes que tome una lista de frases y devuelva un nuevo array que contenga la longitud de cada frase.

// const longitudes = (frases) => {

// const newArray = frases.map(frase => frase.length);

// return newArray

// }

// console.log(longitudes(['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.']))

//Ejercicio 6: Posiciones
//Usando map, definí la función posiciones que tome una lista de canciones de una playlist y devuelva un nuevo array con los números de las posiciones de cada canción.

// const posiciones = (playlist) => {

    
//     const newArray = playlist.map(cancion => `${playlist.indexOf(cancion)} - ${cancion}` )

//     return newArray

// } 

// console.log(posiciones(['Everlong', 'The Pretender', 'Learn to Fly']))

//Ejercicio 7: Precios finales
// Necesitamos calcular los precios finales de unos productos . Para ello tenemos que:
// aplicarle la ganancia sobre su costo;
// aplicarle el IVA sobre el resultado anterior.

// function agregarIVA(costo) {
//     return costo * 1.21;
//   }
  
//   function sumarGanancia(costo) {
//     return costo * 1.5;
//   }

// const preciosFinales = (costos) => {

//   const arrayGanancia = costos.map(costo => sumarGanancia(costo))
//   const arrayFinal = arrayGanancia.map(ganancia => agregarIVA(ganancia))

//   return arrayFinal

// }

// console.log(preciosFinales([ 12.5, 56, 98, 45.75 ]))

//Ejercicio 8: Corresponder
//Usando map, definí la función corresponder que tome una lista de costos con números que representan costos de diferentes articulos y una lista de productos con los nombres de cada producto y devuelva un nuevo array en donde el nombre de un producto en una posición, se corresponde con el precio final que está en la misma posición. Por ejemplo: el producto que está en la posición 1 tiene un precio igual al elemento en la posición 1 del array costos

// const corresponder = (costos, productos) => {

//     const arrayFinal = preciosFinales(costos)
    
//     const lista = productos.map(producto => `${producto} ${arrayFinal}` )

//     return lista

// }

// console.log(corresponder([12.5, 56, 98], ['celular', 'notebook', 'monitor' ]))


//Ejercicio 9: Los más caros
//Usando filter, definí la función losMasCaros que tome una lista de costos que representan costos de diferentes productos y devuelva un nuevo array con los precios más caros (mayores a 50)

// const losMasCaros = (costos) => {
  
//     const caros= costos.filter(costo => costo>50)
    
//     return caros
    
//   }



//Ejercicio 10: Pares e impares
//Usando filter, definí la función separandoPares que tome una lista de numeros con números al azar y devuelva un nuevo array con los números pares. Y otra función separandoImpares que también tome una lista de números y devuelva un nuevo array con los números impares.

// const separandoPares = (numeros) => {
  
//     const pares = numeros.filter((numeros) => {
      
//       if(numeros%2===0){
//         return numeros
//       }
        
//     }); 
     
//     return pares
//    }
   
//    const separandoImpares = (numeros) => {
     
//     const impares = numeros.filter((numeros) => {
      
//       if(numeros%2 !== 0){
//         return numeros
//       }
    
//     });
//   return impares
//    }
   
//   console.log(separandoPares([43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32]))
//    //[18, 46, 44, 42, 0, 40, 10, 38, 34, 40, 4, 32]
//    console.log(separandoImpares([43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32]))
//   // [43, 11, 37, 29, 9, 3, 37, 25]


//Ejercicio 11: Sólo strings
//Usando filter, definí la función soloStrings que tome una lista de mix con varios elementos de distintos tipos de datos y devuelva un nuevo array que contenga sólo los datos de tipo string.

// const soloStrings = (mix) => {
  
//     const strings = mix.filter((mix) => {
      
//         return typeof (mix) === 'string'             

//   });
  
//     return strings
// }

// console.log(soloStrings([ 'Ut vero.',2 , function () { console.log('hola mundo!') }, 56, 'Diam rebum nonumy et.', true, false,'Kasd stet.', 'Sit et dolor.', null, null, [ 1, 2, 3], 'Dolore.']))

//Ejercicio 12: Playlist sin escuchar
//Nuestra página de múscia favorita nos está recomendando canciones que ya escuchamos . ¿No podemos hacer algo?
//Usando filter, definí la función playlistSinEscuchar que tome una lista playlist con canciones sugeridas y otra lista playlistEscuchada con canciones que ya escuchamos y devuelva un array con aquellas canciones de la playlist que no están en playlistEscuchada 

// const playlistSinEscuchar = (playlist, playlistEscuchada) => {

//     const noescuchadas = playlist.filter((playlist) => {
        
//         return playlist !== playlistEscuchada
       
//         });
// return noescuchadas
// }


// console.log(playlistSinEscuchar(['Smells Like Teen Spirit', 'Everlong', 'Come As You Are', 'The Pretender', 'Heart-Shaped Box', 'Learn to Fly', 'Lithium'], ['The Pretender', 'Lithium', 'Come As You Are']))