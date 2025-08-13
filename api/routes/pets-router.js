import express from "express";

const router = express.Router();
// import contoller
import petsController from "../controllers/pets-controller.js";

// add routes
router.get("/", petsController.getPets);

router.get("/:id", petsController.getPet);

export default router;
