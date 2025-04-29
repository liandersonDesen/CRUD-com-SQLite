const user = [
    {id:1,nome:"jose",email:"j@gmail.com"}
]

export const getAllUsers = (req,res)=>{
    res.status(200).send((user));
}

export const postUser = (req,res)=>{
    const { NovoNome,NovoEmail } = req.body
    const idNovo=user.length+1
    user.push({id:idNovo,nome:NovoNome,email:NovoEmail})
    res.status(201).send(`O usuário ${NovoNome} com o email ${NovoEmail} foi criado!!!`)    
}


