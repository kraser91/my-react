import React from 'react';
import { connect } from 'react-redux';
import noName from '../../../img/images.png'
import {withRouter} from 'react-router-dom';
import {compose} from "redux";
import {AppContentThunk, GetStatusThunk, updateStatusThunk} from "../../../redux/AppContentReducer";
import {WithAuthRedirect} from "../../../hoc/HocCmponent";
import AppContent from "./AppContent";



class AppContentContainer extends React.Component{
    componentDidMount() {
        let profileId = this.props.match.params.profileId
        if(!profileId){profileId=13624}
        this.props.AppContentThunk(profileId)
        this.props.GetStatusThunk(profileId)
    }
    render() {
        return (
            <div>
             <AppContent {...this.props} profile={this.props.profile} noName={noName} status={this.props.status}
                         updateStatusThunk={this.props.updateStatusThunk}/>
            </div>
     );
 }
}
let mapStateToProps = (state) => {
   return {
       profile: state.dataProfile.profile,
       status: state.dataProfile.status,
   }
}
export default compose ( connect(mapStateToProps, {AppContentThunk, GetStatusThunk, updateStatusThunk}), withRouter, WithAuthRedirect
) (AppContentContainer)