const { User } = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt =  require("jsonwebtoken");

class AuthController {

    static gerarToken(param) {
        return jwt.sign(param, process.env.API_SECRET, {
            expiresIn: 86400
        })
        
    }

    static userRegister = async(req,res) => {
        const {username, email, password } = req.body;
        console.log(req.body)

        const possibleUser = await User.findOne({username})
        const possibleEmail = await User.findOne({email})
        if (possibleUser)
            return res.status(400).send({error: "Usuário com e-mail já cadastrado!"})
        if(possibleEmail)
            return res.status(400).send({error: "Username já em uso!"})

        const user = await User.create({username, email, password})
        user.password = undefined;
        return res.status(200).send(
            {"message": "Usuário cadastrado com sucesso!",
            user
        })
    }

    static auth = async (req,res)=> {
        const {username, password} = req.body;

        const user = await User.findOne({username}).select("+password")


        if (!user)
            return res.status(400).send({error: "Usuário não encontrado!"})

        const aSenhaEhIgual = await bcrypt.compare(password, user.password)

        if (!aSenhaEhIgual)
            return res.status(400).send({error: "Senha Invalida!"})  

        user.password = undefined;
        return res.status(200).send({
            user, 
            token: this.gerarToken({id: user.id }),
        })
        


    }
}



module.exports = AuthController;