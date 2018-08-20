// module dependencies
require('dotenv').config();
const stream = require('getstream');

// connect to stream via client
const client = stream.connect(process.env.STREAM_API_KEY, process.env.STREAM_API_KEY_SECRET);

// generate a random numbers
const userId = Math.floor(Math.random() * 50);
const postId = Math.floor(Math.random() * 25);

// instantiate a feed
const user = client.feed('user', userId);

// build a new activity
const activity = {
    actor: userId,
    verb: 'post',
    object: postId,
    foreign_id: `post:${postId}`
};

// create a new activity
user.addActivity(activity);
