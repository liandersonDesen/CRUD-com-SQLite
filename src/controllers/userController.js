import { PrismaClient } from "@prisma/client";

const prisma =new PrismaClient();

export const getAllUsers = async (req,res)=>{
    try {
        const users = await prisma.usuario.findMany()
        res.status(200).send((users));
    } catch (error) {
        res.status(500).send(error)
    }
}

export const createUser = async (req,res)=>{
    try{
        const { NovoNome,NovoEmail } = req.body
        const novoUsuario = await prisma.usuario.create({
            data:{
                nome:NovoNome,
                email:NovoEmail
            },
        })
        res.status(201).send(`O usuário ${NovoNome} com o email ${NovoEmail} foi criado!!!`)    
    }catch(error){
        res.status(501).send(`erro ao cadastrar: código ${error.code}`)
    }
}

export const updateUser = async (req,res)=>{
    try{
        const id = parseInt(req.params.id);
        const { NovoNome,NovoEmail } = req.body
        const usuarioAtualizado = await prisma.usuario.update({
            where:{id:id},
            data:{
                nome:NovoNome,
                email:NovoEmail
            },
        })
        res.status(201).send(usuarioAtualizado)    
    }catch(error){
        res.status(501).send(`erro ao Atualizar:código ${error.code}`)
    }
}

export const deleteUser = async (req,res)=>{
    try{
        const id = parseInt(req.params.id);
        const usuarioDeletado = await prisma.usuario.delete({
            where:{id}
        })
        res.status(204).send(usuarioDeletado)    
    }catch(error){
        res.status(501).send(`erro ao deletar:código ${error.code}`)
    }
}

export const getUsersFromId = async (req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const users = await prisma.usuario.findUnique({where:{id}})
        res.status(200).send((users));
    } catch (error) {
        res.status(500).send(error)
    }
}
export const getAllUsersFromName= async (req,res)=>{
    try {
        const { nome } = req.params;        
        const users = await prisma.usuario.findMany({where:{nome}})
        res.status(200).send((users));
    } catch (error) {
        res.status(500).send(error)

    }
}


export const getAllUsersFromComecoName= async (req,res)=>{
    try {
        const { comeco } = req.params;   
        const users = await prisma.usuario.findMany({
            where: {
                  nome: {
                    startsWith: comeco,
                  },
            },
        });        
        res.status(200).send((users));
    } catch (error) {
        res.status(500).send(error)
    }
}

// buscar todos os usuarios entre o valor min e max.
export const idMinMax = async (req, res) => {
    const min = parseInt(req.body.min)
    const max = parseInt(req.body.max)
    const users = await prisma.usuario.findMany({
        where: {
            id: {
                gte: min,
                lte: max,
            },
        },
    });

    res.send(users);
}
