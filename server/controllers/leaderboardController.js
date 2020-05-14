const { Leaderboard } = require('../models')


class LeaderboardController {

  static fetchData (req,res){
    Leaderboard.findAll({ order: [["id", "ASC"]] })
    .then(data=>{
      res.status(200).json(data)
    })
    .catch(err=>{
      res.status(500).json(err)
    })
  }

  static createData (req,res){
    const {username, score} = req.body
    Leaderboard.create({
      username,
      score
    })
    .then(data=>{
      res.status(201).json(data)
    })
    .catch(err=>{
      res.status(500).json(err)
    })
  }

}

module.exports = LeaderboardController