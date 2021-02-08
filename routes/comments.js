const express = require('express');
const router = express.Router();
const { Comment } = require('../db/models')
const { asyncHandler } = require('./utils')
const { requireAuth } = require('../auth');



router.post('/:articleId/comments', requireAuth, asyncHandler(async (req, res) => {
  const articleId = parseInt(req.params.articleId);

  const comment = await Comment.create({
    userId: req.session.auth.userId,
    articleId: articleId,
    content: req.body.content
  })

  const comments = await Comment.findAll({
    where: { id: articleId }

  })

  res.json({content: req.body.content})
}));

module.exports = router;
