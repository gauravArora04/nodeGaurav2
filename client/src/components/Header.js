import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Images from '../images';
import Payments from './Payments';

class Header extends Component {

    renderContent() {
        switch(this.props.auth){
            case null:
                return <img alt='preloader' src={Images.preLoader}/>;

            case false:
                return [
                    //<li key='fb'><a className="waves-effect waves-light btn" href="/auth/facebook">Login with Facebook</a></li>,
                    <li key='google'><a className="waves-effect waves-light btn" href="/auth/google">Login with Google</a></li>,
                    //<li key='customLoginRegister'><a className="waves-effect waves-light btn" href="/register">Login/Register</a></li>
            ];
            default:
                return [//key is always required when returning a list of elements
                    <li key='AvailableCredits'><a className="btn" href="#!">Credits: {this.props.auth.creds}</a></li>,
                    <Payments key='PaymentButton' />,
                    <li key='LogoutButton'>
                        <a className="waves-effect waves-light btn modal-trigger" href="#modal1">
                            <img alt='profilePic' className="btn-floating btn-small" style={{ position: 'relative', right: '10px'}} src={this.props.auth.profilePic ? this.props.auth.profilePic: Images.logo} />
                            &nbsp;{this.props.auth.name}(Logout)
                        </a>
                    </li>
            ];
        }
    }
    
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper teal lighten-3">
                        <div>
                            <Link 
                                to={ this.props.auth ? '/dashboard' : '/'} 
                                className="left brand-logo"
                            >
                            {/* <img style={{height: '50px',width: '50px',position: 'relative', top: '10px'}} src={Images.logoNodeGaurav} alt='nodeGaurav' /> */}
                            <img style={{height: "60px", position: "relative", top: "5px", left: "20px"}} src={Images.logoNodeGaurav} alt='nodeGaurav' />
                                {/* nodeGaurav */}
                            </Link>

                            <a href="#!" data-target="sidenav-data" className="right sidenav-trigger"><i className="material-icons">menu</i></a>

                            {/* ----Header Options---- */}
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                {this.renderContent()}
                            </ul>
                            {/* ----Header Options---- */}


                            {/* ----SideNav Data---- */}
                            <ul id="sidenav-data" className="right sidenav">
                                {this.renderContent()}
                            </ul>
                            {/* ----SideNav Data---- */}


                            {/* ----Logout Popup---- */}
                            <div id="modal1" className="modal black-text">
                                <div className="modal-content">
                                <h4>Logout?</h4>
                                <p>Are you sure you want to logout?</p>
                                </div>
                                
                                <div className="modal-footer">
                                <a href="#!" className="modal-close waves-effect waves-green btn-flat"><b>Cancel</b></a>
                                <a href="/api/logout" className="modal-close waves-effect waves-green btn-flat"><b>Confirm</b></a>
                                </div>
                            </div>
                            {/* ----Logout Popup---- */}
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

function mapStateToProps(state){
    return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);