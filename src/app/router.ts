import { Router } from "express";
import { createCategory } from "./useCases/createCategory";
import { listCategories } from "./useCases/listCategories";
export const router = Router();

// rota listar categorias
router.get("/categories", listCategories);

// rota create category
router.post("/categories", createCategory);

