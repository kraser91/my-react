import React from 'react';
import classes from './Status.module.css'




class ProfileStatus extends React.Component {
    state= {
        editMode: false,
        status: this.props.status,
    }

    onEdit = () => {
        this.setState({
            editMode: true
        })
    }
    offEdit = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatusThunk(this.state.status)
    }
    statusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div className={classes.status}>
                {!this.state.editMode &&
                <div>
                    <span onClick={this.onEdit}>{this.props.status || "no status"}</span>
                </div>}
                {this.state.editMode &&
                <div>
                    <input onChange={this.statusChange} autoFocus={true} onBlur={this.offEdit} value={this.state.status}/>
                </div>}
            </div>
        )
    }
}
export default ProfileStatus