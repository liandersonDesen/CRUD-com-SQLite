import express from "express";
import { getAllUsers, postUser } from "../controllers/userController.js"
const router = express.Router();

router.get("/", getAllUsers)
router.post("/", postUser)

export default router;
