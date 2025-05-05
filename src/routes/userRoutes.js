import express from "express";
import { getAllUsers, createUser, updateUser, deleteUser, getUsersFromId, getAllUsersFromName, getAllUsersFromComecoName, idMinMax} from "../controllers/userController.js"
const router = express.Router();

router.get("/", getAllUsers)
router.post("/", createUser)
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)
router.get("/id/:id", getUsersFromId)
router.get("/nome/:nome", getAllUsersFromName)
router.get("/comeco_nome/:comeco", getAllUsersFromComecoName)
router.get("/entre/",idMinMax)

export default router;
