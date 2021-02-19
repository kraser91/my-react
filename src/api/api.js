import * as axios from "axios";

const instance = axios.create(
    {
        baseURL: `https://social-network.samuraijs.com/api/1.0/`,
        withCredentials: true,
        headers: {"API-KEY": "09c40263-b1b6-4e6b-ad73-08e874b0918c"}
    }
)


export const usersApi = {
    followApi(id) {
        return instance.post(`follow/${id}`).then(responce => {
            return responce.data
        })
    },
    unfollowApi(id) {
        return instance.delete(`follow/${id}`).then(responce => {
            return responce.data
        })
    },
    setUsersApi(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}& ' +
        'count=${pageSize}`).then(responce => {
            return responce.data
        })
    },
    pageChangedApi(pageNumber, pageSize) {
        return instance.get(`users?page=${pageNumber}& ' +
        'count=${pageSize}`).then(responce => {
            return responce.data
        })
    },
    authMe() {
        return instance.get(`auth/me`).then(responce => {
            return responce.data
        })
    },
    profile(profileId) {
        return instance.get(`profile/` + profileId).then(responce => {
            return responce
        })
    },
    profileStatus(status) {
        return instance.put(`profile/status`, {status} )
    },
    getProfileStatus(profileId) {
        return instance.get(`profile/status/` + profileId ).then(responce => {
            return responce.data
        })
    },

}