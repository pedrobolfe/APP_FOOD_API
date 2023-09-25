import { Request, Response } from 'express';
import { Order } from '../../models/Order';

export async function listOrders(req: Request, res: Response) { // listagem dos pedidos, solicitação GET
	try {
		const orders = await Order.find() // consulta o BD para fazer fazer solicitacao GET
			.sort({creatAt: 1}) // ordena os produtos
			.populate('products.product'); // instancia os produtos

		res.json(orders); // retorna o objeto do dos produtos 
	} catch (error) {
		// mensagem de erro e status 500 q é erro no server
		console.log(error);
		res.sendStatus(500);
	}

}