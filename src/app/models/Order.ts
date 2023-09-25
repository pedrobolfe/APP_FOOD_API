import {model, Schema } from 'mongoose';
// uma classe do pedido de produtos
export const Order = model('Order', new Schema({
	table: { 
		type: String,
		required: true,
	},
	status: { // status que o pedido pode ter, esperando, em produção e concluido
		// status padrao é esperando
		type: String,
		enum: ['WAITING', 'IN_PRODUCTION', 'DONE'],
		default: 'WAITING',
	},
	creatdAt: {
		type: Date,
		default: Date.now,
	},
	products: {// é um array dos produtos 
		required: true,
		type:[{
			product: { // objeto do produto
				type: Schema.Types.ObjectId,
				required: true,
				ref: 'Product',
			},
			quantity: { // quantidade de produtos
				type: Number,
				default: 1,
			},
		}],
	},
}));