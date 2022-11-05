import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Images from '../images';

class Dashboard extends Component {

    componentDidMount() {
        this.props.fetchSurveys();
    }

    renderSurveyCards() {
        return _.map(this.props.survey, survey => {
            return (
                <div className="card hoverable darken-1" key={survey._id}>
                    <div className="card-content">
                        <span className="card-title">
                            <b>Title:</b> {survey.title}
                            <button title='Delete?' data-target="deleteModal" class="modal-trigger right"
                            onClick={ () => document.getElementById('deleteModalForm').action =`/api/surveys/${survey._id}` }>
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
                        <a><b>Yes:</b> {survey.yes}</a>
                        <a><b>No:</b> {survey.no}</a>
                        <a className="right"><b>Avg. Rt. :</b> {(survey.yes / (survey.yes + survey.no)) ? ((survey.yes / (survey.yes + survey.no))*5) : 0} / 5</a>
                    </div>
                </div>
              );
        }).reverse(); //To reverse sort the surveys list
    }

    renderFab() {
        return(
            <div className="fixed-action-btn">
                <Link id='newSurvey' to= '/surveys/new' className="btn-floating btn-large red accent-2">
                    <i className="material-icons">add</i>
                </Link>
            </div>
        );
    }

    renderDashboard() {
        switch(this.props.auth){
            case null:
                return <img alt='preloader' className="loader" src={Images.preLoader}/>;
            case false:
                return (<div style={{ textAlign: 'center' }}>
                    <h2 style={{color: 'red'}}>You need to login to access this page...!!!</h2>
                    <img src={Images.dashboardWithoutLogin} alt="dashboard without login" width="600px" height="450px"/>
                </div>);
            default:
                switch(this.props.survey){
                    case null:  
                        return <img alt='preloader' className="loader" src={Images.preLoader}/>;
                    case false:
                        return (
                            <div>
                                <h4 className=''>You do not have any existing surveys...!!! <br></br><br></br> Add credits from the menu and click on the plus button to create one...!!! <br></br><br></br> 
                                Use 5555 5555 5555 4444 as card number and give any future date and any CVV for testing purpose.</h4><br></br>
                                {this.renderFab()}
                            </div>
                        );
                    default:
                        return (
                            <div>
                                <h2>Dashboard</h2>
                                <h5>Your existing surveys:</h5>
                                {this.renderSurveyCards()}
                                {this.renderFab()}
                            </div>
                            );
                }
        }
    }

    render() {
        return (
            <div className='container'>
                {this.renderDashboard()}
                <div id="deleteModal" class="modal bottom-sheet">
                    <div class="modal-content">
                        <h4>Delete Survey?</h4>
                        <p>Do you really want to delete this survey?</p>
                    </div>
                    <div class="modal-footer">
                        <form id="deleteModalForm" method='POST'>
                            <button className="modal-close waves-effect waves-green btn-flat">
                                Delete
                                <i className='material-icons right'>delete_forever</i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
};

function mapStateToProps({ auth, survey }){
    return { survey, auth };
}

export default connect(mapStateToProps, actions)(Dashboard);