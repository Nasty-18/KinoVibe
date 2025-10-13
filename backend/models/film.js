const pool = require('./config/config');

module.exports = {
    getAll: async () => {
        const result =await pool.query('SELECT * FROM film');
        return result.rows;
    },
    getbyid: async (id) => {
        result = await pool.query('SELECT * FROM film WHERE id = $1', [id])
    },
    update: async (nazvanie,opis) => {
        result = await pool.query('UPDATE film set ');
    }
}