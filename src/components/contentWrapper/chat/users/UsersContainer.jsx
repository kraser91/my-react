import React from 'react' 
import Users from './Users'



const UsersContainer = (props) => { 
  let state= props.store.getState() 
  let dataName = state.dataChat.dataName
  return (
   <Users dataName={dataName}/>
  ); 
}

export default UsersContainer;
