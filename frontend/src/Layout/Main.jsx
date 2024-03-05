import React from 'react';
import LoginForm from "../components/users/LoginForm";
import Menu from "../components/shared/Menu";
import {ToastContainer} from 'react-toastify';

function Main(props) {
    return (<>
        <Menu />
        <ToastContainer/>
        <div className="container">
            <div className="row mt-3">
                <div className="col-3">
                    <LoginForm />
                    </div>
                <div className="col-9 ps-5">{props.children}</div>
            </div>
        </div>
    </>);
}

export default Main;
