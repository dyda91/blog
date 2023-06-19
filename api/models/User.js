const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
    {
        "username": {
            type: String,           
            unique: true,            
            lowercase: true,
            required: true,
        },
        "email": {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        "password": {
            type: String,
            required: true,
            select: false
        },
    }
    
)

userSchema.pre("save", async function (next) {
    const hash = await bcrypt.hash(this.password, 12);
    this.password = hash
    next()
},

{ timestamps: true},

)

const User = mongoose.model('users', userSchema);

module.exports = {
    User,
    userSchema,
}