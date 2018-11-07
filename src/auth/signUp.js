import React, { Component } from 'react';
import { SignUp } from '../store/actions/authActions';
import { connect } from 'react-redux';

export class SignUpComponent extends Component {

    state = {
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
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">SignUp</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">SignUp</button>
                        {/* <div className="red-text center">
                        { authError ? <p>{ authError }</p> : null }
                    </div> */}
                    </div>
                </form>
            </div>
        )

    }
}

const mapDispatchToProps= (dispatch) => {
    return {
        signIn: (body) => dispatch(SignUp(body))
    }
}

export default connect(null, mapDispatchToProps)(SignUpComponent);

