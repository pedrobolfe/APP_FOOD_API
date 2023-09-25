import { Request, Response } from 'express';
import { Category } from '../../models/Category';

export async function listCategories(req: Request, res: Response) {
	try {
		const categories = await Category.find(); // realiza uma consulta no BD, e pega os dados para fazer solicitação GET

		res.json(categories); // envia a resposta http em formato json de todas categorias
	} catch (error) {
		console.log(error);
		res.sendStatus(500); // erro ao conectar ao server
	}
}