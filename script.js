import { themeBlack } from "./src/js/themeCalculator.js";
import { themeWhite } from "./src/js/themeCalculator.js";
import { themePurple } from "./src/js/themeCalculator.js";
import { operaciones } from "./src/js/aperations.js";
import { createDataCalculadora } from "./src/js/ConnectionApi.js";
import { createDataContador } from "./src/js/ConnectionApi.js";
import { eraseCalculadora } from "./src/js/ConnectionApi.js";
import { eraseContador } from "./src/js/ConnectionApi.js";


operaciones()

const blackBackground = document.getElementById("black");
blackBackground.addEventListener("click", () => themeBlack());

const whiteBackground = document.getElementById("white");
whiteBackground.addEventListener("click", () => themeWhite());

const purpleBackground = document.getElementById("purple");
purpleBackground.addEventListener("click", () => themePurple());

