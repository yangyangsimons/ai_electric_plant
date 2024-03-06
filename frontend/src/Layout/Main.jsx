import React from 'react';
import LoginForm from "../components/users/LoginForm";
import Navbar from "../components/shared/Navbar";

function Main() {
    return (<>
        <Navbar />
        <div className="container">
            <LoginForm />
        </div>
    </>);
}

export default Main;
