//under development

import React, { Component } from 'react';
import { connect } from 'react-redux';

class MyProfile extends Component {
    renderContent() {
        switch(this.props.auth){
            case null:
                return 'Loading...!!!';
            case false:
                return <h2>You need to login first to access this page...!!!</h2>;
            default:
                return (
                    <div>    
                        <div className="container" style={{marginTop: '15px'}}>
                            <div className="row valign-wrapper">
                                <div className="col s10">
                                    {/* Profile Pic */}
                                    <img src={this.props.auth.profilePic} alt="profilePic" className="circle"/>
                                </div>
                                <div className="col s10">
                                    <span className="black-text">
                                        <label>Name</label>
                                        <input type='text' value={this.props.auth.name} disabled/>
                                    </span>
                                </div>
                                <div className="col s10">
                                    <span className="black-text">
                                        <label>Email</label>
                                        <input type='text' value={this.props.auth.email} disabled/>
                                    </span>
                                </div>
                            </div>
                            <div className="row valign-wrapper">
                                <div className="col s10">
                                    <span className="black-text">
                                        <label>Available Credits</label>
                                        <input type='text' value={this.props.auth.creds ? this.props.auth.creds : 'NA'} disabled/>
                                    </span>
                                </div>
                                <div className="col s10">
                                    <span className="black-text">
                                        <label>Username</label>
                                        <input type='text' value={this.props.auth.username ? this.props.auth.username : 'NA'} disabled/>
                                    </span>
                                </div>
                            </div>
                            <div className="row valign-wrapper">
                                <div className="col s10">
                                    <span className="black-text">
                                        <label>DOB</label>
                                        <input type='text' value={this.props.auth.dob ? this.props.auth.dob : 'NA'} disabled/>
                                    </span>
                                </div>
                                <div className="col s10">
                                    <span className="black-text">
                                        <label>Contact No.</label>
                                        <input type='text' value={this.props.auth.mob ? this.props.auth.mob : 'NA'} disabled/>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                );
        }
    }

    render(){
        return(
            <div>
                {this.renderContent()}
                {/* take reference from below url */}
                {/* https://github.com/tutorials-website/Mern-stack-tutorials-code/blob/master/frontend/src/components/UserProfile.js */}
            </div>
        )
    }
}

function mapStateToProps({auth}){
    return {auth};
}

export default connect(mapStateToProps)(MyProfile);