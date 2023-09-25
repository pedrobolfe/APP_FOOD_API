import { Request, Response } from 'express';
import { Order } from '../../models/Order';

export async function createOrder(req: Request, res: Response) { // cria um novo pedido
	try {
		const {table, products} = req.body; // obtem a table e o produto do objeto passadp

		const order = await Order.create({ table, products }); // solicitacao POST no banco de dados do pedido
		res.status(201).json(order); // retorna o status 201, e o objeto do pedido em json
	} catch (error) {
		console.log(error);
		res.sendStatus(500); // erro com o servidor
	}
}