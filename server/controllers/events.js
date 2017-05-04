var yelp = require('yelp-fusion');
var secret = require('../config/private.js')

var clientId = 'epaxlQQOHCGxzbL65kJr9A';
var clientSecret = secret.yelpSecret;

module.exports = {
  search: function(req,res){
    yelp.accessToken(clientId, clientSecret).then(response => {
      const client = yelp.client(response.jsonBody.access_token);

      client.search(req.body).then(response => {
        res.json(response.jsonBody);
      });
    }).catch(e => {
      console.log(e);
    });
  }
}