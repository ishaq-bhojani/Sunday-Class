import './App.css';
import {useState} from 'react';
import AuthContext from "./context/auth-context";
import AuthHandler from "./components/authHandler/AuthHandler";

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onLoginHandler = () => {
        setIsLoggedIn(true);
    }

    const onLogoutHandler = () => {
        setIsLoggedIn(false);
    }

    return (
        <div className="App">
            <AuthContext.Provider value={{isLoggedIn, onLoginHandler, onLogoutHandler}}>
                <AuthHandler />
            </AuthContext.Provider>
        </div>
    );
}

export default App;
