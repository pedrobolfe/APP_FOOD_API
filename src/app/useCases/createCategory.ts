import { Request, Response } from "express";
//import { Category } from "../models/Category";

export async function createCategory(req:Request, res:Response){
	try {
		res.send("ok post create category");

	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}