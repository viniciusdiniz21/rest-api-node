import { Request, Response } from "express";
import * as yup from "yup";

import { validation } from "../../shared/middlewares";

interface ICidade {
  nome: string;
}

export const createValidation = validation((getSchema) => ({
  body: getSchema<ICidade>(
    yup.object().shape({
      nome: yup.string().required().min(3),
    })
  ),
}));

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
  return res.status(201).json(1);
};
