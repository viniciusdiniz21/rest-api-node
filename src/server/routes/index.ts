import { Router } from "express";
import { cidadesController } from "../controllers/cidades";

const router = Router();

router.get("/", (req, res) => {
  return res.json({ message: "Hello World" });
});

router.post("/cidades", cidadesController.create);

export { router };
