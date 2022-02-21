// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado (lado){
  return lado * 4;
} 
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado (lado){
  return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
//  "Los lados del triángulo miden: "
//  + ladoTriangulo1
//  + "cm, "
//  + ladoTriangulo2
//  + "cm, "
//  + baseTriangulo
//  + "cm"
//  );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo (lado1, lado2, base){
  return lado1 + lado2 + base;
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo (base, altura){
  return (base * altura) / 2;
}
// console.log("El área del triángulo es: " + areaTriangulo + "cm^2");
console.groupEnd();

// Código del círculo
console.group("Círculos");
// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo (radio) {
  return radio * 2;
}
// console.log("El diámetro del círculo es: " + diametroCirculo + "cm");

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia 
function perimetroCirculo (radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}
// console.log("El perímetro del círculo es: " + perimetroCirculo + "cm");

// Área
function areaCirculo (radio){
  return (radio * radio) * PI;
}
// console.log("El área del círculo es: " + areaCirculo + "cm^2");
console.groupEnd();


// Aquí interactuamos con el HTML
// Cuadrado
function calcularPerimetroCuadrado () {
  const input = document.getElementById("InputCuadrado");
  const value = parseInt(input.value);
  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado () {
  const input = document.getElementById("InputCuadrado");
  const value = parseInt(input.value);
  const area = areaCuadrado(value);
  alert(area);
}

// Triángulo 
function calcularPerimetroTriangulo () {
  const ladoA = document.getElementById("ladoA");
  const lado1 = parseInt(ladoA.value);
  const ladoB = document.getElementById("ladoB");
  const lado2 = parseInt(ladoB.value);
  const base = document.getElementById("base");
  const base2 = parseInt(base.value);
  const perimetro = perimetroTriangulo(lado1, lado2, base2);
  alert(perimetro);
}

function calcularAreaTriangulo () {
  const base = document.getElementById("base");
  const base2 = parseInt(base.value);
  const altura = document.getElementById("altura");
  const altura2 = parseInt(altura.value);
  const area = areaTriangulo(base2, altura2);
  alert(area);
}

// Círculo
function calcularPerimetroCirculo () {
  const radio = document.getElementById("radio");
  const radio2 = parseInt(radio.value);
  const perimetro = perimetroCirculo(radio2);
  alert(perimetro);
}

function calcularAreaCirculo () {
  const radio = document.getElementById("radio");
  const radio2 = parseInt(radio.value);
  const area = areaCirculo(radio2);
  alert(area);
}
