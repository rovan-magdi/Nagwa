
//dont use sync code in node.js 
const { readFileSync } = require("fs");
const path= require("path")
const baseURL = path.resolve(__dirname, "..");
let loadWords = () => {
    let TestData = JSON.parse(readFileSync(baseURL+"/data/TestData.json"));
    var wordList = TestData.wordList;
    let arrayObject=[];
  // we can use forEach or just normal for loop it will be better 🙌
    wordList.map((key) => {
      if (
        (wordList.length = 10 || (key.pos == "noun" &&
            key.pos == "adjective" &&
            key.pos == "adverb" &&
            key.pos == "verb"))
      ) {
        //console.log(wordList[Math.floor(Math.random() * wordList.length)])
        var part= wordList[Math.floor(Math.random() * wordList.length)];
        arrayObject.push(part);
      }
  });
    return arrayObject;
  };
  
  module.exports ={loadWords}
