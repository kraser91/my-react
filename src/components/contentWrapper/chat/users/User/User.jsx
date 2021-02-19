import React from 'react' 
import { NavLink } from 'react-router-dom'
import classes from './User.module.css' 


const User = (props) => {
  return ( 
  <li><NavLink to={'/chat/'+props.url} className={classes.User} activeClassName={classes.active}>{props.messege}</NavLink></li>
  );
}

export default User;
