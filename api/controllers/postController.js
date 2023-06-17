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
    },

    getAll: async (req, res) => {

        try {
            const post = await Post.find();

            res.json(post);

        } catch (error) {
            console.log(error)  ;          
        }
    },

    get: async(req, res) => {

        try {
            
            const id = req.params.id;
            const post = await Post.findById(id);

            if(!post) {
                res.status(404).json({msg: "Postagem não encontrada"});
                return;
            }

            res.json(post);
            

        } catch (error) {
            console.log(error);
        }
    },

    delete: async(req, res) => {

        try {
            
            const id = req.params.id

            const post = await Post.findById(id);

            if(!post) {
                res.status(404).json({msg: "Postagem não encontrada"});
                return;
            }


            const deletePost = await Post.findByIdAndDelete(id);

            res.status(200).json({deletePost, msg: "Postagem deletada com sucesso!"})

        } catch (error) {
            
            console.log(error);

        }
    },

    update:  async(req, res) => {

        const id = req.params.id

        const post = {
            title: req.body.title,
            subtitle: req.body.subtitle,
            image: req.body.image,
            text: req.body.text,
            // user: req.body.user,
        };

        const updatePost = await Post.findByIdAndUpdate(id, post);

        if(!updatePost) {
            res.status(404).json({msg: "Postagem não encontrada"});
            return;
        }

        res.status(200).json({Post, msg: "Postagem atualizada com sucesso!"})

    }
    

};


module.exports = PostController;