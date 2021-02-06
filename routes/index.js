var express = require('express');
var router = express.Router();
const { asyncHandler } = require('../routes/utils');
const { Article } = require('../db/models');


/* GET home page. */
router.get('/', asyncHandler(async (req, res) => {
  const articles = await Article.findAll();

  const randomArticles = [];
  const random = [];

  const iterations = Math.min(8, articles.length);
  for(let i = 0; i < iterations; i++) {
    let index = Math.floor((Math.random()) * (articles.length))
    while(random.includes(index)) {
      index = Math.floor((Math.random()) * (articles.length))
    }
    random.push(index)
    randomArticles.push(articles[index])
  };
  
  const latestArticles = await Article.findAll({
    order: [
      ['createdAt', 'DESC'],
    ],
    limit: 8
  });

  res.render('index', { title: 'Sodium', randomArticles, latestArticles });

}));

module.exports = router;
