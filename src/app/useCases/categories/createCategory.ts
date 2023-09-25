import { Request, Response } from 'express';
import { Category } from '../../models/Category';

export async function createCategory(req: Request, res: Response) { // Criar nova categoria, ex: hamburguer, bebida, pizza, etc..
	try {
		//res.send('Ok post category');
		const {icon, name} = req.body; // extrai o icon e nome para a solicitação post
		const category = await Category.create({icon, name}); // cria uma nova instancia da Categoria dop roduto
		res.status(201).json(category); // passa o status que a solicitação POST deu certo
	} catch (error) {
		console.log(error);
		res.sendStatus(500); // erro ao conectar com o servidor
	}
}