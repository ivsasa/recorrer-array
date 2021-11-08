"use strict";
/**
 * document.querySelectorAll  Para seleccionar los artículos
 * document.querySelector Para los botones
 * 
 * nodo.addEventListener
 * 
 * for(){
 * }
 * 
 * while(){
 * }
 * 
 * do{
 * }while();
 */

//Variables
//Capturo las etiquetas article
const a1 = document.querySelectorAll(".a1");
const a2 = document.querySelectorAll(".a2");
const a3 = document.querySelectorAll(".a3");

let numbers = [1,2,3];


//Funciones
const ordenarFor = (evento) => {
    evento.preventDefault();//Evito propagación del evento. En este caso que el enlace vaya a su destino (href)

    //Capturar el nodo párrafo donde escribir el texto
    let p1 = a1[1].firstElementChild.nextElementSibling;
    let p2 = p1.nextElementSibling;

    p1.innerHTML = "<h6 style=\"color:red;font-weight:bold\">For: orden ascendente</h6>";
    for(let i = 0; i < numbers.length; i++){

        p1.innerHTML += `<div>Posición ${i}:${numbers[i]}</div>`;
    }

    p2.innerHTML = "<h6 style=\"color:red;font-weight:bold\">For: orden descendente</h6>";
    for(let i = numbers.length - 1; i >=0; i--){

        p2.innerHTML += `<div>Posición ${i}:${numbers[i]}</div>`

    }
          
}

const ordenarWhile = (e) => {
    e.preventDefault();
    let numbers = [1,2,3];
    let x = 0;
    
    while(x<numbers.length){
        console.log(`Posición ascendente ${x}: ${numbers[x]}`)
        x=x+1; //x++
    }

    x = numbers.length-1;

    while(x>=0){
        console.log(`Posición descendente ${x}: ${numbers[x]}`)
        x--;
    }
}

const ordenarDoWhile = (ev) =>{

    ev.preventDefault();
    let numbers = [1,2,3];
    let x = 0;
    
    do{
        console.log(`Posición ascendente ${x}: ${numbers[x]}`)
        x=x+1; //x++
    }while(x<numbers.length);

    x = numbers.length-1;

    do{
        console.log(`Posición descendente ${x}: ${numbers[x]}`)
        x--;
    }while(x>=0);




}


//Eventos


//Escuchar botones
document.querySelector("#b1")
    .addEventListener(
        "click",
        ordenarFor
        );

document.querySelector("#b2")
    .addEventListener(
        "click",
        ordenarWhile
        );

document.querySelector("#b3")
    .addEventListener(
        "click",
        ordenarDoWhile
        );