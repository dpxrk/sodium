const express = require('express');
const router = express.Router();
const { restoreUser } = require('../auth');
const { User, Category, Article, Article_category, Salt, Comment } = require('../db/models');
const { asyncHandler, csrfProtection } = require('./utils')


// Routes to get / post an existing article. && Routes to get all articles &&
// Routes to post a new article



router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
  //route to get a single post

  const articleId = parseInt(req.params.id, 10)
  const article = await Article.findByPk(articleId, {
    include: [Salt, Comment, User]
  })
  res.json({ article })
}))




//route to get all articles
router.get('/', asyncHandler(async (req, res) => {
  const articles = await Article.findAll()

  res.render('articles', { articles })
  // res.json({ articles })
}))



//route to create an article

router.get('/createArticle', csrfProtection, asyncHandler(async (req, res) => {

  res.render('createArticle', {csrfToken: req.csrfToken()})
}))

router.post('/createArticle', csrfProtection, asyncHandler(async (req, res) => {

  const { title, content, image } = req.body;

  const newArticle = await Article.create({
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
    authorId: req.session.auth.userId
  })


  res.redirect('/', { newArticle })
}))

//publish an article button will need to go around just like logout.


module.exports = router;
