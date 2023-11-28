
//Dependencias
const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config({ path: "./config.env" });

//connection
const {testConnection, syncDatabase} = require("./bd/db");
//associations
require("./bd/associations");

app.use(cors());
app.use(express.json());

//routes
app.use(require("./routes/login"));
app.use(require("./routes/signUp"));
const routerPost = require("./routes/post");
app.use("/post", routerPost);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
    console.log(`http://localhost:${PORT}`);
    testConnection();
    syncDatabase();
});

