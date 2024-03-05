import React, { useContext, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Spinner from '../components/shared/Spinner';
import { signUp } from '../context/users/UsersAction';
import UsersContext from '../context/users/UsersContext';

function Register() {
    const [state, setState] = useState({
        email: '',
        password: '',
        firstname: '',
        lastname: ''
    });
    /*const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");*/
    const { dispatch, loading } = useContext(UsersContext);

    const navigate = useNavigate();

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setState({
            ...state,
            [name]: value
        });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (state.firstname === '') {
            toast.error('First Name required');
            return false;
        }

        if (state.email === '') {
            toast.error('Email required');
            return false;            
        }

        if (state.lastname === '') {
            toast.error('Last Name required');
            return false;
        }

        if (state.password === '') {
            toast.error('Password required');
            return false;
        }
        dispatch({ type: 'SET_LOADING' });
        const res = await signUp(state.email, state.password, state.firstname, state.lastname);
        if (res && res.success === true) {
            localStorage.setItem('user', JSON.stringify(res));
            dispatch({ type: 'SET_USER', payload: res });            
            navigate("/members-area");
            toast.success("User registered");
        } else {            
            dispatch({ type: 'SET_USER', payload: null });
            toast.error(res.data.error);
        }

    }
    if (loading) {
        return <Spinner />
    }
    return (
        <form onSubmit={handleSubmit}>

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Registration Form</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input placeholder='Email' className='form-control' type="email" name="email" id="email" value={state.email} onChange={(e) => handleInput(e)} /></td>
                    </tr>
                    <tr>
                        <td><input placeholder='Password' className='form-control' type="password" name="password" id="password" value={state.password} onChange={(e) => handleInput(e)} /></td>
                    </tr>
                    <tr>
                        <td><input placeholder='First Name' className='form-control' type="text" name="firstname" id="firstname" value={state.firstname} onChange={(e) => handleInput(e)} /></td>
                    </tr>
                    <tr>
                        <td><input placeholder='Last Name' className='form-control' type="text" name="lastname" id="lastname" value={state.lastname} onChange={(e) => handleInput(e)} /></td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td>
                            <button className='btn btn-primary' type='submit'>Register</button>
                        </td>
                    </tr>
                </tfoot>

            </table>
        </form>
    )
}

export default Register