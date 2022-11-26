import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import formFields from './formFields';
import * as actions from '../../actions';
import M from 'materialize-css';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
    const reviewFields = _.map(formFields, ({label, name}) => {
        return (
            <div key={name}>
                <label>{label}</label>
                <div>
                    {formValues[name]}
                </div>
            </div>
        );
    });

    return (
        <div style={{marginBottom: '80px'}}>
            <h3>Please confirm your entries</h3>
            <div style={{marginBottom: '20px'}}>{reviewFields}</div>
            <button
             className='yellow left white-text darken-3 btn-flat'
             onClick={onCancel}
            >
                Back
            </button>
            <button 
            onClick={() => {
                submitSurvey(formValues, history);
                M.toast({html: "<span>Sent...!!!</span><button onClick=\" var toastElement = document.querySelector('.toast'); var toastInstance = M.Toast.getInstance(toastElement); toastInstance.dismiss(); \" class='btn-flat toast-action'>X</button>", classes: 'rounded'})}
                } 
            className='btn-flat green right white-text'
            >
                Send Survey
                <i className='material-icons right'>email</i>
            </button>
        </div>
    );
};

function mapStateToProps(state){
    return{ formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));