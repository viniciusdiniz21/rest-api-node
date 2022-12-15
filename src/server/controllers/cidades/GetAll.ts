import { Request, Response } from "express";
import * as yup from "yup";

import { validation } from "../../shared/middlewares";

interface IQueryProps {
  page?: number;
  limit?: number;
  filter?: string;
}

export const getAllValidation = validation((getSchema) => ({
  query: getSchema<IQueryProps>(
    yup.object().shape({
      page: yup.number().integer().notRequired().moreThan(0),
      limit: yup.number().integer().notRequired().moreThan(0),
      filter: yup.string().notRequired(),
    })
  ),
}));

export const getAll = async (
  req: Request<{}, {}, {}, IQueryProps>,
  res: Response
) => {
  console.log(req.query);
  res.setHeader("access-control-expose-headers", "x-total-count");
  res.setHeader("x-total-count", 1);

  return res.status(200).json([
    {
      id: 1,
      nome: "Caxias do Sul",
    },
  ]);
};
