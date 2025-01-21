import mongoose from "mongoose"
import { Schema, model } from "mongoose"

let WomenSchema = new Schema ({
    image: String,
    name: String,
    price: Number
})

export let WomenModel = model("clothes", WomenSchema)