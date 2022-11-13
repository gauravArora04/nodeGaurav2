import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import M from 'materialize-css';

import Header from './Header';
import Dashboard from './Dashboard';
import Landing from './Landing';
import Footer from './Footer';
import My404Component from './My404Component';
import HowTo from './HowTo';
import SurveyNew from './surveys/SurveyNew';
// import Register_Login from './login_register/Register_Login';
// import MyProfile from './MyProfile';


class App extends Component {
    componentDidMount() {
        this.props.fetchUser();

        M.AutoInit();
        
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            M.Sidenav.init(elems, {edge: 'right', draggable: 'true'});
        });

        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.modal');
            M.Modal.init(elems, { opacity: 1.0, dismissible: 'false' });
        });
    }

    renderSurveys() {
        if(this.props.auth && this.props.auth.creds > 0){
            return(
                <Route path="/surveys/new" component={SurveyNew} />
            );
        }
        return ( <main className='errorMessage'> Please login and add credits to your account to view this page. </main> );
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div id="routes-body">
                        <Header />
                        <Switch>
                            <Route exact path="/" component={Landing} />
                            <Route exact path="/dashboard" component={Dashboard} />
                            { this.renderSurveys() }
                            <Route exact path="/faq" component={HowTo} />
                            {/* <Route path='/myprofile' component={MyProfile} /> */}
                            <Route path="*" component={My404Component} />
                        </Switch>
                        <Footer />
                    </div>
                </BrowserRouter>
            </div >
        );
    }
}

function mapStateToProps({auth}) {
    return {auth};
}

export default connect(mapStateToProps, actions)(App);