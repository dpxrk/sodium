const express = require('express')
const { Users, Articles } = require('../db/models')
const router = require('./articles')

router.post('/users/:id', (req, res, next) => {
    const action = req.body.action

    }
})

