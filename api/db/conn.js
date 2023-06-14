const mongoose = require ("mongoose")


async function main() {

    try {

        await mongoose.connect("mongodb+srv://dyda91:dida1991@cluster0.vhmi21z.mongodb.net/?retryWrites=true&w=majority")

        console.log("Conectado ao banco")

    } catch (error){
        console.log(`Error: ${error}`)
    }
}

module.exports = main