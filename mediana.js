function calcularMediaAritmetica (lista) {
  const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  );
  
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}
// const lista1 = [100, 200, 500, 400000000];

function esPar (numerito) {
  if (numerito % 2 === 0) {
    return true;
  } else{
    return false;
  }

}

function obteniendoMediana (lista){
  const listaOrdenada = lista.sort(function (a, b){
    return a-b;
  });

  let mediana; 
  const mitadLista = parseInt(listaOrdenada.length / 2);
  if (esPar(lista.length)) {
    // si nuestra lista tiene una cantidad de elementos par
    // -> necesitamos los dos elementos del medio para calcular el promedio 
    // -> y el promedio de estos dos elementos sera la mediana
    const elemento1 = listaOrdenada[mitadLista - 1];
    const elemento2 = listaOrdenada[mitadLista];
    const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
    mediana = promedioElemento1y2;
  }else {
    // si la cantidad de elementos de nuestra lista no es par 
    // se ejecutara el cosdigo del else obteniendo el numero del medio de la lista
    mediana = listaOrdenada[mitadLista];
  }
  return mediana;
}
