import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import SurveyList from './surveys/SurveyList'
import Images from '../images';

class Dashboard extends Component {

    componentDidMount() {
        this.props.fetchSurveys();
    }

    renderFab() {
        if(this.props.auth && this.props.auth.creds > 0){
            return(
                <div className="fixed-action-btn">
                    <Link id='newSurvey' to= '/surveys/new' className="btn-floating btn-large red accent-2">
                        <i className="material-icons">add</i>
                    </Link>
                </div>
            );
        }
    }

    renderNoExistingSurveys() {
        return(
            <h4>
                <blockquote className='flow-text'>You do not have any existing surveys...!!!</blockquote>
                <blockquote className='flow-text'>Visit the <a href="/faq">FAQ</a> page to know how to add credits to your account and send new surveys.</blockquote> 
                <blockquote className='flow-text'>To add credits, you can use "5555 5555 5555 4444" as card number and give any future date and any CVV because we do not accept real money.</blockquote>
            </h4>
        );
    }

    renderDashboard() {
        switch(this.props.auth){    //checking if user is logged in or not
            case null:
                return <img alt='preloader' className="loader" src={Images.preLoader}/>;
            case false:
                return (<div style={{ textAlign: 'center' }}>
                    <h2 style={{color: 'red'}}>You need to login to access this page...!!!</h2>
                    <img src={Images.dashboardWithoutLogin} alt="dashboard without login" width="600px" height="450px"/>
                </div>);
            default:
                switch(this.props.survey){ //checking if logged-in user has any surveys or not
                    case null:  
                        return <img alt='preloader' className="loader" src={Images.preLoader}/>;
                    case false:
                        return (
                            <div>
                                {this.renderNoExistingSurveys()}
                            </div>
                        );
                    default:
                        return (
                            <div>
                                <h2>Dashboard</h2>
                                <h5>Your existing surveys:</h5>
                                <SurveyList />
                            </div>
                        );
                }
        }
    }

    render() {
        return (
            <main>
                <div className='container'>
                    {this.renderDashboard()}
                    {this.renderFab()}

                    {/* Delete Modal from Materialize CSS */}
                    <div id="deleteModal" className="modal bottom-sheet">
                        <div className="modal-content">
                            <h4>Delete Survey?</h4>
                            <p>Do you really want to delete this survey?</p>
                        </div>
                        <div className="modal-footer">
                            <form id="deleteModalForm" method='POST'>
                            <a href="#!" className="modal-close waves-effect waves-green btn-flat"><b>Cancel</b></a>
                                <button className="modal-close waves-effect waves-green btn-flat">
                                    Delete
                                    <i className='material-icons right'>delete</i>
                                </button>
                            </form>
                        </div>
                    </div>
                    {/* Delete Modal from Materialize CSS */}
                    
                </div>
            </main>
        );
    };
};

function mapStateToProps({ auth, survey }){
    return { survey, auth };
}

export default connect(mapStateToProps, actions)(Dashboard);