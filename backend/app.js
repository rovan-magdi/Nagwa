const express = require("express");
var cors = require('cors')
const app = express();
const partOfSpeechRouter= require("./src/routes/partOfSpeech.routes")
// use is middleware call before any request 
app.use(cors())
app.use(express.json());
app.use("/",partOfSpeechRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));
 