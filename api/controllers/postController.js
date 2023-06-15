const { Post: PostModel } = require("../models/post");

const postController = {

    create: async(req, res) => {
        
        try {
            
            const post = {
                title: req.body.title,
                subtitle: req.bady.subtitle,
                image: req.bady.image,
                text: req.bady.text,
                // user: req.bady.user,
            };

            const response = await PostModel.create(post); 
            res.status(201).json({response, msg: "Postagem criada com sucesso!"})

        } catch (error) {
            console.log(error);
        }

    }

};


module.exports = postController;