const keys = require('../../config/keys');

module.exports = survey => {
    return `
        <html>
            <body>
                <div style="text-align: center;">
                    <h3>We'd like your input!</h3>
                    <p> Please answer below question:</p>
                    <p>${survey.body}</p>
                    <div>
                        <a href="${keys.redirectDomain}api/surveys/${survey.id}/yes">Yes</a>
                        <a href="${keys.redirectDomain}api/surveys/${survey.id}/no">No</a>
                    </div>
                </div>
            </body>
        </html>
    `;
};

// <p>Please rate our feedback app(5 being the highest rating and 1 being the lowest)</p>
// <div>
//     <a href="${keys.redirectDomain}api/surveys/appRating/one"> 1 </a>
//     <a href="${keys.redirectDomain}api/surveys/appRating/two"> 2 </a>
//     <a href="${keys.redirectDomain}api/surveys/appRating/three"> 3 </a>
//     <a href="${keys.redirectDomain}api/surveys/appRating/four"> 4 </a>
//     <a href="${keys.redirectDomain}api/surveys/appRating/five"> 5 </a>
// </div>