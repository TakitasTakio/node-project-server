var mongoose = require('mongoose');
var newsSchema = require('./news.schema.server');
var newsModel = mongoose.model('NewsModel', newsSchema);





function createNews(news) {
    return newsModel.create(news);
}

function findNewsById(courseId) {
    return newsModel.findById(newsId);
}

function findAllNews(){
    return newsModel.find();

}

function deleteNews(newsId){
    return newsModel.findByIdAndRemove(newsId);
}



var api ={
   createNews: createNews,
    findAllNews: findAllNews,
    findNewsById: findNewsById,
    deleteNews: deleteNews,

};

module.exports =api;