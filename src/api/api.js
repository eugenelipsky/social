import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "f53f5825-98f4-48b7-bd3c-983783f11323"
    }
});

export const usersApi = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        })
    },
    followUser(userId) {
        return instance.post(`follow/${userId}`).then(response => response.data)
    },
    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data)
    }
}


export const profileApi = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => response.data);
    }
}

export const authApi = {
    authMe() {
        return instance.get(`auth/me`).then(response => response.data)
    }
}