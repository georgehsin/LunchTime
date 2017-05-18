const yelp = require('yelp-fusion');
const secret = require('../config/private.js')

const clientId = 'epaxlQQOHCGxzbL65kJr9A';
const clientSecret = secret.yelpSecret;

module.exports = {
  search: function(req,res){
    yelp.accessToken(clientId, clientSecret).then((response) => {
      const client = yelp.client(response.jsonBody.access_token);

      client.search(req.body).then((response) => {
        res.json(response.jsonBody);
      });
    }).catch((e) => {
      console.log(e);
    });
  }
}