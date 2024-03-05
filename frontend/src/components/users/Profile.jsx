import React, { useState, useContext, useEffect } from 'react';
import UsersContext from '../../context/users/UsersContext';
import { getProfile, saveProfile } from '../../context/users/UsersAction';
import { toast } from 'react-toastify';
import { Spinner } from 'react-bootstrap';

function Profile() {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");

    const { user, profile, dispatch, loading } = useContext(UsersContext);

    useEffect(() => {
        const p = async () => {
            dispatch({ type: 'SET_LOADING' });
            const g = await getProfile(user.token);
            dispatch({ type: 'SET_PROFILE', payload: g.data });
            console.log(profile);
            setFirstName(g.data.firstname);
            setLastName(g.data.lastname);
        }
        p();



    }, [dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'SET_LOADING' });
        const call = async () => {
            const r = await saveProfile(firstname, lastname, user.token);
            dispatch({ type: 'SET_PROFILE', payload: r.data });
            toast.success("Profile saved");
        }
        call();
    }

    const handleChange = (e) => {
        if (e.target.id === "firstname") {
            setFirstName(e.target.value);
        }

        if (e.target.id === "lastname") {
            setLastName(e.target.value);
        }
    }
    if (loading) {
        return <Spinner />
    }
    return <form onSubmit={handleSubmit}>
        <table className="table table-bordered">
            <tbody>
                <tr>
                    <td><input className='form-control' type="text" id="firstname" value={firstname} placeholder="First Name" onChange={handleChange} /></td>
                </tr>
                <tr>
                    <td><input className='form-control' type="text" id="lastname" value={lastname} placeholder="Last Name" onChange={handleChange} /></td>
                </tr>
                <tr>
                    <td>
                        <button type="submit" className='btn btn-primary'>Save Profile</button>
                    </td>
                </tr>

            </tbody>
        </table>
    </form>;
}

export default Profile;
