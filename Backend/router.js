import { Router } from "express";
import {
  agregarClientController,
  obtenerClientController,
} from "./controller/postController.js";

export const allRoutes = Router();

allRoutes.get("/posts", obtenerClientController);
allRoutes.post("/posts", agregarClientController);

