const express = require("express");
const mysql = require("mysql");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json({"limit": "10mb"}));
app.use(express.urlencoded({"limit": "10mb", "extended": true}));

const {UserRoutes} = require("./routes/user.js");

app.use("/user", UserRoutes);

app.listen(port, () => console.log("Server listening on port ", port));