import Note from "../models/note.js";

class NoteController {

    static home(req,res)
    {
        res.send("HOME");
    }

    static async addNote(req,res)
    {
        const title = req.body.title
        const body = req.body.body

        const note = new Note({
            title:title,
            body:body
        })
        
        res.json({note:note})
        
        await note.save()
        
        
    }

    static async getNotes(req,res)
    {

        const allNotes = await Note.find()

        res.json({allNotes:allNotes})
    }

    static async getOneNote(req,res)
    {
        const id = req.params.id
        
        const oneNote = await Note.findById(id)

        res.json(oneNote)
        
    }

    static async updateOneNote(req,res)
    {
        
        const id = req.params.id
        const title = req.body.title
        const body = req.body.body
        await Note.findByIdAndUpdate(id,
            {
                title: title,
                body: body
            }
        
        )

        const noteUpdated = await Note.findById(id);

        res.json(noteUpdated);
    }

    static async deleteOneNote(req,res)
    {
        const id = req.params.id;

        await Note.findByIdAndDelete(id);

        res.json({success:"RECORD WITH ID:" + id + " DELETED"} )
    }

}


export default NoteController