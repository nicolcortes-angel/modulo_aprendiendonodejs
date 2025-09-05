//1. importar dependencias y modulos necesarias
import { productModel } from "../models/products.model.js";

// definir las acciones que van a realizar - CRUD 

// 1. METODO PARA CREAR UN PRODUCTO = POST 
export const postProduct = (request, response) => {
// aqui va la logica de la peticion 
 return response.json({"mensaje": "Funciona peticion POST"});

}


// 2. METODO PARA MOSTRAR UN PRODUCTO = GET
export const getProducts = (request, response) => {
// aqui va la logica de la peticion 
 return response.json({"mensaje": "Funciona peticion GET"});

}

// 3. METODO PARA ACTUALIZAR UN PRODUCTO = PUT
export const putProduct = (request, response) => {
// aqui va la logica de la peticion 
 return response.json({"mensaje": "Funciona peticion PUT"});

}

// 3. METODO PARA ELIMINAR UN PRODUCTO = DELETE
export const deleteProductById = (request, response) => {
// aqui va la logica de la peticion 
 return response.json({"mensaje": "Funciona peticion DELETE"});

}
