import React, {useContext} from 'react';
import {Tabs, Tab} from "react-bootstrap";
import { Navigate } from 'react-router-dom';
import UsersContext from '../context/users/UsersContext';
import Profile from '../components/users/Profile';

function MemberArea() {
    const {user} = useContext(UsersContext);
    return <>
    {user ? <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">            
            <Tab eventKey="profile" title="Profile">
                <Profile/>
            </Tab>
            <Tab eventKey="others" title="Others">
                Anything can goes here
            </Tab>
        </Tabs> : <Navigate to="/"/> }
        
    </>

}

export default MemberArea;
