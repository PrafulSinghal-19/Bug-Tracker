import React from "react"
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"
import isLoggedIn from "../../middleware/auth";


const Client = (): JSX.Element => {

    const navigate = useNavigate();
    const [checkLogin, setCheckLogin] = useState(false);

    

    useEffect(() => {
        const login = isLoggedIn();
        if (!login) {
            navigate('/login');
        }
        setCheckLogin(login);
    }, [checkLogin]);
    
    return (
        <div>
            {
                checkLogin ? "Hello" : null
            }
        </div>
    );
}

export default Client;