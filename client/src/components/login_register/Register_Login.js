//Register_Login shows RegisterForm and LoginForm

import React, { Component } from 'react';
import { connect } from 'react-redux';
import RegisterForm from './RegisterForm';
import * as actions from '../../actions'
import LoginForm from './LoginForm'

class Register_Login extends Component {
    state = { showLogin: false }

    renderContent() {
        if(this.state.showLogin){
            return <LoginForm onSubmit={ this.submitLog } onRegisterClick={() => this.setState({ showLogin: false })} />;
        }

        return <RegisterForm onSubmit={ this.submitReg } onLoginClick={() => this.setState({ showLogin: true })} />;
    }

    submitLog = (values) => {
        const { submitLogin, history } = this.props;
        submitLogin(values, history);
    }

    submitReg =  (values) => {
        const { submitRegister, history } = this.props;
        submitRegister(values, history);
    }

    render() {
        return(
            <div className='container'>
                {this.renderContent()}
            </div>
        )
    }
}

export default connect(null, actions)(Register_Login);