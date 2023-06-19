const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv-safe')
const app = express();

dotenv.config();
app.use(cors());

app.use(express.json());

//DB connection

const conn = require("./db/conn");
conn();

//Routes

const routes = require("./routes/router");
app.use("/api", routes);

app.listen(3000, function(){
    console.log("servidor Online!");
});