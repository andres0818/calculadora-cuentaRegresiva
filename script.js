import { themeBlack } from "./src/js/themeCalculator.js";
import { themeWhite } from "./src/js/themeCalculator.js";
import { themePurple } from "./src/js/themeCalculator.js";
import { operaciones } from "./src/js/operations.js";
import { mostrarHistorial } from "./src/js/urlApi.js";


mostrarHistorial()
operaciones()
const blackBackground = document.getElementById("black");
blackBackground.addEventListener("click", () => themeBlack());

const whiteBackground = document.getElementById("white");
whiteBackground.addEventListener("click", () => themeWhite());

const purpleBackground = document.getElementById("purple");
purpleBackground.addEventListener("click", () => themePurple());


