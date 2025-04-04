import { Router } from "express";
import {
  agregarClientController,
  obtenerClientController,
  likePost,
  deletePost
} from "./controller/postController.js";

export const allRoutes = Router();

allRoutes.get("/posts", obtenerClientController);
allRoutes.post("/posts", agregarClientController);
allRoutes.put("/posts/like/:id", likePost);
allRoutes.delete("/posts/:id", deletePost);

