import knex from "knex";
import { test, production, development } from "./Enviroment";

const getEnv = () => {
  switch (process.env.NODE_ENV) {
    case "prod":
      return production;
    case "test":
      return test;
    default:
      return development;
  }
};

export const Knex = knex(getEnv());
