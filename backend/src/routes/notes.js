const { Router } = require('express');
const express = require('express');
const router = express.Router();

const { getNotes, postNote, updateNote, deleteNote, getNote } = require('../controllers/notes.controller');

router.route('/')
    .get(getNotes)
    .post(postNote)

router.route('/:id')
    .get(getNote)
    .put(updateNote)
    .delete(deleteNote)

module.exports = router;