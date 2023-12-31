const asyncHandler = require("express-async-handler");
const notes = require("../data/notes");
const Note = require("../models/noteModel");
 
const getNotes = asyncHandler(async (req, res) => {
  const notes = await Note.find({user:req.user._id});
  res.json(notes);
});

const createNote = asyncHandler(async (req, res) => {
  const { title, content, category ,pic} = req.body;
  if (!title || !content || !category || !pic) {
    res.status(400);
    throw new Error("Please fill all the fields");
  } else {
    const note = new Note({ user: req.user._id, title, content, category,pic });
    const createdNote = await note.save();
    res.status(201).json(createdNote);
  }
});

const getNoteById = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);
  if (note) {
    res.json(note);
  } else {
    res.status(404).json({ message: "Note not found" });
  }

  res.json(note);
});

const UpdateNote = asyncHandler(async (req, res) => {
  const { title, content, category,pic } = req.body;

  const note = await Note.findById(req.params.id);
  if (note.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (note) {
    note.title = title;
    note.content = content;
    note.category = category;
    note.pic = pic;
    const updatedNote = await note.save();
    res.json(updatedNote);
  } else {
    res.status(400);
    throw new Error("Note not found ");
  }
});

const DeleteNote = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);
  if (note.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (notes) {
    await note.remove();
    res.json({ message: "Note Removed" });
  } else {
    res.status(404);
    throw new Error("Note not found");
  }
});
module.exports = { getNotes, createNote, getNoteById, UpdateNote,DeleteNote };
