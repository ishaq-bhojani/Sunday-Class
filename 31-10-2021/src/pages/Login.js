import {useContext} from "react";
import AuthContext from "../context/auth-context";

const Login = () => {
    const authCtx = useContext(AuthContext);
    const onLoginHandler = () => {
        authCtx.onLoginHandler()
    }
    return (
        <button onClick={onLoginHandler}>Login</button>
    );
}

export default Login;
