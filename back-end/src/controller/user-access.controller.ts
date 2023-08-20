import { Request, Response } from "express";
import dataSource from "../app-data-source";
import { UserAccess } from "../entity/user-access.entity";

const userAccessRepository = dataSource.getRepository(UserAccess);

export const getUsersAccesses = (req: Request, res: Response) => {
  return userAccessRepository.find();
};
  