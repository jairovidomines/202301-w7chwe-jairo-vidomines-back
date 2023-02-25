import { type Request, type Response, type NextFunction } from "express";
import User from "../../database/models/User.js";
import createDebug from "debug";

const debug = createDebug("users:usersControllers");

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (error: unknown) {
    debug("User not found");
  }
};
