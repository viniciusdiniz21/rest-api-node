import { Request, Response } from "express";
import * as yup from "yup";
import { cidadesProvider } from "../../database/providers/cidades";

import { validation } from "../../shared/middlewares";

interface IParamProps {
  id?: number;
}

export const getByIdValidation = validation((getSchema) => ({
  params: getSchema<IParamProps>(
    yup.object().shape({
      id: yup.number().integer().required().moreThan(0),
    })
  ),
}));

export const getById = async (req: Request<IParamProps>, res: Response) => {
  if (!req.params.id)
    return res.status(400).json({
      errors: {
        default: "Id não informado",
      },
    });

  const result = await cidadesProvider.getById(Number(req.params.id));

  if (result instanceof Error) {
    return res.status(500).json({
      errors: {
        default: result.message,
      },
    });
  }

  return res.status(200).json(result);
};
