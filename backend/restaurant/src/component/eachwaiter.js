import React from "react";
import app_action from "../action/action"
import { connect } from "react-redux";



class EachWaiter extends React.Component {

    render() {

        return (
            <div>
                {this.props.state.selected_waiter===this.props.waiter.id?
                <div className="eachwaiter sltdw"
                onClick={()=>this.props.dispatch(app_action.select_waiter(this.props.waiter.id))}>
                    <h4 className="text-center">{this.props.waiter.name}</h4>
                    <h6 className="text-center">Exp:{this.props.waiter.exprience_in_year}</h6>
                    <h6 className="text-center">Rating:{this.props.waiter.rating}</h6>
                </div>
                :
                <div className="eachwaiter"
                onClick={()=>this.props.dispatch(app_action.select_waiter(this.props.waiter.id))}>
                    <h4 className="text-center">{this.props.waiter.name}</h4>
                    <h6 className="text-center">Exp:{this.props.waiter.exprience_in_year}</h6>
                    <h6 className="text-center">Rating:{this.props.waiter.rating}</h6>
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

export default connect(mapstatetoprop)(EachWaiter);