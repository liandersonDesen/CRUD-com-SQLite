import {z} from "zod"

export const CreateProdctSchema = z.object({
    name:z.string().min(3,"Tem que ter pelo o menos 3 caracter").trim()
    .refine(val=>/^[A-Za-z]/.test(val),"Tem que começar com uma letra"),
    description:z.string().trim(),
    price:z.number("Precisa ser número").gt(0,"Tem que ser maior que 0"),
    stock:z.number("Precisa ser número").nonnegative("Não pode ser um número negativo")
})