import React from 'react' 
import classes from './Head.module.css'
import {NavLink} from "react-router-dom";


const Head = (props) => {
    return (
        <div className={classes.head}>
        <div className={classes.imeg}> 
      <img src="https://archilab.online/images/1/123.jpg" alt=""/>
      </div>
    <div className={classes.logo}> 
      <h2>some header</h2>
    </div>
    <div className={classes.login}>
        {props.isAuth? props.data.login : <NavLink to={'/login'}>login</NavLink>}
    </div>
    </div>
  );
}

export default Head;
