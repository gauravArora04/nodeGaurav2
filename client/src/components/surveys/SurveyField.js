import React from 'react';

const SurveyField = ({ input, label, meta: { error, touched } }) => {
    return (
        <div>
            <label>{label}</label>
            <input {...input} style={{marginBottom: '5px'}} /> {/* The {...input} is used so that we don't need to use something like onBlur= {input.onBlur} and other properties */}
            
            <div className='red-text' style={{marginBottom: '20px'}}>
                {touched && error}
            </div>
        </div>
    );
};

export default SurveyField;