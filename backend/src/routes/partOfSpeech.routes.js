const express= require("express")
const router = express.Router()

const {getRank,getWords} =require('../controllers/partOfSpeech.controller')

router.get("/words", getWords);
router.post("/rank", getRank);



module.exports=router;