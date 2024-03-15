const express = require('express');
const app = express();
// const cors = require('cors');
// require('dotenv').config();

// app.use(cors);
app.use(express.json());

app.use("/api", require("./router/auth"));
app.use("/api", require("./router/user"));


const port = 4000;
app.listen(port, () => {
    console.log(`http://localhost:${ port }`);
})