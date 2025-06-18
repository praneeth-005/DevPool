const express = require("express");
const app = express();

app.use("/user", (req, res)=>{
    res.send("Hello All!")
})

app.use("/about", (req, res) => {
    res.send("About Page!");
});

app.get("/user", (req, res)=>{
    res.send({firstName: "Praneeth", lastName: "Surapureddy"});
});

app.post("/user", (req, res)=>{
    res.send("Data successfully saved to DB.");
});

app.delete("/user", (req, res)=>{
    res.send("User Deleted");
});



app.listen("3000", () => {
    console.log("Server is succesfully launched and listening for request on port 3000.");
})