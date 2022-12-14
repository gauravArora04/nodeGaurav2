import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {
    renderFields() {
        return _.map(formFields, ({label, name}) => {
            return <Field key={name} component={SurveyField} type='text' label={label} name={name} />
        })
    }

    render() {
        return(
            <div style={{marginBottom: '20px'}}>
                <form 
                    onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}
                >
                    {this.renderFields()}
                    <a href='/dashboard' className='red btn-flat white-text'>
                        Cancel
                    </a>
                    <button className='teal btn-flat right waves-effect waves-light white-text' type="submit">
                        Next
                        <i className="material-icons right">keyboard_arrow_right</i>
                    </button>
                </form>
            </div>
        )
    }
}

function validate(values) {
    const errors = {};

    errors.recipients = validateEmails(values.recipients || '');

    _.each(formFields, ({name}) => {
        if(!values[name]){
            errors[name] = 'You must provide ' + name + '...!!!'
        }
    });

    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);