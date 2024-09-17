import express, { Request, Response, json } from "express";
import PhonesRouter from "./routes/phones-router";
import RechargesRoute from "./routes/recharges-router";
import errorHandler from "./middlewares/errors-middleware";
import SummaryRoute from "./routes/summary-router";

const app = express();
app.use(json());

app.get("/health", (req: Request, res: Response) => {
  res.status(200).send("I'm ok!");
});

app.use(PhonesRouter);
app.use(RechargesRoute);
app.use(SummaryRoute)
app.use(errorHandler);

const port = process.env.PORT || 5000 ;
app.listen(port, () => console.log(`porta ${port}`));