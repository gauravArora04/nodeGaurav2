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
import ThanksComponent from './ThanksComponent'
// import Register_Login from './login_register/Register_Login';
// import MyProfile from './MyProfile';


class App extends Component {
    componentDidMount() {
        this.props.fetchUser();

        M.AutoInit();
        
        document.addEventListener('DOMContentLoaded', function() {
            var elemSideNav = document.querySelectorAll('.sidenav');
            M.Sidenav.init(elemSideNav, { edge: 'right', draggable: 'true' });

            var elemModal = document.querySelectorAll('.modal');
            M.Modal.init(elemModal, { opacity: 0.9 });
        });
        
        // document.addEventListener('DOMContentLoaded', function() {
        //     var elems = this.document.querySelector('.tap-target');
        //     M.TapTarget.init(elems, { isOpen: 'true' });
        // });
        // M.TapTarget.getInstance(document.querySelectorAll(".tap-target")).open();
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
                            <Route path="/surveys/new" component={SurveyNew} />
                            <Route exact path="/faq" component={HowTo} />
                            <Route exact path="/thanks" component={ThanksComponent} />
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

export default connect(null, actions)(App);