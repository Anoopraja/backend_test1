import express from "express";
import {
    registerUser,
    getAllUser,
    userlogin
} from "../controllers/user.controller.js"

const route = express.Router();

route.post("/register", registerUser);
route.get("/user", getAllUser);
route.post("/login",userlogin);

export default route;