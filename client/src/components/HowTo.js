import React, { Component } from 'react';
import Images from '../images'

class HowTo extends Component {
    render() {
        return (
            <div className='container'>
                <h4>How do I create a new survey?</h4>
                <p>
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
            </div>
        )
    }
}

export default HowTo;