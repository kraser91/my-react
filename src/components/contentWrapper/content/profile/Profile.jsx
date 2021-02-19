import React from 'react';
import classes from './profile.module.css'
import Spinner from "../../../../constructor/Spinner";


const Profile = (props) => {
    if (!props.profile) {
        return <Spinner/>
    }
    return (

        <div className={classes.profile}>
            <div className={classes.ava}>
                <img src={!props.profile.data.photos.small ? props.noName : props.profile.data.photos.small}/>
            </div>
            <div className={classes.text}>
                <h2>{props.profile.data.fullName}</h2>
                <p>about me: {props.profile.data.aboutMe}</p>
                <p>facebook: {props.profile.data.contacts.facebook}</p>
                <p>looking for a fob: {props.profile.data.lookingForAJobDescription}} </p>
            </div>
        </div>
    );
}
export default Profile;
