//SurveyNew shows SurveyForm and SurveyFormReview

import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
    state = { showFormReview: false }

    renderContent() {
        if(this.state.showFormReview){
            return <SurveyFormReview 
                onCancel={() => this.setState({ showFormReview: false })}
            />;
        }

        return <SurveyForm onSurveySubmit={() => this.setState({ showFormReview: true })}/>;
    }

    render() {
        return(
            <main>
            <div className='container'>
                {this.renderContent()}
            </div>
            </main>
        )
    }
}

export default reduxForm({ //here, if we browse away from the form component, reduxForm store's default property named destroyOnUnmount: true gets called automatically and hence clear out the field values
    form: 'surveyForm'
})(SurveyNew);