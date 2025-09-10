import { toNodeHandler } from "better-auth/node";
import express from "express";
import auth from "./utils/auth";

const app = express();

app.all("api/auth/{*any}", toNodeHandler(auth));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.json({ hello: "World!" }); 
});

const { PORT } = process.env;
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));