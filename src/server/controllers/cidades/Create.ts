import { Request, Response } from "express";

export const create = async (req: Request, res: Response) => {
  const data = req.body;

  return res.json(data);
};
