const { getAll, create, getOne, remove, update, login, getLoggedUser } = require('../controllers/user.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const userRouter = express.Router();

userRouter.route('/') // /users
  .get(verifyJWT, getAll)
  .post(create);

userRouter.route('/login')
  .post(login);

userRouter.route('/me')
  .get(verifyJWT, getLoggedUser);

userRouter.route('/:id') // /users/4
  .get(verifyJWT, getOne)
  .delete(remove)
  .put(update);

  

module.exports = userRouter;