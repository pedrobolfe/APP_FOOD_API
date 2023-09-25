import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function createProduct(req: Request, res: Response) { // Cria um novo produto
	try {
		const imagePath = req.file?.filename; // obtem o filename da requisicao se ela nao for nula, assim evitando erros
		const { name, description, price, category, ingredients } = req.body; // extrai esses atributos da solicitacao POST

		const product = await Product.create({ // consulta o BD e cria um produto com esses atributos, com solicitação POST
			name,
			description,
			imagePath,
			price: Number(price),
			category,
			ingredients:ingredients ? JSON.parse(ingredients): [], 
		});

		res.status(201).json(product); // passa o status que a solicitação POST deu certo
	} catch (error) {
		console.log(error); // exibe uma mensagem do erro no console
		res.sendStatus(500); // erro do server
	}
}