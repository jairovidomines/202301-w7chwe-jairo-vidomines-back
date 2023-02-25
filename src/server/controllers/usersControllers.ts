import { type Request, type Response, type NextFunction } from "express";
import User from "../../database/models/User.js";
import createDebug from "debug";
import { type UserCredentialsStructure } from "../../types.js";
import { CustomError } from "../../CustomError/CustomError.js";
import bcryptsjs from "bcrypt";

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

export const createUser = async (
  req: Request<
    Record<string, unknown>,
    Record<string, unknown>,
    UserCredentialsStructure
  >,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, password, email } = req.body;

    const hashedPassword = await bcryptsjs.hash(password, 8);

    const avatar = req.file?.filename;

    const user = await User.create({
      username,
      password: hashedPassword,
      email,
      avatar,
    });

    res.status(201).json({ username });
  } catch (error) {
    const customError = new CustomError(
      "Couldn't create the user",
      500,
      "Couldn't create the user"
    );

    next(customError);
  }
};
