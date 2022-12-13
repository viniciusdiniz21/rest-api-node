import { Request, Response } from "express";

interface ICidade {
  nome: string;
}

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
  const nome = req.body;
  return res.json(nome);
};
