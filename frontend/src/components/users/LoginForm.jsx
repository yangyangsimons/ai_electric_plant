import React, { useState, useContext, useEffect } from 'react';
import { signIn, logoutAction } from '../../context/users/UsersAction';
import UsersContext from '../../context/users/UsersContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import styles from 'css/loginForm.module.scss'
import { ReactComponent as UserIcon } from 'assets/icon/user.svg';
import { ReactComponent as PasswordIcon } from 'assets/icon/password.svg';
function LoginForm(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //const [user, setUser] = useState(false);
    const { user, dispatch } = useContext(UsersContext);
    const navigate = useNavigate();
    useEffect(() => {
        let ub = localStorage.getItem('user');
        if (ub) {
            let u = JSON.parse(ub)
            //console.log(u);            
            dispatch({ type: 'SET_USER', payload: u });
        }
    }, [dispatch]);


    const submitHandler = (e) => {
        e.preventDefault();
        dispatch({ type: 'SET_LOADING' });
        const s = async () => {
            const x = await signIn(email, password);
            if (x.token) {
                localStorage.setItem('user', JSON.stringify(x));
                dispatch({ type: 'SET_USER', payload: x });
                //setUser(x);
                console.log(user);
                toast.success("User Logged in");
                navigate("/members-area");
            } else {
                toast.error("Invalid email or password");
            }
        }
        s();
    }

    const logoutHandler = () => {
        logoutAction();

        dispatch({ type: 'SET_USER', payload: false });
        navigate("/");
    }


    const loginForm = <form onSubmit={submitHandler} className={styles.container}>
        <div className={styles.login}>
            <div className={styles.header}>账号密码登录</div>
            <div className={styles.body}>
                <table className="table table-borderless">
                    <tbody>
                        <tr>
                            <td ><span><UserIcon className={styles.icon} /></span><input className={`form-control ${styles.inputStyle}`} placeholder='请输入账号 / 邮箱' type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td><span><PasswordIcon className={styles.icon} /></span><input className={`form-control ${styles.inputStyle}`} placeholder='请输入密码' type="password" value={password} onChange={(e) => setPassword(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <button type='submit' className={`btn btn-primary ${styles.loginSubmit}`}>登录</button>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </form >;
    const logout = (
        <div className='card'>
            <div className="card-header">User</div>
            <div className="card-body">
                <div className="card-title">
                    You are logged in as {user && `"${user.user.email}"`}<br />
                </div>
            </div>
            <div className="card-footer text-center">
                <button className='btn btn-danger' onClick={logoutHandler}>Logout</button>
            </div>
        </div>
    );
    if (user) {
        return logout;
    } else {
        return loginForm;
    }
}

export default LoginForm;
