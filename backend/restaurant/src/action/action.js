var app_action = {}


app_action.select_table = (data)=>{
    return{
        type:"select_table",
        data:data
    }
}

app_action.select_waiter = (data)=>{
    return{
        type:"select_waiter",
        data:data
    }
}

app_action.add_to_cart = (data)=>{
    return{
        type:"add_to_cart",
        data:data
    }
}

app_action.reset_cart = ()=>{
    return{
        type:'reset_cart'
    }
}

app_action.generate_bill = ()=>{
    return{
        type:'gen_bill'
    }
}

app_action.set_customer_name = (data)=>{
    return{
        type:"set_customer_name",
        data:data
    }

}

app_action.set_customer_mobile = (data)=>{
    return{
        type:'set_customer_mobile',
        data:data
    }
}

export default app_action