const express = require('express')
const router = express.Router()

const db = require('../../models')
const Todo = db.Todo

// 詳細資料
router.get('/:id', (req, res) => {
  const id = req.params.id
  return Todo.findByPk(id) // find by primary-key
    .then(todo => res.render('detail', { todo: todo.toJSON() })) // to transfer plain object
    .catch(error => console.log(error))
})

module.exports = router