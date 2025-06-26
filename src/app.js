const express = require('express');

const app = express();

app.get("/user",(req,res) => {
    res.send({firstName : 'Shruti', lastName: "Agrawal"})
});

app.post("/user",(req,res) => {
    res.send("Data save successfully")
})

app.delete("/user",(req,res) => {
    res.send("Delete save successfully")
})


app.use("/test",(req,res) => {
    res.send("Hello form the server!")
})

app.listen(3000,() =>{
    console.log('Server is successfully listening on port 3000');
});
