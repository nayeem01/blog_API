const Post = require("../model/post");

exports.getPost = async (req, res) => {
    //console.log(req.query);
    if (req.query) {
        try {
            let post = Post.find(req.query);
            const posts = await post;

            res.status(200).json({
                success: true,
                count: posts.length,
                data: posts,
            });
        } catch (error) {
            console.log(error.message);
            res.status(400).json({ success: false });
        }
    } else {
        try {
            let post = Post.find();
            const posts = await post;

            res.status(200).json({
                success: true,
                count: posts.length,
                data: posts,
            });
        } catch (error) {
            console.log(error);
            res.status(400).json({ success: false });
        }
    }
};
exports.newPost = async (req, res) => {
    try {
        const post = await Post.create(req.body);

        res.status(201).json({
            success: true,
            data: post,
        });
    } catch (error) {
        res.status(400).json({ success: false });
    }
};
exports.getPostID = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        res.status(200).json({
            success: true,
            count: post.length,
            data: post,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false });
    }
};
exports.updatePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({
            success: true,
            data: post,
        });
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ success: false });
    }
};
exports.removePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success: true,
            data: {},
        });
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ success: false });
    }
};
