import React, { Component } from 'react';
import Images from '../images'

class HowTo extends Component {
    render() {
        return (
            <ul className='collapsible'>
                <li>
                    <h4 className='collapsible-header'>How do I create a new survey?</h4>

                    <p className='collapsible-body'>
                        To create a new survey, follow below steps:
                        <ol>
                            <li>
                                First, login to the application using your Google Id.
                            </li>
                            <li>
                                Then, go to the dashboard page by clicking on the button at the top banner.
                            </li>
                            <li>
                                Once you're on the Dashboard page, you'll be able to see your existing surveys with their details.
                                If you do not have any existing surveys, you can now create a new one by clicking on the +(plus) icon from the bottom right corner of the dashboard screen.
                            </li>
                            <li>
                                After clicking on the +(plus) icon, fill in the details. Make sure to fill all the fields.
                            </li>
                            <li>
                                To add multiple recipients, comma seperate the email Ids in the recipients field. Like abc@xyz.com, def@xyz.com,... etc.
                            </li>
                            <li>
                                Then, click on next and you will able to verify the details you've entered before sending the actual survey out to your list of recipients.
                            </li>
                            <li>
                                Confirm the details and click send. Single credit will be deducted from your account for every survey you have sent out(irrespective of number of recipients you have mentioned).
                            </li>
                        </ol>
                    </p>
                </li>


                <li>
                    <h4 className='collapsible-header'>How do I add credits in my account?</h4>

                    <p className='collapsible-body'>
                        To add credits, follow below steps:
                        <ol>
                            <li>
                                First, login to the application using your Google Id.
                            </li>
                            <li>
                                From the top banner, click on "Add Credits".
                            </li>
                            <li>
                                A floating screen will pop-up. Since we are not accepting real money, you'll see the text "TEST MODE" on the top right corner.
                            </li>
                            <li>
                                Now, you can add any valid email address. You can use a dummy card number "5555 5555 5555 4444". And add any future expire date and any 3 digits CVV.
                            </li>
                            <li>
                                Click on the Pay Button and you'll see within a few seconds that 5 credits are now added in your account from the top banner.
                            </li>
                        </ol>
                    </p>
                </li>
            </ul>
        )
    }
}

export default HowTo;