
const initialState = {
    user: null
}

export const userReducer = (state = initialState, action) => {

switch(action.type){
    case 'LOGIN':
   return {...state, user: 'admin'}
    case 'LOGOUT':
        return initialState
    default:
        return state
}

}