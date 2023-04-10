import express from "express"
const router = express.Router();
import NoteController from "../controllers/noteControllers.js";
import Note from "../models/note.js";

// function hello(req,res)
// {
//     res.send("HOLA")
// }

router.get("/",NoteController.home);
router.post("/notes",NoteController.addNote);
router.get("/notes",NoteController.getNotes);
router.get("/notes/:id",NoteController.getOneNote);
router.put("/notes/:id",NoteController.updateOneNote);
router.delete("/notes/:id",NoteController.deleteOneNote);


export default router;