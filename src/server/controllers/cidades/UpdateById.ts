import { Request, Response } from "express";
import * as yup from "yup";

import { validation } from "../../shared/middlewares";

interface IParamProps {
  id?: number;
}

interface IBodyProps {
  nome: string;
}

export const updateByIdValidation = validation((getSchema) => ({
  params: getSchema<IParamProps>(
    yup.object().shape({
      id: yup.number().integer().required().moreThan(0),
    })
  ),
  body: getSchema<IBodyProps>(
    yup.object().shape({
      nome: yup.string().required().min(3),
    })
  ),
}));

export const updateById = async (
  req: Request<IParamProps, {}, IBodyProps>,
  res: Response
) => {
  if (Number(req.params.id) === 99999)
    return res.status(500).json({
      errors: {
        default: "Registro não encontrado",
      },
    });

  return res.status(204).send();
};
