import React, { Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';  

class Payments extends Component {
    render () {
        return (
            <StripeCheckout
                name="nodeGaurav"
                description="Add credits to your account"
                amount={5000}
                currency= 'INR'
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <li><a className="waves-effect waves-light btn" href="#!">Add Credits</a></li>
            </StripeCheckout>
        );
    }
}

export default connect(null, actions)(Payments);