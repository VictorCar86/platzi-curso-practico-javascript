// Código Cuadrado

console.group("Cuadrados");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es " + areaCuadrado + "cm^2");

console.groupEnd();

// Código Triángulo

console.group("Triángulos");

const ladoTriangulo1 = 5;
const ladoTriangulo2 = 5;
const baseTriangulo = 4;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del cuadrado es " + perimetroTriangulo + "cm");

const alturaTriangulo = 5.5;
const areatriangulo = (baseTriangulo * alturaTriangulo) / 2; 
console.log("El área del cuadrado es " + areatriangulo + "cm^2");

console.groupEnd();

// Código Círculo

console.group("Círculos");

const radioCirculo = 4;
console.log("El radio del círculo es " + radioCirculo + "cm");

const diametroCirculo = radioCirculo * 2;
console.log("El diametro del círculo es " + diametroCirculo + "cm");

const PI = Math.PI;
console.log("PI es " + PI);

const perimetroCirculo = diametroCirculo * PI;
console.log("El perímetro del círculo es " + perimetroCirculo + "cm");

const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El área del círculo es " + areaCirculo + "cm^2");

console.groupEnd();