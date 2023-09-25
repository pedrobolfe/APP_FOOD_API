import { Request, Response } from 'express';
import { Order } from '../../models/Order';

export async function cancelOrder(req: Request, res: Response) { // funcao assincrona para cancelar os pedidos
	try {
		const { orderId } = req.params; // obtem o id do objeto pelo parametro passado
		await Order.findByIdAndDelete(orderId); // cancela o pedido com base no id do objeto
		res.sendStatus(204); // resposta 204, que indica q a solicitacao foi sucedida

	} catch (error) {
		console.log(error);
		res.sendStatus(500); //  erro no servidor
	}
}