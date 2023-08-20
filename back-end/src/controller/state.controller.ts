import { Request, Response } from "express";
import dataSource from "../app-data-source";
import { State } from "../entity/state.entity";

const stateRepository = dataSource.getRepository(State);

export const getStates = async (req: Request, res: Response) => {
  return stateRepository.find();
};
  