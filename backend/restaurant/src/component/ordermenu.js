import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import MenuItem from "./menuitem";
import app_action from "../action/action";

class OrderMenu extends React.Component {

    state = {
        menu: []
    }



    async componentDidMount() {

        var api_url = '/menu'
        var menu = await axios.get(api_url)
        console.log(menu.data, "this is menu")
        this.setState({
            menu: menu.data
        })
    }

    render() {

        return (
            <div className="order_menu">
                <div className="form-inline inp_form shadow p-3 mx-5">
                    <input type="text"
                        className="form-control mx-2"
                        placeholder="Customer name"
                        onChange={(event)=>this.props.dispatch(app_action.set_customer_name(event.target.value))}></input>
                    <input type="number"
                        className="form-control mx-2"
                        placeholder="Mobile no"
                        onChange={(event)=>this.props.dispatch(app_action.set_customer_mobile(event.target.value))}></input>
                </div>
                <h3 className="text-center mt-3">Add items</h3>
                <div className="menu_item_box">
                    {this.state.menu.map((item) => <MenuItem item={item}></MenuItem>)}

                </div>
            </div>
        )
    }
}


export default connect()(OrderMenu)