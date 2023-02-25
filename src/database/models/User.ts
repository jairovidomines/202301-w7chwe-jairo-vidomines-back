import { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLenght: 8,
  },
  email: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
});

const User = model("User", userSchema, "users");

export default User;
