import {
  create,
  findAll,
  findAllPublished,
  findOne,
  update,
  remove,
  deleteAll,
} from "../controllers/tutorial.controller.js";
import { Router } from "express";

const router = Router();

// Create a new Tutorial
router.post("/", create);
// Retrieve all Tutorials
router.get("/", findAll);
// Retrieve all published Tutorials
router.get("/published", findAllPublished);
// Retrieve a single Tutorial with id
router.get("/:id", findOne);
// Update a Tutorial with id
router.put("/:id", update);
// Delete a Tutorial with id
router.delete("/:id", remove);
// Delete all Tutorials
router.delete("/", deleteAll);

export default router;
