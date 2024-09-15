import { Router } from "express";
import { GetSummaryController } from "../controllers/summary-controller";

const SummaryRoute = Router();

SummaryRoute.get("/summary/:document", GetSummaryController);

export default SummaryRoute;