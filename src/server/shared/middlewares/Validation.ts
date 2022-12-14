import { RequestHandler } from "express";
import { SchemaOf, ValidationError } from "yup";

type TProperty = "body" | "params" | "header" | "query";

type TAllSchemas = Record<TProperty, SchemaOf<any>>;

type TGetSchema = <T>(schema: SchemaOf<T>) => SchemaOf<T>;

type TGetAllSchemas = (getSchema: TGetSchema) => Partial<TAllSchemas>;

type TValidation = (getAllSchemas: TGetAllSchemas) => RequestHandler;

export const validation: TValidation =
  (getAllSchemas) => async (req, res, next) => {
    const schemas = getAllSchemas((schema) => schema);

    const errorsResult: Record<string, Record<string, string>> = {};
    Object.entries(schemas).forEach(([field, schema]) => {
      try {
        schema.validateSync(req[field as TProperty], { abortEarly: false });
      } catch (err) {
        const yupError = err as ValidationError;
        const errors: Record<string, string> = {};

        yupError.inner.forEach((error) => {
          if (error.path === undefined) return;
          errors[error.path] = error.message;
        });
        errorsResult[field] = errors;
      }
    });

    if (Object.entries(errorsResult).length === 0) {
      return next();
    } else {
      return res.status(400).json({ errors: errorsResult });
    }
  };
