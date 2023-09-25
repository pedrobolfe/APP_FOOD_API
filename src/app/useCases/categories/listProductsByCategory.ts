import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function listProductsByCategory(req: Request, res: Response) { // lista as categorias com os produtos cadastrados
	try {
		const {categoryId} = req.params; // extrai o id de uma categoria

		const products = await Product.find().where('category').equals(categoryId); // consulta o BD e retorna os produtos que fazem parte da msm categoria

		res.json(products); // resposta HTTP de formato json dos produtos
	} catch (error) {
		console.log(error);
		res.sendStatus(500); // erro interno do server
	}
}