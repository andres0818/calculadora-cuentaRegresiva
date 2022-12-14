
const API_URL = "http://localhost:3000" 

const API_PATHS = {
	calculadora: "/historial",
    contador:"/fechas"
}

const handleError = (error) => {
	console.log("ha Ocurrido un error");
	console.log(error);
}
//Mostrar datos
/* const httpGET = async (path) => {
	try {

		console.log("haciendo una nueva petición GET");
		console.log("base api : ", API_URL);
		console.log("ruta api : ", path);

		let response = await fetch(API_URL + path)
		let data = await response.json() // parse

		return data
	} catch (error) {
		handleError(error);
	}
} */
//enviar datos {nuevo dato}
const httpPOST = async (path, newData) => {
	try {
		console.log("haciendo una nueva petición POST");
		console.log("base api : ", API_URL);
		console.log("ruta api : ", path);

		let response = await fetch(
			API_URL + path,
			{
				body: JSON.stringify(newData),
				method: "POST",
				headers: {
					'Content-Type': 'application/json'
				}
			}
		)
		let data = await response.json()
		return data
	} catch (error) {
		handleError
	}
}



//Eliminar datos 
const httpDELETE = async (path, id) => {
	try {
		console.log("haciendo una nueva petición PATCH");
		console.log("base api : ", API_URL);
		console.log("ruta api : ", path);

		let response = await fetch(
			`${API_URL}${path}/${id}`, // js string templates
			{
				method: "DELETE",
				headers: {
					'Content-Type': 'application/json'
				}
			}
		)
		let data = await response.json()
		return data

	} catch (error) {
		handleError(error)
	}
}



/*  export const getCalculadora = async () => await httpGET(API_PATHS.calculadora)
 export const getCalContador = async () => await httpGET(API_PATHS.contador) */

export const createDataCalculadora = async (newDato) => await httpPOST(API_PATHS.calculadora, newDato)
 const createDataContador = async (newDato) => await httpPOST(API_PATHS.contador, newDato)

 export const eraseCalculadora = async (id) => await httpDELETE(API_PATHS.calculadora, id)
 const eraseContador = async (id) => await httpDELETE(API_PATHS.contador, id)


