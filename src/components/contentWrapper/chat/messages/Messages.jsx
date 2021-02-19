import React from 'react' 
import classes from './messages.module.css'
import Message from './message/Message';




const Messages = (props) => {
  let changeText = React.createRef() 
    let areaChange = () => {
      let newTextValue = changeText.current.value 
        props.areaChange(newTextValue) 
    }
    let addMessage = () => {  
      props.addMessage()
    }
  let  dataMessageN = props.dataMessage.map(x =><Message message={x.message}/> ) 


  return ( 
    <div className={classes.mes}> 
      <textarea name="" id="" cols="30" onChange={areaChange} ref={changeText} value={props.newPostChat} rows="10"></textarea> 
      <button onClick={addMessage}>add</button> 
      {dataMessageN}
    </div>
  )
} 


export default Messages
