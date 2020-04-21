var express = require('express');
var router = express.Router();
var sequelize = require('sequelize')
var Op = sequelize.Op
var { Db, Menu } = require('../model/connection')


router.get('/', async (req, res) => {
    var menu_data = await Menu.findAll()
    console.log(menu_data)
    res.status(200).send(menu_data)

})


router.post('/addmenu', async (req, res) => {
    console.log(req.body.name)
    try {
        await Menu.create({ dish_name: req.body.name, cuisine_name: req.body.c_name, dish_type: req.body.dish_type, price: req.body.price })
        res.status(200).send('added successfully')
    } catch (error) {
        console.log('waiter ERR-->', error)
    }
})

router.put('/:id', async (req, res) => {

    try {
        await Menu.update({ dish_name: req.body.name, cuisine_name: req.body.c_name, dish_type: req.body.dish_type, price: req.body.price }, { where: { id: { [Op.eq]: req.params.id } } })
        console.log('update done')
        res.status(200).send('update done')
    } catch (error) {
        console.log('waiter update ERR-->', error)
    }

})

router.delete('/:id', async (req, res) => {

    try {
        await Menu.destroy({ where: { id: { [Op.eq]: req.params.id } } })
        res.status(200).send('delete done')
    } catch (error) {

    }

})


module.exports = router;