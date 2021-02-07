const express = require('express');
const router = express.Router();
const { restoreUser, requireAuth } = require('../auth');
const { User, Category, Article, Article_category, Salt, Comment } = require('../db/models');
const { asyncHandler, csrfProtection } = require('./utils')



// Routes to get / post an existing article. && Routes to get all articles &&
// Routes to post a new article



router.post('/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {

  let clicked = req.body.clicked;
  let articleId = parseInt(req.params.id);
  if(clicked){
    let { email, userId } = req.session.auth;

    let saltData = await Salt.findAll({
      where: {articleId:articleId, userId:userId}
    })
    if (saltData.length === 0) {
      //Place data into the salt table
      const saltedUser = Salt.build({articleId:articleId, userId:userId});
      await saltedUser.save();

    } else {
      //Remove data from the salt table
      const deletedUser = await Salt.destroy({where: {articleId:articleId, userId:userId}});

    }

  }
    let salts = await Salt.findAll({
        where: { articleId: articleId }
      });
      let saltsCount = { saltsCount:salts.length};
      console.log(saltsCount);
      res.json(saltsCount);

      const comments = await Comment.findAll({
        where: { id: articleId }
      })


  // let { email, userId } = req.session.auth;
  // let articleId = parseInt(req.params.id);
  // let saltData = await Salt.findAll({
  //   where: {articleId:articleId, userId:userId}
  // })
  // if (saltData.length == 0) {
  //   //Place data into the salt table
  //   const saltedUser = Salt.build({articleId:articleId, userId:userId});
  //   await saltedUser.save();

  // } else {
  //   //Remove data from the salt table
  //   const deletedUser = Salt.destroy({where: {articleId:articleId, userId:userId}});

  // }

  // const article = await Article.findByPk(articleId, {
  //   include: [Salt, Comment, User]
  // });
  // const comments = await Comment.findAll({
  //   where: { id: articleId }
  // });
  // const salts = await Salt.findAll({
  //   where: { articleId: articleId }
  // });
  // const saltsCount = { saltsCount:salts.length};
  // console.log(saltsCount);
  // res.render('article', { article, comments , saltsCount });
}))


router.get('/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
  //route to get a single post

  const articleId = parseInt(req.params.id, 10)

  const article = await Article.findByPk(articleId, {
    include: [Salt, Comment, User]
  })
  const comments = await Comment.findAll({
    where: { id: articleId }
  })
  // const salts = await Salt.findAll({
  //   where: { id: articleId }
  // })

   res.render('article', { article, comments });
}))

//route to get all articles
router.get('/', requireAuth, asyncHandler(async (req, res) => {
  const articles = await Article.findAll()
  res.render('articles', { articles })

}))



//route to create an article

router.get('/create', requireAuth, csrfProtection, asyncHandler(async (req, res) => {

  res.render('create', {csrfToken: req.csrfToken()})
}))

router.post('/create', requireAuth, csrfProtection, asyncHandler(async (req, res) => {

  const { title, content, image } = req.body;

  const newArticle = await Article.create({
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
    authorId: req.session.auth.userId
  })


  res.redirect(`/articles/${newArticle.id}`)
}))

//publish an article button will need to go around just like logout.


module.exports = router;
