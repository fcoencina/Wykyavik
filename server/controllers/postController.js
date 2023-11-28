
const Post = require("../models/Post");

async function createPost(postAttributes) {
    try {
        const post = await Post.create(postAttributes);
        return post;
    } catch (error) {
        return error;
    }
}

async function updatePost(_id, updatedPostAttributes) {
    try {
        const tryUpdate = await Post.update(
            updatedPostAttributes,
            {
                where: {
                    id: _id
                }
            }
        );

        return tryUpdate;
    } catch (error) {
        return error;
    }
}

async function getPostById(_id) {
    try {
        const post = await Post.findByPk(_id);
        return post;
    } catch (error) {
        return error;
    }
}

async function deletePost(_id) {
    try {
        const tryDelete = await Post.destroy({
            where: {
                id: _id
            }
        });

        return tryDelete;
    } catch (error) {
        return error;
    }
}

async function getPosts() {
    try {
        const posts = await Post.findAll();
        return posts;
    } catch (error) {
        return error;
    }
}

module.exports = {
    createPost,
    updatePost,
    getPostById,
    deletePost,
    getPosts
}
