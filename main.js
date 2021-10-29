const express = require("express")
const router = require("./routes/Jokes_api")
const app = express()
var cors = require("cors");

// create a write stream (in append mode)

app.use(cors());
app.get("/api" , (req ,res) => {
    res.send('hello ! ')
})


app.use(router)

const port = process.env.PORT || 3000

app.listen(port, () => console.log("app is ready at " + port))