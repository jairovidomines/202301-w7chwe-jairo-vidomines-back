import request from "supertest";
import { MongoMemoryServer } from "mongodb-memory-server";
import connectDatabase from "../database/connectDatabase";
import mongoose from "mongoose";
import User from "../database/models/User";
import { type UserCredentialsStructure } from "../types";
import { app } from "../server/app";

let server: MongoMemoryServer;

beforeAll(async () => {
  server = await MongoMemoryServer.create();
  await connectDatabase(server.getUri());
});

afterAll(async () => {
  await User.deleteMany();
});

afterAll(async () => {
  await server.stop();
  await mongoose.connection.close();
});

const mockUser: UserCredentialsStructure = {
  username: "Jairo",
  email: "jairo@gmail.com",
  password: "1020304050",
  avatar: "image.jpg",
};

describe("Given a POST '/socialapp/create' endpoint", () => {
  describe("When it receives a request to create a user with username: Jairo, email: jairo@gmail.com, password: 1020304050 and avatar: image.jpg", () => {
    test("Then it should respond with a status method 201", async () => {
      const expectedStatus = 201;
      const endpoint = "/socialapp/create";

      const response = await request(app)
        .post(endpoint)
        .send(mockUser)
        .expect(expectedStatus);

      expect(response.body).toHaveProperty("username", mockUser.username);
    });
  });
});
