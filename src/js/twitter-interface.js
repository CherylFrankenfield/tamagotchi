var Twitter = require('twitter');
var tokens = require('twitter-tokens');
var twitterMentions = require('twitter-mentions');
var env = require('dotenv').config();


var apiKey = require('./../.env').apiKey;
var apiKeySec = require('./../.env').apiKey2;
var apiAccess = require('./../.env').Access;
var apiAccessSecret = require('./../.env').AccessSecret;


var client = new Twitter({
  consumer_key: process.env.apiKey,
  consumer_secret: process.env.apiKeySec,
  access_token: process.env.apiAccess,
  access_token_secret: process.env.apiAccessSecret
});

client.get('favorites/list', function(error, tweets, response) {
  if(error) throw error;
  console.log(tweets);  // The favorites.
  console.log(response);  // Raw response object.
});

// twitterMentions(client, '424119506508980224').then(mentions => {
//   console.log(mentions); // [{…}, {…}, …]
// });


// https://api.twitter.com/1.1/search/tweets.json?q=%40twitterapi?src=typd&q=%23bulbasaur
