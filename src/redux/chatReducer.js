const CHANGE_TEXT = 'CHANGE-TEXT' 
const ADD_POST = 'ADD-POST' 
const initialState =  { 
    dataName: [ 
        {id: 1, name: 'Victor'},
        {id: 2, name: 'Masha'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Aleksandr'},
        {id: 5, name: 'Nastya'},
        {id: 6, name: 'Vasya'} 
    ], 
    dataMessage: [ 
       {id:1, message:'bla-bla'},
       {id:2, message:'yo-yo'},
       {id:3, message:'bla-bla'},
    ],  
    newMessage: 'some message'
}

const chatReducer = (state = initialState, action) => { 
   
    switch(action.type) { 
        
        case 'CHANGE-TEXT':   
            return { 
                ...state, 
                newMessage: action.newText
            } 
        case 'ADD-POST':    
            let body= state.newMessage
                return {  
                    ...state, 
                    newMessage: '', 
                    dataMessage: [...state.dataMessage, {id: 1, message: body }]
                }
        default: 
            return state 
            
    } 
    
}  

export const changeTextCreator    = (newTextValue) => ({type: CHANGE_TEXT, newText: newTextValue})
export const addPostCreator       = () => ({type: ADD_POST})
export default chatReducer