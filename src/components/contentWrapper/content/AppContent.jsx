import React from 'react';
import Baner from './baner/Baner';
import classes from './Content.module.css'
import MyPostContainer from './myPost/MyPostContainer';
import ProfileContainer from "./profile/profileContainer";
import ProfileStatus from "./profile/ProfileStatus";


const AppContent = (props) => {


    return (
        <div className={classes.content}>
            <Baner/>
            <ProfileStatus status={props.status} updateStatusThunk={props.updateStatusThunk}/>
            <ProfileContainer store={props.store} profile={props.profile}/>
            <MyPostContainer store={props.store}/>
        </div>
    );
}

export default AppContent;
