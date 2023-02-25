import Router from "express";
import { getUsers } from "../server/controllers/usersControllers";

export const usersRouter = Router();

usersRouter.get("/", getUsers);
