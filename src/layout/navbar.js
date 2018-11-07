import React, { Component } from 'react';
import SignedInLinks from './signedInLinks';
import SignedOutLinks from './signedOutLinks';
import { connect } from 'react-redux';

export class Navbar extends Component{
    render(){
        const { auth }= this.props;

        
        return (
            <nav>
                { auth.id? <SignedInLinks />: <SignedOutLinks /> }
            </nav>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Navbar);

