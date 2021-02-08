const express = require('express');
const router = express.Router();
const { Comment } = require('../db/models')
const { asyncHandler } = require('./utils')
const { requireAuth } = require('../auth');



router.post('/:articleId/comments', requireAuth, asyncHandler(async (req, res) => {

  const articleId = parseInt(req.params.id);

  const comment = await Comment.create({
    userId: req.session.auth.userId,
    articleId: req.body.articleId,
    content: req.body.content
  })

  const comments = await Comment.findAll({
    where: { id: articleId }
  })

}));

module.exports = router;
