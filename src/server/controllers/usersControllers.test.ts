import { type Response, type Request, type NextFunction } from "express";
import User from "../../database/models/User";
import { getUsers } from "./usersControllers";

const expectedStatus = 200;

describe("Given a getUsers controller", () => {
  describe("When it receives a response", () => {
    test("Then it should call its status method with 200", async () => {
      const req = {} as Request;
      const res = { status: jest.fn() } as Partial<Response>;
      const next = {} as NextFunction;

      User.find = jest.fn().mockReturnValue({});
      await getUsers(req, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });
  });
});
