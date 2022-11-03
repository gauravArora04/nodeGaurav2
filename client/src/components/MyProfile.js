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
                        <div id="profileDiv" className="container" style={{marginTop: '15px', marginBottom: '100px'}}>
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
                        {/* <div className='container' style={{marginBottom: '20px'}}>
                            <button type='button' id="editButton" title='Edit' className="btn"
                            onClick={ () => {
                                // document.getElementById('profileDiv').querySelectorAll('input').disabled = true;
                                // document.getElementById('editButton').display = 'none';
                                var form = document.getElementById("profileDiv");
                                var elements = form.children;
                                for (var i = 0, len = elements.length; i < len; ++i) {
                                    elements[i].readOnly = true;
                                }
                                } }>
                                <i class="material-icons">edit</i>
                                &nbsp;Edit
                            </button>
                        </div> */}
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