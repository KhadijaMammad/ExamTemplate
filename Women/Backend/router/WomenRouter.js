import express from 'express'
import { WomenController } from "../controllers/WomenController.js"

export const route = express.Router()

route.get("/", WomenController.getAllClothes)
route.get("/:id", WomenController.getById)
route.delete("/:id", WomenController.deleteProduct)
route.put("/:id", WomenController.updateProduct)
route.post("/", WomenController.postProduct)

