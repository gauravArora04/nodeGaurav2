import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import RegistrationLoginField from './RegistrationLoginField';

let LoginForm = ({ onRegisterClick, handleSubmit }) => {
    return(
        <div style={{marginBottom: '20px'}}>
            <h4 className='red'>This Screen is working but with some errors...!!!</h4>
            <form onSubmit={handleSubmit}>
                <Field component={RegistrationLoginField} type='text' label='User name' name='username' />
                <Field component={RegistrationLoginField} type='password' label='Password' name='password' />
                <Link to='/' className='red btn-flat white-text'>
                    Cancel
                </Link>
                <button
                    className='yellow white-text darken-3 btn-flat center'
                    onClick={onRegisterClick}
                >
                    Register
                </button>
                <button 
                    className='teal btn-flat right waves-effect waves-light white-text' 
                    type="submit">
                        Submit
                    <i className="material-icons right">done</i>
                </button>
            </form>
        </div>
    );
}


LoginForm = reduxForm({
    form: 'loginForm'
})(LoginForm);

export default LoginForm;
