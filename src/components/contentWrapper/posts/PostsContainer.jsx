import React from 'react';
import { connect } from 'react-redux';
import {
  follow,
  setCurrentPage,
  setUsers,
  totalC,
  unfollow,
  toggleIsFetching,
  toggleIsFollowing, getUsers, onPageChangedThunk, followThunk, unFollowThunk
} from '../../../redux/postsReducer';
import Posts from './Posts';
import Spinner from '../../../constructor/Spinner';
import noName from "../../../img/images.png";


class PostsApi extends React.Component{
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }
    onPageChanged = (pageNumber) => {
      this.props.onPageChangedThunk(pageNumber, this.props.pageSize)
    }

  render () {
    return <>
          {this.props.isFetching ? <Spinner/> : null}
          <Posts
            totalCount={this.props.totalCount}
            pageSize={this.props.pageSize}
            users={this.props.users}
            currentPage={this.props.currentPage}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            onPageChanged={this.onPageChanged}
            noName={noName}
            toggleIsFollowing={this.props.toggleIsFollowing}
            followingInProgress={this.props.followingInProgress}
            followThunk={this.props.followThunk}
            unFollowThunk={this.props.unFollowThunk}

          />
          </>
  }
}


let mapStateToProps = (state) => { 
  return { 
    users: state.dataPosts.users,
    totalCount: state.dataPosts.totalCount,
    pageSize: state.dataPosts.pageSize,
    currentPage: state.dataPosts.currentPage,
    isFetching: state.dataPosts.isFetching,
    followingInProgress: state.dataPosts.followingInProgress,

  }
} 

export default connect(mapStateToProps, {follow, unfollow, setUsers, totalC, setCurrentPage, toggleIsFetching,
  toggleIsFollowing, getUsers, onPageChangedThunk, followThunk, unFollowThunk} ) (PostsApi)


