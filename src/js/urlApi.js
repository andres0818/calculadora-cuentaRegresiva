
const calculadora = "http://localhost:3000/historial";
const contador = "http://localhost:3000/fechas";

const historial = document.getElementById("historial");



export const mostrarHistorial = async () => {
  try {
    const data = await axios.get(calculadora);
    data.data.forEach(element => {console.log(element.id);
        historial.innerHTML +=`        
        <h4 id="score">${element.id}<button class="delete" >Delete</button></h4>
        
        `;
        
    });

  } catch (error) {
    console.log(error);
  }
};


