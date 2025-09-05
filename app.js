//El archivo de ejecucion de nuestra aplicacion 
//Configurar nuestro servidor y gestionar la logica de negocio 


// 1. insentar las dependecias y modulos necesarios necesarias
import express from "express";
import dotenv from "dotenv";
import { conexionMongo } from "./src/config/db.js";
import { productRouter } from "./src/routes/products.routes.js";
import { userRouter } from "./src/routes/users.routes.js";




// 2. Configurar las dependencias que necesitamos
const app = express();
dotenv.config();
const port = process.env.PORT;
conexionMongo(); //conexion con dv



// 3. Funcionalidades que necesite agregar 
app.get("/",(request,response)=>{
  response.send(`server works!`)
});

app.use(express.json());
app.use("/products", productRouter);
app.use("/users", userRouter);


// 4. levantar el servidor  
app.listen(port, ()=>{
  console.log(`El servidor está ejecutándose en http://localhost:${port}`)
});