import React from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLoginHandler: () => { },
    onLogoutHandle: () => { }
});

export default AuthContext;