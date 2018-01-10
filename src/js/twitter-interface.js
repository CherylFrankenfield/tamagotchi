// var Twitter = require('twitter');
// var tokens = require('twitter-tokens');
// var twitterMentions = require('twitter-mentions');
// var env = require('dotenv').config();
//
//
// var apiKey = require('./../.env').apiKey;
// var apiKeySec = require('./../.env').apiKey2secret;
// var apiAccess = require('./../.env').Access;
// var apiAccessSecret = require('./../.env').AccessSecret;
//
//
// let oauth = {
//   oauth_consumer_key: apiKey,
//   oauth_consumer_secret: apiKeySec,
//   oauth_access_token: apiAccess,
//   oauth_access_token_secret: apiAccessSecret
// };
// const BASE_URL = 'https://api.twitter.com/oauth/authorize';
//
// // The identifier of the tweet
// // The identifier of the tweet
// let tweetId = `782399817351823360`;
// let Options = {
//   method: 'POST',
//   uri: `${BASE_URL}/statuses/retweet/${tweetId}.json`,
//   oauth
// };
//
//
// fetch(Options)
//   .then(function (body) {
//     // Successful response
//     console.log(body);
//   })
//   .catch(function (err) {
//     // If an error occurs
// });
//
// // twitterMentions(oauth, '424119506508980224').then(mentions => {
// //   console.log(mentions); // [{…}, {…}, …]
// // });
