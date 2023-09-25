import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function listProducts(req: Request, res: Response) { // funcao assincrona para listar os produtos
	try {
		const products = await Product.find(); // consulta o BD e obtem os produtos disponiveis para listar, usando solicitação GET

		res.json(products); // resposta HTTP em formato json dos produtos 
	} catch (error) {
		console.log(error);
		res.sendStatus(500); // erro do server
	}
}