import express, {} from "express";
import dotenv, { configDotenv } from "dotenv";
// load environment variables
dotenv.config({ path: "./src/.env.local" });
const app = express();
const PORT = parseInt(process.env.PORT || "3000", 10);
// sample route
app.get("/", (req, res) => {
    res.send("Hello, world!");
});
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map