import React from 'react' 
import { NavLink } from 'react-router-dom'
import classes from './Item.module.css' 


const Item = (props) => {
  return ( 
  <li><NavLink to={'/'+props.url} className={classes.item} activeClassName={classes.active}>{props.messege}</NavLink></li>
  );
}

export default Item;
