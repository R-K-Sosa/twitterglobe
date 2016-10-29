tweet-stream-globe
==========

A real-time 3D visualization of Tweets from around the world.

This web app attaches to the Twitter API stream/filter and runs rudimentary sentiment analysis on Tweets with geo data. Tweets are published via PubNub Websockets and plotted to a 3D globe.

Inspired by the [Web GL Globe Chrome Experiment](http://www.chromeexperiments.com/globe) and the [PubNub Real-Time WebGL Visualization](http://www.pubnub.com/blog/creating-real-time-webgl-visualizations/).

![Screenshot](screenshot.png?raw=true =858x "Screenshot")
[Video Capture](https://vimeo.com/104759844) | [Running Demo](http://twitter-stream-globe.herokuapp.com/) (Availability of this server may fluctuate)

Installing and Running
----

Install [Node.js](http://nodejs.org/).

Clone GitHub repo:

```
https://github.com/twitterdev/twitter-stream-globe.git
```

Create a Twitter app and PubNub account:

- Create a [Twitter application](https://apps.twitter.com).
- Create a [PubNub account](https://admin.pubnub.com/#signup) (it's free).

Create a `config.json` file using `config.sample.json` as a template. Fill in your Twitter App API and PubNub keys.

Optionally, install the [Compass](http://compass-style.org/) Ruby Gem.

```
gem install compass
```

If you do not want Compass support, comment out this line in app.js

```
// app.use(require('node-compass')({mode: 'compress'}));
```

Install node module dependencies:

```
npm install
```

Run application:

```
npm start
```

Go to [http://localhost:3000](http://localhost:3000) in your browser.


Deploying
---
This application is ready to run on Heroku.

**Heroku**

You can deploy to Heroku via [Git](https://devcenter.heroku.com/articles/git) with the [Heroku toolbelt](https://toolbelt.heroku.com/).

Before deploying to Heroku, set your environment [config vars](https://devcenter.heroku.com/articles/config-vars) to mirror `config.json`, and set `NODE_ENV` to "production."

[![image](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/twitterdev/twitter-stream-globe/tree/master)

Tip: Managing the Twitter stream is more appropriately accomplished with a worker or background job. See this [gist](https://gist.github.com/stephenlb/36aef15a165d5bad0d82) for setting up a Twitter / PubNub [worker on Heroku](https://devcenter.heroku.com/articles/background-jobs-queueing). 


Resources
----
- [Twitter API statuses/filter stream](https://dev.twitter.com/streaming/reference/post/statuses/filter)
- [Twitter REST API Rate Limiting](https://dev.twitter.com/rest/public/rate-limiting)
- [AngularJS](https://angularjs.org/)
- [PubNub AngularJS SDK](https://github.com/pubnub/pubnub-angular)
- [Three.js](http://threejs.org/)
- https://integrity.mit.edu/handbook/writing-code
