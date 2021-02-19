import React from 'react';
import { connect } from 'react-redux';
import Head from "./Head";
import {authMeThunk} from "../../redux/authReducer";

class HeadContainer extends React.Component{
  componentDidMount() {
      this.props.authMeThunk()
  }
  render () {
    return <> <Head {...this.props}/></>
  }
}
let mapStateToProps = (state) => {
    return {
        data: state.dataAuth,
        isAuth: state.dataAuth.isAuth,
        isFetching: state.dataPosts.isFetching
    }
}

export default connect(mapStateToProps, {authMeThunk}) (HeadContainer)


