const express = require("express");
const router = express.Router();
const {
    getPost,
    newPost,
    getPostID,
    updatePost,
    removePost,
} = require("../controllers/PostController");

router.route("/").get(getPost).post(newPost);
router.route("/:id").get(getPostID).put(updatePost).delete(removePost);

module.exports = router;
