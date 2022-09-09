import UserActionTypes from "./userTypes";
import APIs from "../Utils/APIs";

export const fetchUserAction = (payload) => {
    console.log("fetchUserAction", payload)
    return({
    type: UserActionTypes.FETCH_USERS,
    payload
})}

export const addUserAction = (payload) => ({
    type: UserActionTypes.ADD_USER,
    payload
})

export const deleteUserAction = (payload) => ({
    type: UserActionTypes.DELETE_USER,
    payload
})

export const updateUserAction = (payload) => ({
    type: UserActionTypes.UPDATE_USER,
    payload
})

//__________________________SERVICES_____________________________________________________


export const fetchUsersService = () => async (dispatch) => {
    try{
        const response = await APIs.fetchUsersAPI();
        console.log("fetchUsersService", response)
        dispatch(fetchUserAction(response.data));
    } catch(error){
        console.log("fetchUserService Error", error);
    }
}

export const addUserService = (payload) => async (dispatch) => {
    try{
        console.log("ADDUSERACTIONNNNNNNNNNNNNNNNNNNNNNNNNNNN", payload)
        const response = await APIs.addUserAPI(payload);
        console.log("RESPONSEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE", response)
        dispatch(addUserAction(response));
    }
    catch(error){
        console.log("addUserService Error",error);
    }
}

export const deleteUserService = (payload) => async (dispatch) => {
    try{
        console.log("DELETEUSERACTIONNNNNNNNNNNNNNNNNNNNNNNNNNNN", payload)
        const response = await APIs.deleteUsersAPI(payload);
        console.log("DELETEEEE RESPONSEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE", response.data.id)
        dispatch(deleteUserAction(response.data.id));
    }
    catch(error){
        console.log("deleteUserService Error",error);
    }
}

export const updateUserService = (payload) => async (dispatch) => {
    try{
        const response = await APIs.updateUserAPI(payload);
        console.log("updateUserService", response)
        dispatch(updateUserAction(response))
    }catch(error){
        console.log("updateUserService Error",error);
    }
}


