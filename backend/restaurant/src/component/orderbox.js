import React from "react";
import { connect } from "react-redux";
import Ordermenu from "./ordermenu";
import Cart from "./cart";


class OrderBox extends React.Component{



    render(){

        return(
            <div className="order_box">
                <Ordermenu></Ordermenu>
                <Cart></Cart>
            </div>
        )
    }
}


export default connect()(OrderBox)