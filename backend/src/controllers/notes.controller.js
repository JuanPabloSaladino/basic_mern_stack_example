const notesController = {};

const Note = require('../models/Note');


notesController.getNotes = async (req,res) => {
    const notes = await Note.find();
    res.json(notes);
}

notesController.postNote = async (req,res) => {
    const { title, content, date, author } = req.body;
    const newNote =  new Note ({
        title: title,
        content: content,
        date: date,
        author: author
    });
    await newNote.save();
    res.json({"message" : "POSTED note"});
}

notesController.updateNote = async (req,res) => {
    const { title, content, author } = req.body;

    await Note.findOneAndUpdate(req.params.id, {
        title,
        content,
        author
    });
    res.json({"message" : "UPDATED note"})
};

notesController.deleteNote = async (req,res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json({"message" : "DELETED note"});
}

notesController.getNote = async (req,res) => {
    const note =  await Note.findById(req.params.id);
    res.json(note);
}


module.exports = notesController;