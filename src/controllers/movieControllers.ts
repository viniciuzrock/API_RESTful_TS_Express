import { Request, Response } from "express";
import { MovieModel } from "../models/Movie";
import Logger from "../../config/logger";


export async function createMovie(req: Request, res: Response) {
    try {
        const data = req.body
        const movie = await MovieModel.create(data)
        return res.status(201).json(movie)
    } catch (error: any) {
        Logger.error(`Erro no sistema: ${error.message}`)
    }
}

//create function for find movie by id
export async function findMovieById(req: Request, res: Response) {
    try {
        const id = req.params.id
        const movie = await MovieModel.findById(id)
        if (!movie) {
            return res.status(404).json({ message: "Filme não encontrado" })
        }
        return res.status(200).json(movie)
    } catch (e: any) {
        Logger.error(`Erro no sistema: ${e.message}`)
    }
}

export async function getAllMovies(req: Request, res: Response) {
    try {
        const movies = await MovieModel.find()
        if (!movies) {
            return res.status(404).json({
                message: "Sem filmes disponíveis"
            })
        }
        return res.status(200).json(movies)
    } catch (e: any) {
        Logger.error(`Erro no sistema: ${e.message}`)
    }
}