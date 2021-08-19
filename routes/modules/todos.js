const express = require('express')
const router = express.Router()

const db = require('../../models')
const Todo = db.Todo

// 詳細資料
router.get('/:id', (req, res) => {
  const UserId = req.user.id
  const id = req.params.id
  return Todo.findOne({
    where: { id, UserId } // 尋找符合 id = id 及 UserId = UserId 的 todo
  })
    .then(todo => res.render('detail', { todo: todo.toJSON() })) // to transfer plain object
    .catch(error => console.log(error))
})

module.exports = router