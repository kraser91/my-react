import React from 'react'; 
import { connect } from 'react-redux';
import MyPost from './MyPost';
import {newPost} from "../../../../redux/contentReducer";



let mapStateToProps = (state) => { 
  return { 
    dataPost: state.dataContent.dataPost, 
    newPostText: state.dataContent.newPostText
  }
} 

const MyPostContainer = connect(mapStateToProps, {newPost}) (MyPost)
export default MyPostContainer;
