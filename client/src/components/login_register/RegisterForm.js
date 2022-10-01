import _ from 'lodash';
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import RegistrationLoginField from './RegistrationLoginField';
import validateEmails from '../../utils/validateEmails';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import formFields from './formFields';
// import * as actions from '../../actions';

let Registerform = ({ onLoginClick, handleSubmit }) => {
    
    const renderFields = _.map(formFields, ({label, name, type}) => {
        return (<Field key={name} component={RegistrationLoginField} type={type} label={label} name={name} />);
    });
    

    
    return(
        <div style={{marginBottom: '20px'}}>
            <form onSubmit={handleSubmit}>
                {renderFields}

                <Link to='/' className='red btn-flat white-text'>
                    Cancel
                </Link>

                <button className='yellow white-text darken-3 btn-flat'
                    onClick={onLoginClick}
                >
                    Login
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
};

function validate(values) {
    const errors = {};

    errors.email = validateEmails(values.email || '');

    _.each(formFields, ({name}) => {
        if(!values[name]){
            errors[name] = 'You must provide ' + name + '!'
        }
    });

    return errors;
}

Registerform = reduxForm({
    validate,
    form: 'registerForm'
  })(Registerform);

export default Registerform;
