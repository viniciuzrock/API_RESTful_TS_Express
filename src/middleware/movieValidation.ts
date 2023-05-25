import { body } from "express-validator"
export const movieCreateValidation = () => {
    return [//os nomes são iguais aos do model, enviados pela requisição
        body("title")
            .isString().withMessage("Título obrigatório")
            .isLength({ min: 5 }).withMessage("O Título precisa ter no mínimo 5 caracteres"),
        body("rating")
            .isNumeric().withMessage("A nota precisa ser um número").custom((value: number) => {
                if (value < 0 || value > 10) {
                    throw new Error("A nota precisa ser entre 0 e 10")
                }
                return true
            }),
        body("description").isString().withMessage("A descrição é obrigatória"),
        body("director").isString().withMessage("O diretor é obrigatório"),
        body("poster").isURL().withMessage("A imagem precisar ser uma URL")
        //não colocar um dos campos aqui, já representará que ele é opcional
    ]
}