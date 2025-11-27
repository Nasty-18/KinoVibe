const filmService = require('../models/film.js');

async function getFilms(req, res) {
  try {
    const films = await filmService.getAll();
    res.json(films);
  } catch (err) {
  }
}

async function getFilmById(req, res, next) {
  try {
    const film = await filmService.getbyid(req.params.id);
    if (!film) {
      return res.status(404).json({ error: 'Film not found' });
    }
    res.json(film);
  } catch (err) {
    next(err);
  }
}

async function insertFilm(req, res, next) {
  try {
    const newFilm = await insert(req.body);
    res.status(201).json(newFilm);
  } catch (err) {
    next(err);
  }
}

async function updateFilm(req, res, next) {
  try {
    const updatedFilm = await update(req.params.id, req.body);
    if (!updatedFilm) {
      return res.status(404).json({ error: 'Film not found' });
    }
    res.json(updatedFilm);
  } catch (err) {
    next(err);
  }
}


async function deleteFilm(req, res, next) {
  try {
    const deletedFilm = await delete(req.params.id);
    if (!deletedFilm) {
      return res.status(404).json({ error: 'Film not found' });
    }
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}



module.exports = {
  getFilms,
  getFilmById,
  insertFilm,
  updateFilm,
  deleteFilm,
};