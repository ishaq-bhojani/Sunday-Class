import {useContext} from "react";
import AuthContext from "../../context/auth-context";
import Home from "../../pages/Home";
import Login from "../../pages/Login";

const AuthHandler = ({onLoginHandler}) => {
    const authCtx = useContext(AuthContext);
    return authCtx.isLoggedIn ? <Home/> : <Login onLogin={onLoginHandler}/>
}

export default AuthHandler;