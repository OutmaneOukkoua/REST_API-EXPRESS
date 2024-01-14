import express, { request, response } from "express";
import {AllPersonnes,PersonneByCIN,SupprimerPesronne,AjouterPersonne,ModifierPersonne} from "./Actions.js"
const router = express.Router();

router.get("/", AllPersonnes);
router.get("/:cin", PersonneByCIN);
router.delete("/:cin", SupprimerPesronne);
router.post("/", AjouterPersonne);
router.patch("/:cin", ModifierPersonne);
export default router;