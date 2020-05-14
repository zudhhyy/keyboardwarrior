const { Game } = require('../models')

class gameController{

    static getGames(req, res){
        Game.findAll()
        .then( data => {
            res.status(200).json(data)
        })
        .catch( err => {
            res.status(500).json(err)
        })
    }

    static createGame(req, res){
        const { is_started, player_count } = req.body
        if(is_started == undefined || player_count == undefined){
            res.status(400).json({message: "BAD_REQUEST"})
        } else {
            Game.create({
                is_started,
                player_count
            })
            .then( data => {
                res.status(201).json(data)
            })
            .catch( err => {
                res.status(500).json(err)
            })
        }

    }

    static updateGame(req, res){
        const { is_started, player_count } = req.body

        Game.update({
            is_started,
            player_count
        },{
            where: {id: req.params.id}
        })
        .then( data => {
            res.status(200).json(data)
        })
        .catch( err => {
            res.status(500).json(err)
        })
    }

    static deleteGame(req, res){
        Game.destroy({
            where: {id: req.params.id}
        })
        .then( data => {
            res.status(200).json(data)
        })
        .catch( err => {
            res.status(500).json(err)
        })
    }

}

module.exports = gameController