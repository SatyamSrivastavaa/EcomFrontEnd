import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = (props) => {
    return (
        <div>
            <ul className="left">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/createOrder">Create_Order</NavLink></li>
                <li><NavLink to="/viewOrder">My_Orders</NavLink></li>
            </ul>
            <ul className="right">
                <li><NavLink to="/login">Logout</NavLink></li>
            </ul>
        </div>

    )
}

export default SignedInLinks;