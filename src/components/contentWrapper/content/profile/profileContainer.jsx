import React from 'react';
import Profile from './Profile';
import noName from "../../../../img/images.png";


class ProfileContainer extends React.Component {

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} noName={noName}/>
            </div>
        );
    }
}

export default ProfileContainer