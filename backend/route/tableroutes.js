var express = require('express');
var router = express.Router();
var sequelize = require('sequelize')
var Op = sequelize.Op
var {Db,Tables} = require('../model/connection')



router.get('/',async(req,res)=>{
    console.log('i am hit')
    var table_data = await Tables.findAll()
    res.send(table_data)
    
})


router.post('/addtable',async(req,res)=>{
    console.log(req.body.name)
    var table = await Tables.create({name:req.body.name,no_of_seat:req.body.seat,Floor_no:req.body.Floor_no})
    res.status(200).send('added successfully')
})

router.put('/:id',async(req,res)=>{
    var table = await Tables.update({name:req.body.name,no_of_seat:req.body.seat,Floor_no:req.body.Floor_no},{where:{id:{[Op.eq]:req.params.id}}})
    console.log('update done')
    res.sendStatus(200).send('update done')

})

router.delete('/:id',async(req,res)=>{
    await Tables.destroy({where:{id:{[Op.eq]:req.params.id}}})
    res.sendStatus(200).send('update done')

})


module.exports = router;