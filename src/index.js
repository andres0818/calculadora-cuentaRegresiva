import { themeBlack } from "./js/themeCalculator";
import { themeWhite } from "./js/themeCalculator";
import { themePurple } from "./js/themeCalculator";
import { operaciones } from "./js/operations";
import { mostrarHistorial } from "./js/urlApi";
import { reloj } from "./js/reloj";
import "./styles/contenedor.scss"
import "./styles/styleCalculator.scss"
import "./styles/styleContador.scss" 
import {createApp} from "./js/createApp"



createApp()

reloj("12/31/2022")

mostrarHistorial()
operaciones()
const blackBackground = document.getElementById("black");
blackBackground.addEventListener("click", () => themeBlack());

const whiteBackground = document.getElementById("white");
whiteBackground.addEventListener("click", () => themeWhite());

const purpleBackground = document.getElementById("purple");
purpleBackground.addEventListener("click", () => themePurple());





