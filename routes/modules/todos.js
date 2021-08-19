const express = require('express')
const router = express.Router()

const db = require('../../models')
const Todo = db.Todo

// 創建資料
router.get('/new', (req, res) => {
  return res.render('new')
})

router.post('/', (req, res) => {
  const UserId = req.user.id // user 已在 passport 被存進 req
  const name = req.body.name.trim()
  const errors = []

  if (!name) {
    errors.push({ 'message': '欄位不可為空白。' })
    return res.render('new', { errors })
  }

  return Todo.create({ name, UserId })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// 編輯資料
router.get('/:id/edit', (req, res) => {
  const UserId = req.user.id
  const id = req.params.id

  return Todo.findOne({ where: { id, UserId } })
    .then(todo => res.render('edit', { todo: todo.get() })) // 轉換 todo 資料
    .catch(error => console.log(error))
})

router.put('/:id', (req, res) => {
  const UserId = req.user.id
  const id = req.params.id
  const { name, isDone } = req.body
  const errors = []

  if (!(name.trim())) {
    errors.push({ 'message': '欄位不可為空白。' })
    return res.render('edit', { errors })
  }

  return Todo.findOne({ where: { id, UserId } })
    .then(todo => {
      todo.name = name
      todo.isDone = isDone === 'on'
      return todo.save()
    })
    .then(() => res.redirect(`/todos/${id}`))
    .catch(error => console.log(error))
})

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