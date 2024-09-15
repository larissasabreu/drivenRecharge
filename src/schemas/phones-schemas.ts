import Joi from "joi";
import { Phone } from "../protocols/types";

export const phoneSchema = Joi.object<Phone>({
    telefone: Joi.string().min(11).max(11).required(),
    operadora: Joi.string().required(),
    nome: Joi.string().required(),
    descrição: Joi.string().required(),
    cpf: Joi.string().min(11).max(11).required()
})