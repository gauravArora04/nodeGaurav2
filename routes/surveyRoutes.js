const _ = require('lodash');
const { Path } = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');

const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');
const AppRating = mongoose.model('appratings');

module.exports = (app) => {

    //Delete a survey
    app.post('/api/surveys/delete/:surveyId', (req, res) => {
        
    });

    //This will redirect users to a normal thank you page after they have responded through the survey
    app.get('/api/surveys/:surveyId/:choice', (req, res) => {
    res.send('Thanks for voting!');
    });


    //This will get response from SendGrid and Update matching Mongo Document
    app.post('/api/surveys/webhooks', (req, res) => {

    const surveyRatingPath = new Path('/api/surveys/:surveyId/:choice');
        
    _.chain(req.body)
        .map(({ email, url }) => {      
            const match = surveyRatingPath.test(new URL(url).pathname);
            if (match) {
                return { email, surveyId: match.surveyId, choice: match.choice };
            }
        })
        .compact()
        .uniqBy('email', 'surveyId')
        .each(({ surveyId, email, choice }) => {
            Survey.updateOne(
              {
                _id: surveyId,
                recipients: {
                  $elemMatch: { email: email, responded: false },
                },
              },
              {
                $inc: { [choice]: 1 },
                $set: { 'recipients.$.responded': true },
                lastResponded: new Date()
              }
            ).exec();
        })
        .value();
    
    
    // const appRatingPath = new Path('/api/surveys/appRating/:choice');

    // const hello = _.chain(req.body)
    //     .map(({ email, url }) => {
    //         const match = appRatingPath.test(new URL(url).pathname);
    //         if(match){
    //             return { email, choice: match.choice };
    //         }
    //     })
    //     .compact()
    //     .uniqBy('email')
    //     .each(({ email, choice }) => {
    //         // const existingRating = AppRating.findOne({recipients: {$elemMatch: { email: email, responded: false }}});
    //         // console.log(existingRating);
    //         AppRating.updateOne(
    //         {
    //             _id: '633aa369b017673acccb213d',
    //             recipients: {
    //                 $elemMatch: { email: email, responded: false },
    //             },
    //         },
    //         {
    //             $inc: { [choice]: 1 },
    //             // $addToSet: { 'recipients.$.responded': true },
    //             lastResponseDate: new Date()
    //         },
    //         {
    //             upsert: true, new: true, setDefaultsOnInsert: true
    //         }
    //         ).exec();
    //     })
    //     .value();

    res.send({});  //telling sendgrid that everything working fine.....chill...!!!
    });


    //Getting existing survey list for user and sending to front end
    app.get('/api/user_surveys', requireLogin, async (req, res) => {
        const existingSurveys = await Survey.find({ _user: req.user.id })
            .select({ recipients: false });
        res.send(existingSurveys);
    });


    //To send new surveys to recipients
    app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
        const { title, subject, body, recipients } = req.body;

        const survey = new Survey({
            title,
            subject,
            body,
            recipients: recipients.split(',').map(email => ({ email: email.trim() })),
            _user: req.user.id,
            dateSent: Date.now()
        });

        const mailer = new Mailer(survey, surveyTemplate(survey));
        try{
            await mailer.send();
            await survey.save();
            req.user.creds -= 1;
            const user = await req.user.save();
            
            res.send(user);
        } catch (err) {
            res.status(422).send(err);
        }
    });
};