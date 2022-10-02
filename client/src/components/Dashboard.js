import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions'
import Images from '../images'

class Dashboard extends Component {

    componentDidMount() {
        this.props.fetchSurveys();
    }

    renderSurveyCards() {
        return _.map(this.props.survey, ({title, subject, body, _id, yes, no, lastResponded}) => {
            return (
                <div className="row" key={_id}>
                    <div className="col s12 m12">
                        <div className="card hoverable teal lighten-1">
                            <div className="card-content white-text">
                                <span className="card-title"><b>Title:</b> {title}</span>
                                <span className="card-title"><b>Subject:</b></span>
                                <p>{subject}</p>
                                <span className="card-title"><b>Body:</b></span>
                                <p>{body}</p>
                                <span className="card-title"><b>Yes:</b></span>
                                <p>{yes}</p>
                                <span className="card-title"><b>No:</b></span>
                                <p>{no}</p>
                                <span className="card-title"><b>Last Responded:</b></span>
                                <p>{lastResponded}</p>
                            </div>
                            {/* <div className="card-action">
                                <a href="#!">See more...</a>
                            </div> */}
                        </div>
                    </div>
                </div>
                // <div>

                // </div>
            );
        });
    }

    renderFab() {
        return(
            <div className="fixed-action-btn">
                <Link id='newSurvey' to= '/surveys/new' className="btn-floating btn-large red accent-2"> {/* this.props.auth.creds == 0 ? '#modal2' : */}
                    <i className="material-icons">add</i>
                </Link>
                {/* tap target is set to open through body tag of the public html file */}
                <div className="tap-target teal" data-target="newSurvey">
                    <div className="tap-target-content">
                    <h5>Create Survey!</h5>
                    <p>Create a new survey from here.</p>
                    </div>
                </div>
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
            {/* ----Credits error Popup---- */}
                            <div id="modal2" className="modal red-text">
                                <div className="modal-content">
                                <h4>Not enough credits</h4>
                                <p>Please add credits to send out surveys</p>
                                </div>
                            </div>
            {/* ----Credits error Popup---- */}
            </div>
        );
    };
};

function mapStateToProps({ auth, survey }){
    return { survey, auth };
}

export default connect(mapStateToProps, actions)(Dashboard);
