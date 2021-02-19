import {usersApi} from "../api/api";

const SET_AUTH_USER = 'SET_AUTH_USER'

const initialState = {
    data: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    
    switch(action.type) { 
       case SET_AUTH_USER:
            return { 
                ...state, 
                ...action.data,
                isAuth: true
            }

        default: 
            return state    
        } 
    }

export const setAuthUser  = (data) =>
            ({type: SET_AUTH_USER, data } )

export const authMeThunk = () => {
    return (dispatch) => {
        usersApi.authMe().then(data => {
            if (data.resultCode === 0) {
            dispatch(setAuthUser(data.data))
            }
        })
    }
}
export default authReducer