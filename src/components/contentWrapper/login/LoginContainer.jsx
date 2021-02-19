import Login from "./Login";
import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";




class LoginContainer extends React.Component{

    render() {
        return (
            <div>
                <Login {...this.props} />
            </div>
        );
    }
}
let mapStateToProps = (state) => {
    return {

    }
}
export default compose ( connect(mapStateToProps, {})) (LoginContainer)

