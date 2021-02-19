const NEW_POST = 'NEW-POST' 

const SET_PROFILE = 'SET_PROFILE'
const initialState = {
    dataPost: [ 
        {id: 1, postText: 'Hi. How are you?))', like: 6},
        {id: 2, postText: 'Thanks. Everything is good', like: 10},
        {id: 3, postText: 'Sveta', like: 25},
        {id: 4, postText: 'Aleksandr', like: 35},
        {id: 5, postText: 'Nastya', like: 48}
    ], 
    // newPostText: 'some text',
    profile: null,
}  
  

const contentReducer = (state = initialState, action) => { 
    
    switch(action.type) { 
        case 'NEW-POST':  
           // let newText = state.newPostText
            return {
                ...state, 
                dataPost: [...state.dataPost, {id:6, postText: action.newPostText, like: 10}]
            } 

        case 'SET_PROFILE':
            return {
                ...state,
                profile: action.profileNew
            }
        default: 
            return state
    }
} 
export const newPost = (newPostText) =>
            ({type: NEW_POST, newPostText })
export const setProfile = (profileNew) =>
            ({type: SET_PROFILE, profileNew})
export default contentReducer