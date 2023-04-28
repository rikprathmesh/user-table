// importing model from postModles
const Post = require('../models/postModel');

const createPost = async (req, res) => {
    try {
        const post = new Post({
            name: req.body.name,
            address: req.body.address,
            birthdate: req.body.birthdate,
            age: req.body.age,
            image: req.file.filename
        });
        const postData = await post.save();

        res.status(200).send({ success: true, msg: 'post data', data: postData });
        
    } catch (error) {
        // console.log(error);
        res.status(400).send({ success: false, msg: error.message })
    }
}

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find({})
        res.status(200).send({ success: true, msg: 'Posts Data', data: posts })
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message })
    }
}

const deletePost = async (req, res) => {
    try {
        const id = req.params.id;
        await Post.deleteOne({_id: id})
        res.status(200).send({ success: true, msg: 'Posts Deleted Successfully' })
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message })
    }
}

const updatePost = async (req, res) => {
    try {
        if (req.file !== undefined) {
            var id = req.body.id;
            var name = req.body.name;
            var address = req.body.address;
            var birthdate = req.body.birthdate;
            var age = req.body.age;
            var filename = req.file.filename;

            await Post.findByIdAndUpdate({_id: id}, {$set: {name: name, address: address, birthdate: birthdate, age: age, image: filename}})
            res.status(200).send({ success: true, msg: 'Post Updated Successfully' });

        } else {
            var id = req.body.id;
            var name = req.body.name;
            var address = req.body.address;
            var birthdate = req.body.birthdate;
            var age = req.body.age;

            await Post.findByIdAndUpdate({_id: id}, {$set: {name: name, address: address, birthdate: birthdate, age: age }})
            res.status(200).send({ success: true, msg: 'Post Updated Successfully' });
        }
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message })
    }
}

module.exports = {
    createPost,
    getPosts,
    deletePost,
    updatePost
}