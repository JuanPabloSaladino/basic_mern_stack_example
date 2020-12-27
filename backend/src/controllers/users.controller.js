const usersController = {};

const User = require('../models/User');

usersController.getUsers = async (req,res) => {
    const users = await User.find();
    res.json(users);
};

usersController.postUser = async (req,res) => {
    const { username } = req.body;

    const newUser = new User({
        username
    });

    await newUser.save();

    res.json({"message" : "POSTED user"});
}

usersController.deleteUser = async (req,res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({"message" : "DELETED user"});
}

usersController.updateUser = async (req,res) => {
    const { username } = req.body;

    await User.findOneAndUpdate(req.params.id, {
        username
    })

    res.json({"message" : "UPDATED user"});
}

usersController.getUser = async (req,res) => {
    const user = await User.findById(req.params.id)
    res.json(user);
}

module.exports = usersController;