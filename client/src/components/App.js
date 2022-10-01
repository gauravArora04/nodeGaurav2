import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import M from 'materialize-css';

import Header from './Header';
import Dashboard from './Dashboard';
import Landing from './Landing';
import Footer from './Footer';
// import Parallax from './Parallax';
import My404Component from './My404Component';
import SurveyNew from './surveys/SurveyNew';
import Register_Login from './login_register/Register_Login';
import MyProfile from './MyProfile';


class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
        // this.props.fetchSurveys();

        M.AutoInit();
        
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            M.Sidenav.init(elems, {edge: 'right', draggable: 'true'});
        });
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Switch>
                            <Route exact path="/" component={Landing} />
                            <Route exact path="/dashboard" component={Dashboard} />
                            <Route path="/surveys/new" component={SurveyNew} />
                            {/* <Route path="/parallax" component={Parallax} /> */}
                            <Route path="/register" component={Register_Login} />
                            <Route path='/myprofile' component={MyProfile} />
                            <Route component={My404Component} />
                        </Switch>
                        <Footer />
                    </div>
                </BrowserRouter>
            </div >
        );
    }
}

export default connect(null, actions)(App);