import { Router, Request, Response } from "express";
import { createMovie } from "./controllers/movieControllers";
import { validate } from "./middleware/handleValidation";
import { movieCreateValidation } from "./middleware/movieValidation";


const router = Router()

export default router.get("/test", (req: Request, res: Response) => {
    res.status(200).send('API ok')
}).post('/movie', movieCreateValidation(), validate, createMovie)