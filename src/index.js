// Codigo Cuadrado

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

// Codigo Triangulo

function perimetroTriangulo(lado1, lado2, base){
    return parseInt(lado1) + parseInt(lado2) + parseInt(base);
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

// Codigo Circulo

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

const fontSize = document.getElementsByClassName("result");

// Funciones HTML

// Cuadrado Funcion

function calcularCuadrado_P(){
    const input = document.getElementById("ladoCua");
    const value = input.value;

    if (!value == "" && !value == 0) {
        const perimetro = perimetroCuadrado(value);
        document.getElementById("cuadrado_result").style.fontSize = "25px";
        cuadrado_result.innerHTML = perimetro + "cm";
    }
    else {
        document.getElementById("cuadrado_result").style.fontSize = "20px";
        cuadrado_result.innerHTML = "Por favor ingrese los datos requeridos";
    }
}

function calcularCuadrado_A(){
    const input = document.getElementById("ladoCua");
    const value = input.value;

    if (!value == "" && !value == 0) {
        const area = areaCuadrado(value);
        document.getElementById("cuadrado_result").style.fontSize = "25px";
        cuadrado_result.innerHTML = area + "cm2";
    }
    else {
        document.getElementById("cuadrado_result").style.fontSize = "20px";
        cuadrado_result.innerHTML = "Por favor ingrese los datos requeridos";
    }
}

// Triagulo Funcion

function calcularTriangulo_P(){
    const input_l1 = document.getElementById("ladoT1");
    const lado1 = input_l1.value;

    const input_l2 = document.getElementById("ladoT2");
    const lado2 = input_l2.value;

    const input_base = document.getElementById("base");
    const base = input_base.value;

    if (!lado1 == "" && !lado2 == "" && !base == "") {
        if (!lado1 == 0 && !lado2 == 0 && !base == 0) {
            const perimetro = perimetroTriangulo(lado1, lado2, base);
            document.getElementById("triangulo_result").style.fontSize = "25px";
            triangulo_result.innerHTML = perimetro + "cm";
        }
    }
    else {
        document.getElementById("triangulo_result").style.fontSize = "20px";
        triangulo_result.innerHTML = "Por favor ingrese los datos requeridos";
    }
}

function calcularTriangulo_A(){
    const input_base = document.getElementById("base");
    const base = input_base.value;

    const input_altura = document.getElementById("altura");
    const altura = input_altura.value;

    if (!base == "" && !altura == "") {
        if (!base == 0 && !altura == 0) {
            const area = areaTriangulo(base, altura);
            document.getElementById("triangulo_result").style.fontSize = "25px";
            triangulo_result.innerHTML = area + "cm2";
        }
    }
    else {
        document.getElementById("triangulo_result").style.fontSize = "20px";
        triangulo_result.innerHTML = "Por favor ingrese los datos requeridos";
    }
}

// Circulo Funcion

function calcularCirculo_P(){
    const input = document.getElementById("radio");
    const value = input.value;

    if (!value == "" && !value == 0) {
        const perimetro = perimetroCirculo(value);
        document.getElementById("circulo_result").style.fontSize = "25px";
        circulo_result.innerHTML = perimetro + "cm";
    }
    else {
        document.getElementById("circulo_result").style.fontSize = "20px";
        circulo_result.innerHTML = "Por favor ingrese los datos requeridos";
    }
}

function calcularCirculo_A(){
    const input = document.getElementById("radio");
    const value = input.value;

    if (!value == "" && !value == 0) {
        const area = areaCirculo(value);
        document.getElementById("circulo_result").style.fontSize = "25px";
        circulo_result.innerHTML = area + "cm2";
    }
    else {
        document.getElementById("circulo_result").style.fontSize = "20px";
        circulo_result.innerHTML = "Por favor ingrese los datos requeridos";
    }
}