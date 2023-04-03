import express from "express";

const PORT = 3050

const app = express()

app.get('/hello', (req,res) =>{
    res.send("yo")
})

app.get("/hoody", (req,res) => {
    res.send("i am a hoody")
})


app.listen(PORT,() => {
    console.log(`Listening on http://localhost:${PORT}...`)
})