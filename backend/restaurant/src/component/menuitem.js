import React from "react";
import app_action from "../action/action";
import { connect } from "react-redux";


class MenuItem extends React.Component {


    state = {
        quantity: 1
    }

    dec_qun = () => {

        if (this.state.quantity > 1) {
            this.setState({

                quantity: this.state.quantity - 1
            })
        }


    }

    inc_qun = () => {
        this.setState({
            quantity: this.state.quantity + 1
        })

    }



    render() {

        return (
            <div className="menuitem shadow rounded">
                <h5>{this.props.item.dish_name}</h5>
                <h5>Rs:{this.props.item.price}</h5>
                <div className="qun">
                    <h6 className="mt-3 ml-4"><b>Quantity:</b></h6>
                    <button className="btn btn-sm"
                        onClick={() => this.dec_qun()}>
                        <i class="fa fa-minus"></i>
                    </button>
                    <span class="badge badge-secondary bg mx-1">{this.state.quantity}</span>
                    <button className="btn btn-sm"
                        onClick={() => this.inc_qun()}>
                        <i class="fa fa-plus"></i>
                    </button>
                </div>
                <div className="d-flex mr-3">
                    <h6 className="mt-3 ml-4"><b>Buy:</b></h6>
                    <button className="btn btn-sm"
                        onClick={() => this.props.dispatch(app_action.add_to_cart({item_id:this.props.item,quantity:this.state.quantity}))}>
                        <i class="fa fa-shopping-cart crt"></i>
                    </button>
                </div>
            </div>
        )
    }
}


export default connect()(MenuItem);