import { createSlice } from "@reduxjs/toolkit";
import { getDetailProfile } from "../../modules/axios";

export const profileSlice = createSlice({
    name : 'profile',
    initialState : {
        value : {}
    },
    reducers : {
        profileInfo : (state, action)=>{
            console.log(action.payload.data);
            return {
                ...state,
                value : action.payload.data
            }
        },
    }
})

export const getProfileInfo = (token)=> async(dispatch) =>{
    try {
        const result = await getDetailProfile(token)
        dispatch(profileInfo(result.data))
    } catch (error) {
        console.error
        console.log(error);
    }
}

export const {profileInfo} = profileSlice.actions

export default profileSlice.reducer