import { Router } from "express";
import {
  agregarClientController,
  obtenerClientController,
  sumaLikes,
  deletePost
} from "./controller/postController.js";

export const allRoutes = Router();

allRoutes.get("/posts", obtenerClientController);
allRoutes.post("/posts", agregarClientController);
allRoutes.put("/posts/:id", sumaLikes);
allRoutes.delete("/posts/:id", deletePost);

