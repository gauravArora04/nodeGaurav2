import React, {Component} from 'react';

class Parallax extends Component {
    render () {
        return (
            <div>
                <div className="parallax-container">
                    <div className="parallax"><img alt='parallax1' src="https://materializecss.com/images/parallax1.jpg"/></div>
                </div>
                <div className="section white">
                    <div className="row container">
                        <iframe title='corona_map' style={{width:"100%"}} width="560" height="380" src="https://coronavirus.app/map?embed=true" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="parallax-container">
                    <div className="parallax"><img alt='parallax2' src="https://materializecss.com/images/parallax2.jpg"/></div>
                </div>
            </div>
        );
    };
};

export default Parallax;
