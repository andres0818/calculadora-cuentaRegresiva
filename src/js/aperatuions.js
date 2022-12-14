export const operaciones=()=>{
let operandoA = "0";
let operandoB = "0";
let operacion = "";
resultado.textContent = "";
const init = () => {
  let resultado = document.getElementById("resultado");
  let reset = document.getElementById("reset");
  let suma = document.getElementById("suma");
  let resta = document.getElementById("resta");
  let multiplicacion = document.getElementById("multiplicacion");
  let division = document.getElementById("division");
  let igual = document.getElementById("igual");
  let uno = document.getElementById("uno");
  let dos = document.getElementById("dos");
  let tres = document.getElementById("tres");
  let cuatro = document.getElementById("cuatro");
  let cinco = document.getElementById("cinco");
  let seis = document.getElementById("seis");
  let siete = document.getElementById("siete");
  let ocho = document.getElementById("ocho");
  let nueve = document.getElementById("nueve");
  let cero = document.getElementById("cero");
};

uno.onclick = (e) => (resultado.textContent = resultado.textContent + "1");

dos.onclick = (e) => (resultado.textContent = resultado.textContent + "2");

tres.onclick = (e) => (resultado.textContent = resultado.textContent + "3");

cuatro.onclick = (e) => (resultado.textContent = resultado.textContent + "4");

cinco.onclick = (e) => (resultado.textContent = resultado.textContent + "5");

seis.onclick = (e) => (resultado.textContent = resultado.textContent + "6");

siete.onclick = (e) => (resultado.textContent = resultado.textContent + "7");

ocho.onclick = (e) => (resultado.textContent = resultado.textContent + "8");

nueve.onclick = (e) => (resultado.textContent = resultado.textContent + "9");

cero.onclick = (e) => (resultado.textContent = resultado.textContent + "0");

reset.onclick = (e) => resetear();

suma.onclick = (e) => {
  operandoA = resultado.textContent;
  operacion = "+";
  limpiar();
};
resta.onclick = (e) => {
  operandoA = resultado.textContent;
  operacion = "-";
  limpiar();
};
multiplicacion.onclick = (e) => {
  operandoA = resultado.textContent;
  operacion = "*";
  limpiar();
};
division.onclick = (e) => {
  operandoA = resultado.textContent;
  operacion = "/";
  limpiar();
};

igual.onclick = (e) => {
  operandoB = resultado.textContent;
  resolver();
};

function limpiar() {
  resultado.textContent = "";
}

function resetear() {
  resultado.textContent = "";
  operandoA = 0;
  operandoB = 0;
  operacion = "";
}

function resolver() {
  let res = 0;
  switch (operacion) {
    case "+":
      res = parseFloat(operandoA) + parseFloat(operandoB);
      break;
    case "-":
      res = parseFloat(operandoA) - parseFloat(operandoB);
      break;
    case "*":
      res = parseFloat(operandoA) * parseFloat(operandoB);
      break;
    case "/":
      res = parseFloat(operandoA) / parseFloat(operandoB);
      break;
  }

  resetear();
  resultado.textContent = res;
}
}