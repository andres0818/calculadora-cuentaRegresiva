const calculadora = "http://localhost:3000/historial";

const historial = document.getElementById("historial");

export const mostrarHistorial = async (borrar) => {
  try {
    const data = await axios.get(calculadora);
    data.data.forEach((element) => {
      historial.innerHTML += `        
        <h4 id="score">${element.id}<button class="delete"  onclick="eraseCalculadora(${element.id})" >Delete</button></h4>
        `;
    });
  } catch (error) {
    console.log(error);
  }
};
