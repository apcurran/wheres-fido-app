import express from "express";

const router = express.Router();
// import contoller
import petsController from "../controllers/pets-controller";

// add routes
router.get("/", petsController.getPets);

export default router;
