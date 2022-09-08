import UserActionTypes from "./userTypes";
import deleteItem from "../Utils/modifiers";

const InitialState = {
    isFetching: false,
    users: [],
};

const userReducer = (state = InitialState, action) =>{
    console.log("userReducer State", state)
    console.log("userReducerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr Action", action)
    switch(action.type){
        case UserActionTypes.FETCH_USERS:
            return {
                isFetching:false,
                users: [...action.payload]
            };
        case UserActionTypes.ADD_USER:
            return {isFetching: false,
                users:[
                ...state.users,
                action.payload]};
        case UserActionTypes.DELETE_USER:
            return {
                isFetching:false,
                users: deleteItem(state.users, action.payload)
            };
        default:
            return state;

    }
}

export default userReducer;