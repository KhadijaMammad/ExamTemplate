import { WomenModel } from "../models/WomenModel.js";

export const WomenController = {
    getAllClothes: async (req,res) =>{
        let clothes =  await WomenModel.find()
        res.send(clothes)
    },
    getById: async (req,res)=>{
        let id=req.params.id
        let myproduct = await WomenModel.findById(id)
        res.send({
            message:"Success GetById",
            data:myproduct
        })
    },
    deleteProduct: async  (req,res)=>{
        let {id}=req.params
       await WomenModel.findByIdAndDelete(id)
       res.send({
        message:"Success Delete",
    })
    },
    postProduct: async (req,res)=>{
        let newProduct = new WomenModel(req.body)
       await newProduct.save()
       res.send({
         message:"Success Post",
         data:req.body
       })
    },
    updateProduct: async (req,res)=>{
        let id=req.params.id
        let updateProduct=req.body
      let updatedProduct = await WomenModel.findByIdAndUpdate({_id:id},updateProduct,{new:true})
        res.send(updatedProduct)
    }

}