const express = require("express");
const app = express();

app.use("/test", (req, res) => {
    res.send("Hello!");
});

app.use((req, res) => {
    res.send("Welcome to server world!");
});

app.listen("3000", () => {
    console.log("Server is succesfully launched and listening for request on port 3000.");
})