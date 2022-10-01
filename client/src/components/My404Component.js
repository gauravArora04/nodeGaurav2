import React, { Component } from 'react';
import Images from '../images'

class My404Component extends Component {
    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <img src={Images.error404} alt="dashboard without login" width="700px" height="450px"/>
            </div>
        )
    }
}

export default My404Component;