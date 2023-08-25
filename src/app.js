/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Button } from "bootstrap";

window.onload = function() {
  document.querySelector("#excusa").innerHTML = excusas();
  document.querySelector("#boton").addEventListener("click", () => {
    document.querySelector("#excusa").innerHTML = excusas();
  });
};

function excusas() {
  var quien = [
    "El perro",
    "Mi abuela",
    "El vecino",
    "La tortuga",
    "El gato",
    "Mi hermano",
    "Mi novia",
    "Mis primos",
    "Mi Tío",
    "La suegra",
    "El abuelo",
    "Mi amigo",
    "Mi compañera",
    "La Tía de mi amigo",
    "La ex"
  ];
  var accion = [
    "comió",
    "cocina",
    "quebró",
    "baila",
    "durmió",
    "trabaja",
    "canta",
    " corrió",
    "juega",
    "estudia",
    "maneja",
    "barre",
    "practica",
    "camina",
    "baña"
  ];
  var que = [
    "la tarea",
    "el carro",
    "las llaves",
    "el arbol",
    "la casa",
    "el pantalón",
    "la pecera",
    "el celular",
    "la cama",
    "la puerta",
    "el televisor",
    "el sillon",
    "la computadora",
    "los zapatos",
    "la comida"
  ];
  var donde = [
    "en el parque",
    "en el cine",
    "en el mall",
    " en el colegio",
    "en la escuela",
    "en la cocina",
    " en el cuarto",
    "en el estacionamiento",
    " después del trabajo",
    "en la sala",
    "en la playa",
    "en el avión",
    "en el concierto",
    "en el super mercado"
  ];

  var sujeto = Math.floor(Math.random() * quien.length);
  var verbo = Math.floor(Math.random() * accion.length);
  var obj = Math.floor(Math.random() * que.length);
  var lugar = Math.floor(Math.random() * donde.length);

  return (
    quien[sujeto] + " " + accion[verbo] + " " + que[obj] + " " + donde[lugar]
  );
}
