import React from 'react' 
import { connect } from 'react-redux';
import { addPostCreator, changeTextCreator } from '../../../../redux/chatReducer';
import Messages from './Messages';

let mapStateToProps = (state) => { 
  return { 
    dataMessage: state.dataChat.dataMessage
  }
}
let mapDispatchToProps = (dispatch) => { 
  return { 
    areaChange: (someValue) => {
      dispatch(changeTextCreator(someValue)) 
    },
    addMessage: () => {  
      dispatch(addPostCreator())
    }
  }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps) (Messages)
export default MessagesContainer
