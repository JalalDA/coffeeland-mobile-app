import axios from "axios";
import {SERVER_HOST} from '@env'

export const signIn = (body)=>{
    return axios.post(`${SERVER_HOST}/auth/login`, body)
}

export const register = (body)=>{
    return axios.post(`${SERVER_HOST}/auth/register`, body)
}

export const getFavProduct = ()=>{
    return axios.get(`${SERVER_HOST}/product/favorit`)
}

export const getCategoryProduct = (id)=>{
    return axios.get(`${SERVER_HOST}/product/?category_id=${id}`)
}

export const getDetailProduct = (id)=>{
    return axios.get(`${SERVER_HOST}/product/${id}`)
}

export const getDetailProfile = (token)=>{
    const config = {
        headers : {
            Authorization : `Bearer ${token}`
        }
    }
    return axios.get(`${SERVER_HOST}/user`, config)
}

export const forgot = (body)=>{
    return axios.post(`${SERVER_HOST}/auth/forgot`, body)
}

export const reset = (body)=>{
    return axios.put(`${SERVER_HOST}/auth/reset`, body)
}

export const createTransaction = (body, token)=>{
    const config = {
        headers : {
            Authorization : `Bearer ${token}`
        }
    }
    return axios.post(`${SERVER_HOST}/transaction`, body, config)
}

export const getHistory = (id)=>{
    return axios.get(`${SERVER_HOST}/history/:${id}`)
}