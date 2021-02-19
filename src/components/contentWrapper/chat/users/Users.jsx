import React from 'react' 
import User from './User/User'
import  classes from './Users.module.css' 


const Users = (props) => { 
  
  let dataNameN = props.dataName.map(d =>  <User messege={d.name} url={d.id}/>)
  return (
    <div className={classes.Users}> 
    <ul>  
      {dataNameN}
    </ul>  
    </div>
  ); 
  
}

export default Users;
