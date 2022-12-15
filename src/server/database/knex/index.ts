import knex from "knex";
import { dev, test, prod } from "./Enviroment";

const getEnv = () => {
  switch (process.env.NODE_ENV) {
    case "prod":
      return prod;
    case "test":
      return test;
    default:
      return dev;
  }
};

export const Knex = knex(getEnv());
