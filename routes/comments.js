const express = require('express');
const router = express.Router();
const { Comment } = require('../db/models')
const { asyncHandler } = require('./utils')
const { requireAuth } = require('../auth');



router.post('/:articleId/comments', asyncHandler(async (req, res) => {

  let articleId = parseInt(req.params.id);

  const comments = await Comment.findAll({
    where: { id: articleId }
  })

}));

module.exports = router;
