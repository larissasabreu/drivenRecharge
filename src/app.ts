import express, { Request, Response, json } from "express";
import PhonesRouter from "./routes/phones-route";
import RechargesRoute from "./routes/recharges-route";
import errorHandler from "./middlewares/errors-middleware";

const app = express();
app.use(json());

app.get("/health", (req: Request, res: Response) => {
  res.status(200).send("I'm ok!");
});

app.use(PhonesRouter);
app.use(RechargesRoute);
app.use(errorHandler);

app.listen(5000, () => console.log(`:3`));