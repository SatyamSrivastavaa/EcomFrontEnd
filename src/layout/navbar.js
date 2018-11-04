import React, { Component } from 'react';
import SignedInLinks from './signedInLinks';
import SignedOutLinks from './signedOutLinks';

export default class Navbar extends Component{
    render(){
        return (
            <nav>
                <SignedInLinks />
                <SignedOutLinks />
            </nav>
        );
    }
}