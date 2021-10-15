

export const login = () => {
    localStorage.setItem("user", "admin")
    return {type: 'LOGIN'}
}


export const logout = () => {
    localStorage.removeItem("user")
    return {type: 'LOGOUT'}
}