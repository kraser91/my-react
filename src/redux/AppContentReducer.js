import {usersApi} from "../api/api";

const SET_PROFILE = 'SET_PROFILE'
const GET_STATUS = 'GET_STATUS'
const UPDATE_STATUS = 'UPDATE_STATUS'
const initialState = {
    profile: null,
    status: ""
}
  
const AppContentReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_PROFILE':
            return {
                ...state,
                profile: action.profileNew
            }
        case 'GET_STATUS':
            return {
                ...state,
                status: action.userStatus
            }
        case 'UPDATE_STATUS':
            return {
                ...state,
                status: action.newStatus
            }
        default: 
            return state
    }
} 

export const setProfile = (profileNew) =>
            ({type: SET_PROFILE, profileNew})

export const getStatus = (userStatus) =>
    ({type: GET_STATUS, userStatus})

export const updateStatus = (newStatus) =>
    ({type: UPDATE_STATUS, newStatus})

export const AppContentThunk = (profileId) => {
    return (dispatch) => {
        usersApi.profile(profileId).then(resolve => {
            dispatch( setProfile(resolve))})
    }
}
export const GetStatusThunk = (profileId) => {
    return (dispatch) => {
        usersApi.getProfileStatus(profileId).then(resolve => {
            dispatch( getStatus(resolve))})
    }
}
export const updateStatusThunk = (status) => {
    return (dispatch) => {
        usersApi.profileStatus(status).then(resolve => {
            dispatch(getStatus(status))})
    }
}
export default AppContentReducer