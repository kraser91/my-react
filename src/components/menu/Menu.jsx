import React from 'react' 
// import activeUser from './activeUser/ActiveUser'
import ActiveUsers from './activeUsers/ActiveUsers'
import Item from './items/Item'
import  classes from './Menu.module.css' 


const Menu = (props) => {
  
  
  const myMenuN =  props.myMenu.map(m => <Item messege={m.name} url={m.url}/>)
  
  return (
    <div className={classes.menu}> 
      <ul>  
        {myMenuN} 
      </ul> 
      <ActiveUsers dataActiveUser={props.dataActiveUser}/>
    </div>
  );
}

export default Menu;
