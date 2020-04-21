import React from "react";
import { connect } from "react-redux";


class CartItem extends React.Component {



    render() {


        return (
            <div className="cart_item rounded shadow">
                <h4>{this.props.item.item.dish_name}</h4>
                <h4>{this.props.item.quantity}X{this.props.item.item.price}={this.props.item.quantity * this.props.item.item.price}</h4>

            </div>
        )
    }
}

export default connect()(CartItem)