var express = require('express');
var router = express.Router();
var sequelize = require('sequelize')
var Op = sequelize.Op
var { Db, Waiters } = require('../model/connection')


router.get('/', async (req, res) => {
    var waiter_data = await Waiters.findAll()
    console.log(waiter_data)
    res.status(200).send(waiter_data)

})


router.post('/addwaiter', async (req, res) => {
    console.log(req.body.name)
    try {
        await Waiters.create({ name: req.body.name, age: req.body.age, mobile: req.body.mobile, rating: req.body.rating, exprience_in_year: req.body.exp })
        res.status(200).send('added successfully')
    } catch (error) {
        console.log('waiter ERR-->', error)
    }
})

router.put('/:id', async (req, res) => {

    try {
        await Waiters.update({ name: req.body.name, age: req.body.age, mobile: req.body.mobile, rating: req.body.rating, exprience_in_year: req.body.exp }, { where: { id: { [Op.eq]: req.params.id } } })
        console.log('update done')
        res.status(200).send('update done')
    } catch (error) {
        console.log('waiter update ERR-->', error)
    }

})

router.delete('/:id', async (req, res) => {

    try {
        await Waiters.destroy({ where: { id: { [Op.eq]: req.params.id } } })
        res.status(200).send('delete done')
    } catch (error) {

    }

})


module.exports = router;