import { GetRechargeByNumberController, PostRechargeController } from "../controllers/recharges-controller";
import { Router } from "express";
import { rechargeSchema } from "../schemas/recharges-schemas";
import { validateSchema } from "../middlewares/schemas-middleware";

const RechargesRoute = Router();

RechargesRoute.post("/recharges", validateSchema(rechargeSchema), PostRechargeController);
RechargesRoute.get("/recharges/:number", GetRechargeByNumberController);

export default RechargesRoute;