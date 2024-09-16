import Joi from "joi";
import { Recharges } from "protocols/types";

export const rechargeSchema = Joi.object<Recharges>({
    telefone_id: Joi.number().required(),
    credit_value: Joi.number().required()
})