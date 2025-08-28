// 1. Importamos
import mongoose from "mongoose";

// 2. contruir la plantilla del modelo
const productSchema = new mongoose.Schema({
 imagen:{
    type:String, // el tipo de dato la primera en mayusucla
    required: true
},
 titulo: {
    tyoe:String,
    required: true
 },

 descripcion: {
    type:String,
 },

precio:{
    type:Number,
    required: true
},

categorias:{
    type:String,
    enum: ["Salas de exterior", "Mesas", "Sillas", "Comedor", "Terrazas"]

},
esdisponible: {
    type:Boolean

}
}); 

export const productModel = mongoose.model("Productos", productSchema);