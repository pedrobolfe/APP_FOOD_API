import express from "express";
import mongoose from "mongoose";


mongoose.connect("mongodb://localhost:27017")
	.then(() => {
		const app = express();
		const port = 3001;

		app.listen(port, () => {
<<<<<<< HEAD
			console.log(`Server isrunning on http://localhost:${port}`);
=======
			console.log(`Server isrunning on https://localhost:${port}`);
>>>>>>> refs/remotes/origin/main
		});
	})
	.catch(() => console.log("Erro ao conectar com o mongoDB"));

