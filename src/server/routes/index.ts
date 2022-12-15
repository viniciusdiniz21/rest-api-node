import { Router } from "express";
import { cidadesController } from "../controllers/cidades";

const router = Router();

router.get("/", (req, res) => {
  return res.json({ message: "Hello World" });
});

router.get(
  "/cidades",
  cidadesController.getAllValidation,
  cidadesController.getAll
);

router.get(
  "/cidades/:id",
  cidadesController.getByIdValidation,
  cidadesController.getById
);

router.post(
  "/cidades",
  cidadesController.createValidation,
  cidadesController.create
);

router.put(
  "/cidades/:id",
  cidadesController.updateByIdValidation,
  cidadesController.updateById
);

router.delete(
  "/cidades/:id",
  cidadesController.deleteByIdValidation,
  cidadesController.deleteById
);

export { router };
