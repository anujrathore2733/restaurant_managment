const Sequelize = require('sequelize')


const Db = new Sequelize('myrestaurant','postgres','anuj2901',{
    host:'localhost',
    dialect:'postgres'
})


try {
    Db.authenticate().then(()=>{
        console.log('connection successfull')
    })
} catch (error) {
    console.log('connection ERR===>',error)
}




const Tables = Db.define('tables',{
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    no_of_seat:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    Floor_no:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
})

const Waiters = Db.define('waiters',{
    name:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    age:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    mobile:{
        type:Sequelize.BIGINT(11),
    },
    rating:{
        type:Sequelize.INTEGER,
    },
    exprience_in_year:{
        type:Sequelize.INTEGER,
    }

})

const Menu = Db.define('menu',{
    dish_name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    cuisine_name:{
        type:Sequelize.STRING
    },
    dish_type:{
        type:Sequelize.STRING,
        allowNull:false
    },
    price:{
        type:Sequelize.FLOAT,
        allowNull:false
    }
})

const Bill = Db.define('bills',{
    customer_name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    customer_mobile:{
        type:Sequelize.BIGINT(11),
        allowNull:false
    },
    total_price:{
        type:Sequelize.FLOAT,
        allowNull:false
    },
    payment_mode:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

// defining relations between tables

Bill.belongsToMany(Menu,{through:'billmenu'})
Menu.belongsToMany(Bill,{through:'billmenu'})



Waiters.hasMany(Bill,{
    foreignKey:'waiter_id'
})
Bill.belongsTo(Waiters,{
    foreignKey:'waiter_id'
})



Tables.hasMany(Bill,{
    foreignKey:'table_id'
})
Bill.belongsTo(Tables,{
    foreignKey:'table_id'
})


try {
    Db.sync().then(()=>{
        console.log('tables synchronised')
    })    
} catch (error) {
    console.log('table sync ERR==>',error)
}


module.exports = {Db:Db,Bill:Bill,Tables:Tables,Waiters:Waiters,Menu:Menu}
