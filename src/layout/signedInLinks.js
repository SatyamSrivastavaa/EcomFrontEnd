import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { SignOut } from '../store/actions/authActions';

const SignedInLinks = (props) => {
    return (
        <div>
            <ul className="left">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/createOrder">Create_Order</NavLink></li>
                <li><NavLink to="/viewOrder">My_Orders</NavLink></li>
            </ul>
            <ul className="right">
                <li><NavLink to="/signin" onClick={ props.signOut.bind(this, props.auth.id) }>Logout</NavLink></li>
            </ul>
        </div>

    )
}

const mapStateToProps = (state) => {
    console.log("inside map: " + state);
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: (id) => dispatch(SignOut(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);