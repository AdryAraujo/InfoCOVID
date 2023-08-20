import { Request, Response } from "express";
import dataSource from "../app-data-source";
import { City } from "../entity/city.entity";

const cityRepository = dataSource.getRepository(City);

export const getCitiesByState = (req: Request, res: Response) => {
  const state: string = req.params.state;
  return cityRepository.findOne({
    where: { 
      state: { state } 
    }
  });
}
