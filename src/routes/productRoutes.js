import express from "express";
import { getAllUsers } from "../controllers/userController.js";

const router = express.Router();


let produto=[
    {id:1,nome:"cafe",preco:20}
]

router.get("/", (req,res)=>{
    res.status(200).json(produto)
}
)

export default router;
