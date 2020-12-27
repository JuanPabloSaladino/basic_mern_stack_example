const express = require('express');
const router = express.Router();

const { getUsers, postUser, deleteUser, getUser, updateUser} = require('../controllers/users.controller');

router.route('/')
    .get(getUsers)
    .post(postUser)

router.route('/:id')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser)

module.exports = router;