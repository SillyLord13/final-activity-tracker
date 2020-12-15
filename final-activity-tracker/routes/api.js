let express = require('express')
let Sequelize = require('sequelize')
let db = require('../models')
let Activity = db.Activity

let router = express.Router()

router.get('/activity',function (req,res,next) {
    Activity.findAll().then(activities => {
        return res.json(activities)
    }).catch(err => next(err))
})

router.post('/activity',function (req,res,next) {
    Activity.create(req.body).then((data)=>{
        return res.status(201).send('ok')
    }).catch(next(err))
})

module.exports = router
