import {model, Schema } from 'mongoose';
// modelo do produto podendo ser usado por outros arquivos 
export const Product = model('Product', new Schema({// 
	name: { // nome do produto, obrigatorio
		type: String,
		required: true,
	},
	description: { // descrição produto, obrigatorio
		type: String,
		required: true,
	},
	imagePath: { // imagem do produto, obrigatorio
		type: String,
		required: true,
	},
	price: { // preço do produto, obrigatorio
		type: Number,
		required: true,
	},
	ingredients: {//ingredientes do produto, obrigatorio, mas pode ser vazio (None)
		required: true,
		type:[{
			name: {
				type: String,
				required: true,
			},
			icon: {
				type: String,
				required: true,
			},
		}],
	},
	category: { // id de categoriaa do produto, recebendo um objetoId do banco de dados
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'Category', // referencia da categoria para podendo ser para consultas
	},
}));