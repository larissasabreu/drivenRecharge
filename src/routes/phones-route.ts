import { validateSchema } from "../middlewares/schemas-middleware";
import { GetPhonesByDocController, GetPhonesController, PostPhonesController } from "../controllers/phones-controller";
import { Router } from "express";
import { phoneSchema } from "../schemas/phones-schemas";

const PhonesRouter = Router();

PhonesRouter.get("/phones", GetPhonesController);
PhonesRouter.get("/phones/:document", GetPhonesByDocController);
PhonesRouter.post("/phones", validateSchema(phoneSchema), PostPhonesController);

export default PhonesRouter;