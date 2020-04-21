import React from "react";
import axios from "axios";
import EachWaiter from "./eachwaiter";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class WaiterBox extends React.Component {

    state = {
        waiter_data: []
    }

    async componentDidMount() {

        var api_url = '/waiter'
        var waiter_data = await axios.get(api_url)
        console.log(waiter_data.data)
        this.setState({
            waiter_data: waiter_data.data
        })
    }

    render() {

        return (
            <div className="main_waiter_box">
                <div className="waiter_box">
                    {this.state.waiter_data.map((waiter) => <EachWaiter waiter={waiter}></EachWaiter>)}
                </div>
                {this.props.state.selected_waiter === 0 ?
                    ''
                    :
                    <Link to="/order">
                        <div className="next_btn">
                            <button className="btn btn-success btn-sm px-5">Next</button>
                        </div>
                    </Link>
                }
            </div>
        )
    }
}


const mapstatetoprop = (state) => {
    return {
        state: state
    }
}


export default connect(mapstatetoprop)(WaiterBox);