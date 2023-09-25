import { Request, Response } from 'express';
import { Order } from '../../models/Order';

export async function changeOrderStatus(req: Request, res: Response) { // funcao para mudar o status de um pedido
	try {
		const { orderId } = req.params; // obtem o id do pedido
		const { status } = req.body; // obtem o status do pedio

		if (!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)){ // verifica se o status recebido é invalido, pois esta negando 
			return res.status(400).json({ // retorna erro de solicitacao no BD
				error: 'Status should be one of these: WAITING, IN_PRODUCTION, DONE' // msg de erro
			});
		}
		await Order.findByIdAndUpdate(orderId, { status }); // atualiza o status do pedido, com base no id do pedido
		res.sendStatus(204); // status que a solicitacao deu certo
	} catch (error) {
		// mensagem de erro e status 500 erro no server
		console.log(error);
		res.sendStatus(500);
	}
}