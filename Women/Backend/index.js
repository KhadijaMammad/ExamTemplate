import express from "express";
const app = express();
import {config} from "dotenv";
import cors from "cors";
import "./config/config.js";
import {route} from "./router/WomenRouter.js";


app.use(express.json());
app.use(cors());
config();

app.use("/clothes", route);

app.listen(8080, () => {
  console.log("8080 portunda dinlenilir");
});
