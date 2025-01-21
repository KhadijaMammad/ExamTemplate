import mongoose from "mongoose";

mongoose.connect("mongodb+srv://xadicacmbp109:xadicacmbp109@pulses.fjjbe.mongodb.net/")
.then(()=>{
    console.log("connected");
})