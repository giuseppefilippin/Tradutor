import express from "express";
import { getUsers, deleteUser, updateUser } from "../Controllers/users.js";

const router = express.Router();

router.get("/users", getUsers);
router.delete("/users/:id", deleteUser);
router.put("/users/:id", updateUser);

export default router;
