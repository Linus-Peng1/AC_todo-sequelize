const express = require('express')
const router = express.Router()

const db = require('../../models')
const Todo = db.Todo
const User = db.User

// 首頁
router.get('/', (req, res) => {
  User.findByPk(req.user.id) // user 已在 passport 被存進 req
    .then(user => {
      if (!user) throw new Error('user not found')

      return Todo.findAll({
        raw: true,
        nest: true,
        where: { UserId: req.user.id }
      })
    })
    .then((todos) => { return res.render('index', { todos }) })
    .catch((error) => { return res.status(422).json(error) })
})

module.exports = router