import React, { Component } from 'react';
import { SignIn } from '../store/actions/authActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export class SignInComponent extends Component {

    state= {
     email: "",
     password: ""   
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.signIn(this.state);
    }

    render() {
        const { auth }= this.props;

        if(!auth.id){
            return (
                <div className="container">
                    <form onSubmit={this.handleSubmit} className="white">
                        <h5 className="grey-text text-darken-3">SignIn</h5>
                        <div className="input-field">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <button className="btn pink lighten-1 z-depth-0">Login</button>
                            {/* <div className="red-text center">
                                {authError ? <p>{ authError }</p>: null}
                            </div> */}
                        </div>
                    </form>
                </div>
            )
        }
        else{
            return <Redirect to='/home' />
        }
    }
}

const mapStateToProps= (state) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps= (dispatch) => {
    return {
        signIn: (body) => dispatch(SignIn(body))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInComponent);
