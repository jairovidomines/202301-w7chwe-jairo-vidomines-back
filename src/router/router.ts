import Router from "express";
import multer from "multer";
import {
  createUser,
  getUsers,
} from "../server/controllers/usersControllers.js";

export const usersRouter = Router();

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, "uploads/");
  },
  filename(req, file, callback) {
    callback(
      null,
      `${Date.now()}-${(Math.random() * 1000).toFixed(0)}-${file.originalname}`
    );
  },
});

export const upload = multer({ storage, limits: { fileSize: 5000000 } });

usersRouter.get("/get", getUsers);
usersRouter.post("/create", upload.single("avatar"), createUser);
