const { Word } = require('../models')

class WordController {
  static fetchData (req,res){
    Word.findAll()
    .then(data=>{
      res.status(200).json(data)
    })
    .catch(err=>{
      res.status(500).json(err)
    })
  }
}

module.exports = WordController