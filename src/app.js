import express from "express";
import userRoutes from "./routes/userRoutes.js"
import productRoutes from "./routes/productRoutes.js"

const app = express()

app.use(express.json())

app.use("/usuarios",userRoutes);
app.use("/produtos",productRoutes);


app.get("/",(req,res)=>{
    res.status(200).send("<center><h1>Página Principal</h1><br><br><h2><a href='./usuarios'>Usuarios</a><br><a href='./produtos'>Produtos</a><h2></center>")
})


export default app
