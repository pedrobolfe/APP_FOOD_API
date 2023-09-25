import {model, Schema } from "mongoose";

// export para poder ser usado por outros  arquivos 
export const Category = model("Category", new Schema({ // Modelo para criar uma nova categoria
	name: { // atributo nome da categoria de tipo str
		type: String,
		required: true, // é obrigatoria
	},
	icon: { // icon da categoria do tipo str, é obrigatoria
		type: String,
		required: true,
	}
}));