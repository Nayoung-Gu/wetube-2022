import express from "express";
import { registeriew, createComment } from "../controllers/videoController";

const apiRouter = express.Router();

apiRouter.post("/videos/:id([0-9a-f]{24})/view", registeriew);
apiRouter.post("/videos/:id([0-9a-f]{24})/comment", createComment);

export default apiRouter;