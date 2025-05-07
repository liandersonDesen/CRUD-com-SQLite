
export function validate(schema){
    return (req, res, next)=>{
        try {
            //Validar o corpo da requisição comparando com o schema
            const validatedData=schema.parse(req.body)
            
            //Substituir o body pelos dados validados
            req.body = validatedData
            
            //Chamo o próximo agente(middleware)
            next()
            
        } catch (error) {
            const MessageError=error.issues.map(erro=>({
                "path":erro.path[0],
                "message":erro.message
            }))
            return res.status(400).json({
                messagem:"Erro de validação",
                erro:MessageError
            })
            
        }
    }
    
}