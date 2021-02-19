import React from 'react'; 
import classes from './Post.module.css' 


const Post = (props) => {
  return (
    <div className={classes.Post}> 
      {props.postText}
      <div className={classes.like}> 
        like: {props.like}
      </div> 
    </div>
  );
}

export default Post;
