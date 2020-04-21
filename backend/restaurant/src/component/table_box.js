import React from "react";
import axios from "axios";
import EachTable from "./eachtable";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class TableBox extends React.Component {

    state = {
        table_data: []
    }

    async componentDidMount() {

        var api_url = '/table'
        var table_data = await axios.get(api_url)
        console.log(table_data.data)
        this.setState({
            table_data: table_data.data
        })
    }

    render() {

        return (
            <div className="main_table_box">
                <div className="table_box">
                    {this.state.table_data.map((table) => <EachTable table={table}></EachTable>)}
                </div>
                {this.props.state.selected_table === 0 ?
                    ''
                    :
                    <Link to="/waiter">
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


export default connect(mapstatetoprop)(TableBox);