

export const createApp=()=>{
    const element= document.createElement("div")
    element.setAttribute("class","contador-calculadora")
    element.innerHTML=`
      <div class="container" id="calculator">
        <div class="theme">
          <input class="radio radio-purple" type="button" name="" id="purple" />
          <input class="radio radio-black" type="button" name="" id="black" />
          <input class="radio radio-white" type="button" name="" id="white" />
        </div>
        <h1>Calculadora</h1>
        <div class="inputs">
          <table class="teclas">
            <tr>
              <td class="resutl" colspan="4"><span id="resultado"></span></td>
            </tr>
            <tr>
              <td class="numeros">
                <button id="siete">7</button>
                <button id="ocho">8</button>
                <button id="nueve">9</button>
                <button id="division">/</button>
              </td>
            </tr>
            <tr>
              <td class="numeros">
                <button id="cuatro">4</button>
                <button id="cinco">5</button>
                <button id="seis">6</button>
                <button id="multiplicacion">*</button>
              </td>
            </tr>
            <tr>
              <td class="numeros">
                <button id="uno">1</button>
                <button id="dos">2</button>
                <button id="tres">3</button>
                <button id="resta">-</button>
              </td>
            </tr>
            <tr>
              <td class="numeros">
                <button id="igual">=</button>
                <button id="reset">C</button>
                <button id="cero">0</button>
                <button id="suma">+</button>
              </td>
            </tr>
          </table>
          <div id="historial">
            <h4>historial</h4>
          </div>
        </div>
      </div>
      <div class="contador-descuento">
        <span id="puntos">
          <span id="days"></span> : <span id="hours"></span> :
          <span id="minutes"></span> : <span id="seconds"></span
        ><br>        
      </span>
      </div>

    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="src/js/ConnectionApi.js"></script>
    <script src="script.js" type="module"></script>
    `
    document.body.appendChild(element)

}

