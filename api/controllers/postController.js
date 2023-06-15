const Post = require("../models/post");

const PostController = {

    create: async(req, res) => {
        
        try {
            
            const post = {
                title: req.body.title,
                subtitle: req.body.subtitle,
                image: req.body.image,
                text: req.body.text,
                // user: req.body.user,
            };
            
            const response = await Post.create(post); 
            console.log(response)
            res.status(201).json({response, msg: "Postagem criada com sucesso!"});
            
        } catch (error) {
            console.log(error);
        }
    }

    

};


module.exports = PostController;