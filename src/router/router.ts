import Router from "express";
import { getUsers } from "../server/controllers/usersControllers.js";

export const usersRouter = Router();

usersRouter.get("/", getUsers);
