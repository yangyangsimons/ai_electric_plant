import React from 'react';
import LoginForm from "../components/users/LoginForm";
import styles from '../css/main.module.scss';
function Main() {
    return (<>
        <div className={styles.container}>
            <LoginForm />
        </div>
    </>);
}

export default Main;
