const { readFileSync } = require("fs");
const path= require("path")
const baseURL = path.resolve(__dirname, "..");
let rankFun = (value) => {
    let TestData = JSON.parse(readFileSync(baseURL+"/data/TestData.json"));
    var scoresList = TestData.scoresList;
    var countScores, belowValue, Percentile;
    scoresList.sort((a, b) => a - b);
    // Total Number of Values
    countScores = scoresList.length;
    // Number of scores below of value
    belowValue = scoresList.indexOf(value);
    //Percentile = (Number of Values Below “x” / Total Number of Values) × 100
    Percentile = (belowValue / countScores) * 100;
    console.log(Percentile);
    // console.log(scoresList);
    return Percentile;
  };
// module.exports = (params) => {
//     rankFun(params)
//  }
module.exports=rankFun
