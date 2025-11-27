const usersService = require('../models/users.js');

async function getUsers(req, res, next) {
  try {
    const users = await usersService.listUsers();
    res.json(users);
  } catch (err) {
    next(err);
  }
}

async function getUsersById(req, res, next) {
  try {
    const users = await usersService.getUsersById(req.params.id);
    if (!users) {
      return res.status(404).json({ error: 'Users not found' });
    }
    res.json(users);
  } catch (err) {
    next(err);
  }
}

async function insertUsers(req, res, next) {
  try {
    const newUsers = await insert(req.body);
    res.status(201).json(newUsers);
  } catch (err) {
    next(err);
  }
}

async function updateUsers(req, res, next) {
  try {
    const updatedUsers = await update(req.params.id, req.body);
    if (!updatedUsers) {
      return res.status(404).json({ error: 'Users not found' });
    }
    res.json(updatedUsers);
  } catch (err) {
    next(err);
  }
}


async function deleteUsers(req, res, next) {
  try {
    const deletedUsers = await delete(req.params.id);
    if (!deletedUsers) {
      return res.status(404).json({ error: 'Users not found' });
    }
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}



module.exports = {
  getUsers,
  getUsersById,
  insertUsers,
  updateUsers,
  deleteUsers,
};