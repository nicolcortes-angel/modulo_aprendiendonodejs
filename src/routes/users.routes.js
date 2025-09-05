//1. importacion de dependecias y modulos 
import express from "express"; 
import { postUser, getAllUsers, putUserById, deleteUserById } from "../controllers/users.controller.js";


//2. Configurar las rutas 
const userRouter = express.Router();

//3. Ruta para el POST 
userRouter.post("/", postUser);

//3. Ruta para el GET
userRouter.get("/", getAllUsers);

//3. Ruta para el PUT
userRouter.put("/:id", putUserById);

//3. Ruta para el DELETE
userRouter.delete("/:id", deleteUserById);