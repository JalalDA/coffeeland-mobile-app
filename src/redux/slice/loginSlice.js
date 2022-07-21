import { createSlice } from "@reduxjs/toolkit";
import { signIn } from "../../modules/axios";

export const loginSlice = createSlice({
    name : 'login',
    initialState : {
        token : '',
        role : '',
        msg : '',
        photo : '',
        isSucces : null,
    },
    reducers : {
        pushUserInfo : (state, action)=>{
            return {
                ...state,
                token : action.payload.data.token,
                msg : 'Login Success',
                photo : action.payload.data.photo,
                role : action.payload.data.role,
                isSucces : true
            }
        },
        failedLogin : (state, action)=>{
            return {
                ...state,
                msg : 'Wrong email or password',
                isSucces : false,
                token : '',
                photo : '',
                role : ''
            }
        },
        deleteUserInfo : ()=>{
            return {
                token : '',
                msg : '',
                role : '',
                isSucces : null
            }
        }
    }
})

export const getUserInfo = (body)=> async(dispatch) =>{
    try {
        const result = await signIn(body)
        dispatch(pushUserInfo(result.data))
        // console.log(result.data);
    } catch (error) {
        dispatch(failedLogin(error.response.data))
    }
}

export const {pushUserInfo, failedLogin, deleteUserInfo} = loginSlice.actions

export default loginSlice.reducer