import axios from "axios";
import { eraseCalculadora } from "./ConnectionApi";

const calculadora = "http://localhost:3000/historial";
const contador="http://localhost:3000/fechas"




setInterval(() => {
  
  const historial = document.getElementById("historial");
},3000);

export const mostrarHistorial = async () => {
  try {
    const data = await axios.get(calculadora);
    data.data.forEach((element) => {
      historial.innerHTML += `        
        <h4 id="score">${element.id}<button class="delete"  onclick="${eraseCalculadora(element.id)}" >Delete</button></h4>
        `;
    });
  } catch (error) {
    console.log(error);
  }
};

export const fecha= async ()=>{
  try {
    const data=await axios.get(contador)   
    const resp= data.data.id
    return await resp; 

  } catch (error) {
    console.log(error);
  }
}


