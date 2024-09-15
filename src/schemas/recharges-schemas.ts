import Joi from "joi";
import { Recharges } from "protocols/types";

export const rechargeSchema = Joi.object<Recharges>({
    telefone: Joi.string().min(11).max(11).required(),
    telefone_id: Joi.number().required(),
    credit_value: Joi.number().required()
})