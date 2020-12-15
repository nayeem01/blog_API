const User = require("../model/user");

exports.getUser = async (req, res) => {
    try {
        let user = User.find();
        const users = await user;

        res.status(200).json({
            success: true,
            count: users.length,
            data: users,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false });
    }
};
exports.newUser = async (req, res) => {
    try {
        const user = await User.create(req.body);

        res.status(201).json({
            success: true,
            data: user,
        });
    } catch (error) {
        res.status(400).json({ success: false });
    }
};
exports.getUserbyID = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        res.status(200).json({
            success: true,
            data: user,
        });
    } catch (error) {
        res.status(400).json({ success: false });
    }
};
exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({
            success: true,
            data: user,
        });
    } catch (error) {
        res.status(400).json({ success: false });
    }
};
exports.removeUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success: true,
            data: {},
        });
    } catch (error) {
        res.status(400).json({ success: false });
    }
};
