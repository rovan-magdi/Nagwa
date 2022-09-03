const { loadWords } = require("../utils/words_model");
const rankFun=require('../utils/rank_model')


const getWords = (req, res) => {
     res.status(200).json({words:loadWords()})
  }

const getRank =(req, res) => {
    const { score } = req.body;
    const rank=  rankFun(score);
    return res.status(200).json({rank:rank})
  }

  module.exports={getWords, getRank}