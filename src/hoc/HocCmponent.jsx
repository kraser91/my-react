import React from 'react';
import { connect } from 'react-redux';
import {Redirect} from "react-router-dom";


let mapStateWithHoc = (state) => {
    return {
        isAuth: state.dataAuth.isAuth,
    }
}

export  const WithAuthRedirect = (Component) => {

    class redirectComponent extends React.Component{
        render () {
            if (!this.props.isAuth) return <Redirect to='/login'/>
            return <Component {...this.props}/>
        }
    }

    let connectAuthRedirectComponent = connect(mapStateWithHoc) (redirectComponent)

    return connectAuthRedirectComponent

 }

