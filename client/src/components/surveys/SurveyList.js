import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class SurveyList extends Component {

    render() {
        return _.map(this.props.survey, survey => {
            return (
                <div className="card hoverable darken-1" key={survey._id}>
                    <div className="card-content">
                        <span className="card-title">
                            <b>Title:</b> {survey.title}
                            
                            <button title='Delete?' data-target="deleteModal" className="modal-trigger right"
                                onClick={ () => document.getElementById('deleteModalForm').action =`/api/surveys/delete/${survey._id}` }>
                                    <i className='material-icons'>delete_forever</i>
                            </button>
                        </span>
                        <p>
                            <b>Body:</b> {survey.body}
                        </p>
                        <p className="right">
                            <b>Sent On:</b> <u title={new Date(survey.dateSent).toString()}> {new Date(survey.dateSent).toLocaleDateString()} </u>
                        </p>
                    </div>
                    <div className="card-action">
                        <a href="#!"><b>Yes:</b> {survey.yes}</a>
                        <a href="#!"><b>No:</b> {survey.no}</a>
                        <a href="#!" className="right"><b>Avg. Rt. :</b> {(survey.yes / (survey.yes + survey.no)) ? ((survey.yes / (survey.yes + survey.no))*5) : 0} / 5</a>
                    </div>
                </div>
              );
        }).reverse(); //To reverse sort the surveys list
    }
}

function mapStateToProps({ survey }) {
return { survey };
}

export default connect(mapStateToProps)(SurveyList);
