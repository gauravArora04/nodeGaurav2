const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
    app.post('/api/stripe', requireLogin, async(req, res) => {
        
        const charge = await stripe.charges.create({
            amount: 5000,
            currency: 'inr',
            source: req.body.id,
            description: 'Charging money for adding credits',
        });
        req.user.creds +=10;
        const user = await req.user.save();

        res.send(user);
    });
};