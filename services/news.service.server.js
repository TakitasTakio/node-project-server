module.exports = function (app) {

    app.get('/api/news', findAllNews);

    app.post('/api/news', createNews);
    app.get('/api/news/:newsId', deleteNews);



    var newsModel = require('../models/news/news.model.server');



    function createNews(req, res) {
        var news = req.body;
        console.log('new News', news);
        newsModel.createNews(news)
            .then(function (news){
                res.json(news);
            })
    }

    function findAllNews(req, res) {
        newsModel.findAllNews()
            .then(function (newss) {
                res.send(newss);

            })

    }





    function deleteNews(req, res) {
        var newsId = req.params['newsId'];

        newsModel
            .deleteNews(newsId)
            .exec(function (err, newsId ) {
                if (err) {
                    console.log('It is error for deleting')
                }
                else{
                    res.json(newsId)
                }

            })

    }




};