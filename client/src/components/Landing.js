import React, { Component } from 'react';
import Images from '../images'

class Landing extends Component {
    render() {
        return(
            <div style={{ textAlign: 'center' }}>
                <h1><b> nodeGaurav </b></h1>
                You can send out surveys for feedback of your products from our application. Login/Signup...Go to Dashboard and create new Surveys. 
                <br></br>
                <u>To add credits to your account, you can use dummy card details, like Number - 5555 5555 5555 4444 and any expiry/cvv will work.</u>
                <br></br><br></br>
                <img alt='landing' src={Images.landing} ></img>
            </div>
        );
    }
}

export default Landing;
