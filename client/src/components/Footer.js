import _ from 'lodash';
import React, { Component } from 'react';

const LINKS = [
    { name: 'Instagram', url: 'https://www.instagram.com/gaurav_arora_04/' },
    { name: 'Facebook', url: 'https://www.facebook.com/gaurav.arora97/' },
    { name: 'Twitter', url: 'https://twitter.com/aroraGauravGA' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/gauravArora0497/' }
]

class Footer extends Component {

    renderLinks(){
         return _.map(LINKS, ({ name, url }) => {
            return (
                <li key={name}><a className="grey-text text-lighten-3" target="_blank" rel="noreferrer" href={url}>{name}</a></li>
            );
         });
    }

    render() {
        return (
            <footer className="page-footer teal lighten-3" style={{ position: "fixed", bottom:"0", left:"0", width:"100%" }}>
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text">nodeGaurav</h5>
                            <p className="grey-text text-lighten-4">This project is under development.</p>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <h5 className="white-text">Contact me through:</h5>
                            <ul>
                                {this.renderLinks()}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div>
                        © 2022 Copyright
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
