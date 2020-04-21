import { createStore } from "redux";

let init_state = {
    selected_table:0,
    selected_waiter:0,
    customer_name:'',
    customer_mobile:'',
    cart:{
        items:[],
        total_price:0
    }
}




const appreducer = (state=init_state,action)=>{
    var statecopy = {...state}
    console.log(action,"this is action ====>")
    switch(action.type){

        case "select_table":
            statecopy.selected_table=action.data
            return statecopy

        case "select_waiter":
            statecopy.selected_waiter=action.data
            return statecopy

        case "add_to_cart":
            var item = {
               item: action.data.item_id,
               quantity:action.data.quantity
            }
            statecopy.cart.items.push(item)
            statecopy.cart.total_price = parseInt(statecopy.cart.total_price) + (parseInt(action.data.item_id.price)* parseInt(action.data.quantity))
            console.log(statecopy,'this is before addcart')
            return statecopy

        case "set_customer_mobile":
            statecopy.customer_mobile = action.data
            return statecopy

        case "set_customer_name":
            statecopy.customer_name = action.data
            return statecopy

        case "reset_cart":
            statecopy.cart.items=[]
            statecopy.cart.total_price=0
            return statecopy


        default:
            return statecopy
    }
}

const store = createStore(appreducer)

export default store