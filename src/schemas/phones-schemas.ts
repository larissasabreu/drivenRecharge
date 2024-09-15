import Joi from "joi";
import { Phone } from "../protocols/types";

export const phoneSchema = Joi.object<Phone>({
    telefone1: Joi.string().min(11).max(11).required(),
    telefone2: Joi.string().min(11).max(11).allow('', null),
    telefone3: Joi.string().min(11).max(11).allow('', null),
    operadora: Joi.string().required(),
    nome: Joi.string().required(),
    descrição: Joi.string().required(),
    cpf: Joi.string().min(11).max(11).required()
})