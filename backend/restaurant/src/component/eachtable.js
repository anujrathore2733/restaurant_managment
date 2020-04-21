import React from "react";
import app_action from "../action/action"
import { connect } from "react-redux";



class EachTable extends React.Component {

    render() {

        return (
            <div>
                {this.props.state.selected_table===this.props.table.id?
                <div className="eachtable sltd"
                onClick={()=>this.props.dispatch(app_action.select_table(this.props.table.id))}>
                    <h4 className="text-center">{this.props.table.name}</h4>
                    <h6 className="text-center">Seats:{this.props.table.no_of_seat}</h6>
                    <h6 className="text-center">Floor No:{this.props.table.Floor_no}</h6>
                </div>
                :
                <div className="eachtable"
                onClick={()=>this.props.dispatch(app_action.select_table(this.props.table.id))}>
                    <h4 className="text-center">{this.props.table.name}</h4>
                    <h6 className="text-center">Seats:{this.props.table.no_of_seat}</h6>
                    <h6 className="text-center">Floor No:{this.props.table.Floor_no}</h6>
                </div>
                }
            </div>
        )
    }
}

const mapstatetoprop = (state)=>{

    return{
        state:state
    }
}

export default connect(mapstatetoprop)(EachTable);