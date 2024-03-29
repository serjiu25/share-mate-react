import React from 'react';
import './login.scss';
import { Redirect } from 'react-router-dom';
import { AuthLogin } from '../../services/auth';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            toHomePage: false
        }
    }

    handleSubmit = () => {
        


        // AuthLogin(this.state.email, this.state.password)
        //     .then(response => response.json())
        //     .then(res => {
        //         console.log(res.ok);
        //         if (res.ok === 'false') {
        //             console.log('Attempt to login failed');
        //         } else {
        //             console.log('Login accepted');
        //             this.setState({toHomePage: true});
        //         }
        //     })
        //     .catch(e => console.error(e));
    }
    

    render() {
        if (this.state.toHomePage) {
            return <Redirect to='/home'/>
        }
        return (
            <div id="login">
                <p className="login-title">Login</p>
                
                <div className="already-account">
                    <p className="blue-link" onClick={() => this.props.toggleLoginOpened()}
                        >Don't have an account yet? Register now.</p>
                </div>

                <input type="text" value={this.state.email} onChange={(event) => this.setState({email: event.target.value})}
                    className="field field-email" placeholder="E-mail" alt="email"/>
                <input type="password" value={this.state.password} 
                    onChange={(event) => this.setState({password: event.target.value})}
                    onKeyDown={(event) => {
                        if (event.keyCode === 13) {
                            this.handleSubmit();
                        }
                    }}
                    className="field field-password" placeholder="Password" alt="password"/>
                <div className="forgot-password">
                    Forgot password?
                </div>

                <button onClick={this.handleSubmit} 
                    className="login-button">Login</button>
            </div>
        );
    }
}

export default Login;