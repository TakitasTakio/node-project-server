var mongoose = require('mongoose');
var newsSchema = mongoose.Schema({
    title: String,
    author: String,
    url: String,
    urlToImage: String,
    publishedAt: Date,

}, {collection: 'news'});
module.exports = newsSchema;