import express, { type Express, type Request, type Response } from "express";
import dotenv  , {configDotenv } from "dotenv";

// load environment variables
dotenv.config({ path: "./src/.env.local" });
const app: Express = express();
const PORT: number = parseInt(process.env.PORT || "3000", 10);

// sample route
app.get("/", (req : Request, res : Response) => {
  res.send("Hello, world!");
});

app.listen(PORT, (): void => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

