/*import React, { Component } from 'react';
import Images from '../images'

class Landing extends Component {
    render() {
        return(
            <div style={{ textAlign: 'center' }}>
                <h5> <a href='/dashboard'>Go to dashboard... </a> </h5>
                <h1> nodeGaurav </h1>
                You can send out surveys for feedback of your products from here. Go to Dashboard and create new Surveys. 
                Below animation is just for testing...!!!
                <div className="carousel">
                    <div className="carousel-item">
                        <img alt='hp_245_g7' src={Images.hp245g7} ></img>
                    </div>
                    <div className="carousel-item">
                        <img alt='mi_notebook_14' src={Images.mi_notebook_14}></img>
                    </div>
                    <div className="carousel-item">
                        <img alt='samsung_laptop' src={Images.samsung_laptop}></img>
                    </div>
                    <div className="carousel-item">
                        <img alt='laptop' src={Images.laptop}></img>
                    </div>
                    <div className="carousel-item">
                        <img alt='apple' src={Images.apple}></img>
                    </div>
                    <div className="carousel-item">
                        <img alt='hp_245_g7' src={Images.hp}></img>
                    </div> 
                </div>
            </div>
        );
    }
}

export default Landing;*/


import React, { Component } from 'react';
import Images from '../images'

class Landing extends Component {
    render() {
        return(
            <div style={{ textAlign: 'center' }}>
                <h5> <a href='/dashboard'>Go to dashboard... </a> </h5>
                <h1> nodeGaurav </h1>
                You can send out surveys for feedback of your products from here. Go to Dashboard and create new Surveys. 
                
                <br></br><br></br>
                <img alt='landing' src={Images.landing} width="600" height="450"></img>
            </div>
        );
    }
}

export default Landing;
