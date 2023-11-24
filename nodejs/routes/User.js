import express from "express";
import EmailController from "../Controller/UserController.js";

const EmailRouter = express.Router();

EmailRouter.get("/", EmailController.getEmail);
EmailRouter.post("/", EmailController.postEmail);

export default EmailRouter;
