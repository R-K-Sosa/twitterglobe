twitterglobe
==========

A real-time 3D visualization of Tweets from around the world.

![image](https://user-images.githubusercontent.com/17933166/34364786-34fac1a2-ea57-11e7-8ef6-0d7a58c1590e.png)

This web app attaches to the Twitter API stream/filter and runs rudimentary sentiment analysis on Tweets with geo data. Tweets are published via PubNub Websockets and plotted to a 3D globe.

Inspired by the [Web GL Globe Chrome Experiment](http://www.chromeexperiments.com/globe) and the [PubNub Real-Time WebGL Visualization](http://www.pubnub.com/blog/creating-real-time-webgl-visualizations/).

![Screenshot](screenshot.png?raw=true =858x "Screenshot")

Clone GitHub repo:

```
https://github.com/R-K-Sosa/twitterglobe.git
```

Create a Twitter app and PubNub account:

- Create a [Twitter application](https://apps.twitter.com).
- Create a [PubNub account](https://admin.pubnub.com/#signup).

Create a `config.json` file using `config.sample.json` as a template. Fill in your Twitter App API and PubNub keys.

Installing and Running
----
Install [Node.js]:

-Installed/checked Homebrew package manager on a Mac
-Installed/checked XCode
-Installed/checked XCode Command Line Tools 
-Installed/checked Node JS and NPM (using Homebrew)
-Created/executed app to test if Node JS is running/working on Mac

-Signed up for a Gemfury account and uploaded a few npm packages to install them via command-line or as package.json dependencies.

-Updated npm config:
“npm config set registry https://npm.fury.io/username/”
“npm install” still produced “npm ERR! 403 Forbidden” every time I made an attempt

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
Run application on Heroku.

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
- // Code adapted from:
- // https://github.com/twitterdev/twitter-stream-globe
- // Based On: https://integrity.mit.edu/handbook/writing-code
- // Copyright (c) 2014 Twitter Inc. All rights reserved.
- // Use of this source code is governed by The MIT License (MIT) that can be
- // found in the LICENSE file.
- (Source: Google Chrome source code https://github.com/twitterdev/twitter-stream-globe retrieved in October 2016.)
