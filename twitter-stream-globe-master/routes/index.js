var express = require('express');
var router = express.Router();
var fs = require('fs');
var nconf = require('nconf');
var moment = require('moment');
var tweetPublisher = require('../tweet-publisher');

/**
 * Defines route for root
 */
router.get('/', function (req, res) {

	// start stream and publishing
	tweetPublisher.start();

	// Render PubNub config for client-side javascript to reference
  res.render('index', {
		subscribe_key: nconf.get('PUBNUB_SUBSCRIBE_KEY'),
		channel: 'tweet_stream',
		ga_tracking_id: nconf.get('GA_TRACKING_ID')
	});
});

/**
 * Defines upgrade page route
 */
router.get('/upgrade', function (req, res) {
  res.render('upgrade');
});

/**
 * GET Starts stream
 */
router.get('/stream/start', function (req, res) {
	res.send( tweetPublisher.start() );
});

/**
 * GET Stops stream
 */
router.get('/stream/stop', function (req, res) {
	res.send( tweetPublisher.stop() );
});

var trends, trendsTimestamp;

/**
 * GET Returns trends from Twitter trends API
 */
router.get('/trends', function (req, res) {

	var now = moment();

	// Only allow request to trends API every 2 minutes to stay within rate limits
	if (trends && trendsTimestamp.diff(now, 'minutes') < 2 ) {
		// return trends from memory
	  res.send(trends);
	  return;
	}

	TweetPublisher.twitter.get('trends/place', { id: 1 }, function(err, data, response) {

		if (err) {
	  	res.send(err);
	  	return;
		}

		trends = data[0].trends
		trendsTimestamp = moment();
	  res.send(trends);
	});
});

module.exports = router;
