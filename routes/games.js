var express =require('express');
var router = express.Router();
const Game = require ('../models/Game');

router.get('/games', function (req, res, next){
    Game.findAll()
    .then(games =>{
        res.json(games)
        console.log("We Have Ignition");
    })
    .catch(err=>{
        res.send("error : " +err)}
    )})

    router.get('/games/:id', function (req, res, next){
        Game.findOne({where:{id: req.params.id}})
        .then(game =>{
            if(game){
            res.json(game)
            }else{
            res.send('Game does not exist')
            }
        })
        .catch(err=>{
            res.send("error : " +err)}
        )})

    router.post('/games', function (req,res,next){
        if(!req.body.gameName){
            res.status(400)
            res.json({error: 'Bad Data'})
        }else{
            Game.create(req.body).then(data =>{
                res.send(data)
            })
            .catch(err =>{
                res.json('error: '+ err)
            })
        }
    })

    router.delete('/games/:id', function (req,res,next){
        Game.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(()=>{
            res.json({status: 'Game deleted'})
        })
        .catch(err =>{
            res.send('error: '+err)
        })
    })

    router.put('/game/:id', function(req,res,next){
        if(!req.body.gameName){
            res.status(400)
            res.json({
                error: 'Bad Data'
            })
        }else{
            Game.update(
            {gameName: req.body.gameName},
            {where: {id: req.params.id}}
        )
        .then(()=>{
            res.json({status: 'Game Updated'})
        })
        .error(err => handleError(err))
    }
    })
    module.exports = router;
