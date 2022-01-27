// Código Cuadrado

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

// Código Triángulo

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2; 
}

// Código Círculo

function diametroCirculo(radio){
    return radio * 2;
}

const PI = Math.PI;

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio * radio) * PI;
}

// Funciones HTML

// Cuadrado Función

function calcularCuadrado_P(){
    const input = document.getElementById("ladoCua");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    cuadrado_result.innerHTML = perimetro;
}

function calcularCuadrado_A(){
    const input = document.getElementById("ladoCua");
    const value = input.value;

    const area = areaCuadrado(value);
    cuadrado_result.innerHTML = area;
}

// Triángulo Función

function calcularTriangulo_P(){
    const input_l1 = document.getElementById("ladoT1");
    const lado1 = input_l1.value;

    const input_l2 = document.getElementById("ladoT2");
    const lado2 = input_l2.value;

    const input_base = document.getElementById("base");
    const base = input_base.value;

    const perimetro = perimetroTriangulo(lado1, lado2, base);
    triangulo_result.innerHTML = perimetro;
}

function calcularTriangulo_A(){
    const input_base = document.getElementById("base");
    const base = input_base.value;

    const input_altura = document.getElementById("altura");
    const altura = input_altura.value;

    const area = areaTriangulo(base, altura);
    triangulo_result.innerHTML = area;
}

// Círculo Función

function calcularCirculo_P(){
    const input = document.getElementById("radio");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    circulo_result.innerHTML = perimetro;
}

function calcularCirculo_A(){
    const input = document.getElementById("radio");
    const value = input.value;

    const area = areaCirculo(value);
    circulo_result.innerHTML = area;
}