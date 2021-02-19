import React from 'react'; 
import classes from './chat.module.css' 
import MessagesContainer from './messages/MessagesContainer';
import UsersContainer from './users/UsersContainer';


const Chat = (props) => { 
  return (
    <div className={classes.chat}> 
      <UsersContainer store={props.store} /> 
      <MessagesContainer store={props.store}/>
    </div>
  );
}

export default Chat;
