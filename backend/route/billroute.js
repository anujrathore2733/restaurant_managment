var express = require('express');
var router = express.Router();
var sequelize = require('sequelize')
var Op = sequelize.Op
var { Db, Bill,Menu } = require('../model/connection')


router.get('/', async (req, res) => {
    var bill_data = await Bill.findAll({include:Menu})
    console.log(bill_data)
    res.status(200).send(bill_data)
})


router.post('/addbill', async (req, res) => {
    console.log(req.body)
    try {
        var bill = await Bill.create({ customer_name: req.body.c_name, customer_mobile: req.body.c_mobile, total_price: req.body.total_price, payment_mode: req.body.pay_mode, waiter_id: req.body.waiter_id, table_id: req.body.table_id })
        await bill.addMenus(req.body.dish_ids)

        res.status(200).send('added successfully')
    } catch (error) {
        console.log('waiter ERR-->', error)
    }
})

router.put('/:id', async (req, res) => {

    try {
        await Bill.update({ customer_name: req.body.c_name, customer_mobile: req.body.c_mobile, total_price: req.body.total_price, payment_mode: req.body.pay_mode, dish_id: req.body.dish_id, waiter_id: req.body.waiter_id, table_id: req.body.table_id }, { where: { id: { [Op.eq]: req.params.id } } })
        console.log('update done')
        res.status(200).send('update done')
    } catch (error) {
        console.log('waiter update ERR-->', error)
    }

})

router.delete('/:id', async (req, res) => {

    try {
        await Bill.destroy({ where: { id: { [Op.eq]: req.params.id } } })
        res.status(200).send('delete done')
    } catch (error) {

    }

})


module.exports = router;