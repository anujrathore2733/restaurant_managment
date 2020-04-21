import React from "react";
import { connect } from "react-redux";
import CartItem from "./cartitem";
import app_action from "../action/action";
import axios from "axios";


class Cart extends React.Component {

    state = {
        err: false
    }


    send_bill = async () => {
        if (this.props.state.customer_name === "" || this.props.state.customer_mobile === '' || this.props.state.cart.total_price === 0) {
            this.setState({
                err: true
            })

        }
        else {

            var d_ids = []

            this.props.state.cart.items.forEach(element => {
                d_ids.push(element.item.id)
            });

            var data = {
                c_name: this.props.state.customer_name,
                c_mobile: this.props.state.customer_mobile,
                total_price: this.props.state.cart.total_price,
                pay_mode: "cash",
                dish_ids: d_ids,
                waiter_id: this.props.state.selected_waiter,
                table_id: this.props.state.selected_table
            }
            console.log(data, 'this is data')

            try {
                var send_bill_data = await axios.post('/bill/addbill', data)
                console.log(send_bill_data)
                window.location.href='/done'
            } catch (error) {
                console.log('err in sending bill',error)
            }



        }
    }



    render() {



        return (
            <div className='cart'>
                <h4 className="text-center">Cart</h4>
                <div>
                    <div className="text-center">
                        <h5>Name:{this.props.state.customer_name}</h5>
                        <h5>mobile:{this.props.state.customer_mobile}</h5>
                    </div>
                    <div className="item_display">
                        {this.props.state.cart.items.map((item) => <CartItem item={item}></CartItem>)}
                    </div>
                </div>
                <div className="bill_btn">
                    <button className="btn  btn-outline-success mx-2"
                        onClick={() => this.send_bill()}>Generate Bill For Rs:{this.props.state.cart.total_price}</button>
                    <button className="btn  btn-outline-danger mx-2"
                        onClick={() => this.props.dispatch(app_action.reset_cart())}>Reset Cart</button>
                </div>
            </div>
        )
    }
}

const mapstatetoprop = (state) => {
    return {
        state: state
    }
}

export default connect(mapstatetoprop)(Cart)