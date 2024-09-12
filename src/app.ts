import express, { Request, Response } from "express";

const app = express();
app.get("/health", (req: Request, res: Response) => {
  res.status(200).send("I'm ok!");
});

app.listen(5000, () => console.log(`server is up and running`));