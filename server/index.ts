import { toNodeHandler } from "better-auth/node";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import auth from "./auth/auth.ts";

const app = express();
dotenv.config({ path: "../.env" });

app.all("api/auth/{*any}", toNodeHandler(auth));

console.log(process.env.FRONTEND_ORIGIN);
app.use(cors({ origin: process.env.FRONTEND_ORIGIN }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
  return res.json({ hello: "World!" });
});

const { PORT } = process.env;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
