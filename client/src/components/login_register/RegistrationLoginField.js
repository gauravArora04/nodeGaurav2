import React from 'react';

const RegistrationLoginField = ({ input, label, type, meta: { error, touched } }) => {
    return (
        <div>
            <label>{label}</label>
            <input {...input} type={type} style={{marginBottom: '5px'}} /> {/* This is used so that we don't need to use something like onBlur= {input.onBlur} and so on */}
            
            <div className='red-text' style={{marginBottom: '20px'}}>
                {touched && error}
            </div>
        </div>
    );
};

export default RegistrationLoginField;