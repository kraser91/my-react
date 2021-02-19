import React from 'react' 
import ActiveUser from '../activeUser/ActiveUser';
import classes from './activeUsers.module.css' 


const ActiveUsers = (props) => {
  
  
   let dataActiveUserN = props.dataActiveUser.map(n => <ActiveUser name={n.name} status={n.status}/>)
  return ( 
    <div className={classes.activeUsers}> 
     {dataActiveUserN}
    </div>
  )
}

export default ActiveUsers;
