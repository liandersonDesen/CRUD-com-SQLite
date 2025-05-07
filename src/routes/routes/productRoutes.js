import express from "express";
import { createProduct, deleteProduct, getAllProducts, getProductFromId, ShellProduct, updateProduct } from "../../controllers/productController.js";
import { validate } from "../../middleware/validate.js";
import { CreateProdctSchema } from "../../schemas/ProdutsSchema.js";

const router = express.Router();

router.post("/",validate(CreateProdctSchema), createProduct)
router.get("/", getAllProducts)
router.get("/:id", getProductFromId)
router.put("/:id", updateProduct)
router.delete("/:id", deleteProduct)
router.put("/shell/:id", ShellProduct)

export default router;
