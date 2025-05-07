import { PrismaClient } from "@prisma/client";
const prisma =new PrismaClient();

export const createProduct = async (req,res)=>{
    try{
        const { name,description ,price,stock } = req.body
        const novoProduto = await prisma.Product.create({
            data:{
                name,
                description,
                price,
                stock
            },
        })
        res.status(201).send(`O Produto ${name} foi criado!!!`)    
    }catch(error){
        res.status(501).send(`erro ao cadastrar: código ${error.code}`)
    }
}

export const getAllProducts = async (req,res)=>{
    try {
        const products = await prisma.product.findMany()
        res.status(200).send((products));
    } catch (error) {
        res.status(500).send(error)
    }
}

export const getProductFromId = async (req,res)=>{
    try {
        const  id  = Number(req.params.id)
        const product = await prisma.product.findUnique({where:{id}})
        res.status(200).send((product));
    } catch (error) {
        res.status(500).send(error)
    }
}
export const updateProduct = async (req,res) =>{
    try {
        const  id  = Number(req.params.id)
        const { name,description ,price,stock } = req.body
        const productUpdate = await prisma.product.update({
            where:{id},
            data:{
                name,
                description,
                price,
                stock
            }
        })
        res.status(200).send((productUpdate));
    } catch (error) {
        res.status(500).send(error)
    }
}
export const deleteProduct = async (req,res) => {
    try {
        const  id  = Number(req.params.id)
        const productDelete = await prisma.product.delete({where:{id}})
        res.status(200).send((productDelete));
    } catch (error) {
        res.status(500).send(error)
    }   
}
export const ShellProduct = async (req,res) =>{
    try {  
        const  id  = Number(req.params.id)
        const  quantidade  = Number(req.body.quantidade)
        const productUpdate = await prisma.product.update({
            where:{id},
            data:{
                stock:{
                    decrement: quantidade>1?quantidade:1
                }
            }
        })
        res.status(200).send((productUpdate));
    } catch (error) {
        res.status(500).send(error)
    }
}