import {usersApi} from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const TOTAL_COUNT = 'TOTAL_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING'





const initialState = {
    users: [ ],
    totalCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],

}


const postsReducer = (state = initialState, action) => { 
    
    switch(action.type) { 
       case FOLLOW:
            return { 
                ...state, 
                users: state.users.map( u => { 
                    if(u.id === action.id) { 
                        return {...u, follow: true}
                    } 
                    return u
                })
            } 
        case UNFOLLOW:
            return { 
                ...state, 
                users: state.users.map( u => { 
                    if(u.id === action.id) { 
                        return {...u, follow: false}
                    } 
                    return u
                })
            }
        case SET_USERS:
            return {...state, users: action.users}
        case TOTAL_COUNT:
            return {...state, totalCount: action.count}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.page}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.Fetching}
        case TOGGLE_IS_FOLLOWING:
            return {...state, followingInProgress: action.following? [...state.followingInProgress, action.userId]:
                    state.followingInProgress.filter(id => id != action.userId)}
        default: 
            return state    
        } 
    }

export const follow  = (id) =>
            ({type: FOLLOW, id } )
export const unfollow = (id) =>
            ({type: UNFOLLOW, id})
export const setUsers = (users) =>
            ({type: SET_USERS, users})
export const totalC = (count) =>
            ({type: TOTAL_COUNT, count})
export const setCurrentPage = (page) =>
            ({type: SET_CURRENT_PAGE, page})
export const toggleIsFetching = (Fetching) =>
            ({type: TOGGLE_IS_FETCHING, Fetching})
export const toggleIsFollowing = (following, userId) =>
    ({type: TOGGLE_IS_FOLLOWING, following, userId})


export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        usersApi.setUsersApi(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(totalC(data.totalCount))
        })
    }
}
export const onPageChangedThunk = (pageNumber, pageSize) => {
    return (dispatch) => {
        dispatch(setCurrentPage(pageNumber))
        dispatch(toggleIsFetching(true))
        usersApi.pageChangedApi(pageNumber, pageSize).then(data => {
            dispatch(setUsers(data.items))
            dispatch(toggleIsFetching(false))
            dispatch(totalC(data.totalCount))
        })
    }
}
export const followThunk = (Id) => {
    return (dispatch) => {
        dispatch(toggleIsFollowing(true, Id))
            usersApi.unfollowApi(Id).then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollow(Id))
                    dispatch(toggleIsFollowing(false, Id))
                }
            })
    }
}
export const unFollowThunk = (Id) => {
    return (dispatch) => {
        dispatch(toggleIsFollowing(true, Id))
        usersApi.followApi(Id).then(data => {
            if (data.resultCode === 0) {
                dispatch(follow(Id))
                dispatch(toggleIsFollowing(false, Id))
            }
        })
    }
}

export default postsReducer