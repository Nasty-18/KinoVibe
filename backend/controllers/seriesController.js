const seriesService = require('../models/series.js');

async function getSeries(req, res, next) {
  try {
    const series = await seriesService.listSeries();
    res.json(series);
  } catch (err) {
    next(err);
  }
}

async function getSeriesById(req, res, next) {
  try {
    const series = await seriesService.getSeriesById(req.params.id);
    if (!series) {
      return res.status(404).json({ error: 'Series not found' });
    }
    res.json(series);
  } catch (err) {
    next(err);
  }
}

async function insertSeries(req, res, next) {
  try {
    const newSeries = await insert(req.body);
    res.status(201).json(newSeries);
  } catch (err) {
    next(err);
  }
}

async function updateSeries(req, res, next) {
  try {
    const updatedSeries = await update(req.params.id, req.body);
    if (!updatedSeries) {
      return res.status(404).json({ error: 'Series not found' });
    }
    res.json(updatedSeries);
  } catch (err) {
    next(err);
  }
}


async function deleteSeries(req, res, next) {
  try {
    const deletedSeries = await delete(req.params.id);
    if (!deletedSeries) {
      return res.status(404).json({ error: 'Series not found' });
    }
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}



module.exports = {
  getSeries,
  getSeriesById,
  insertSeries,
  updateSeries,
  deleteSeries,
};