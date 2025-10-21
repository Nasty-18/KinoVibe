const pool = require('./config/config');

module.exports = {
    getAll: async () => {
        const result =await pool.query('SELECT * FROM film');
        return result.rows;
    },
    getbyid: async (id) => {
        result = await pool.query('SELECT * FROM film WHERE id = $1', [id])
    },
     update: async (id, nazvanie, opisanie, duration, year_of_release, id_strana) => {
    const result = await pool.query('UPDATE film SET nazvanie = $1, opisanie = $2, duration = $3, year_of_release = $4, id_strana = $5 WHERE id = $6', 
        [nazvanie, opisanie, duration, year_of_release, id_strana, id]
    );
    return result;
    },
    insert: async (id, nazvanie, opisanie, duration, year_of_release, id_strana) => {
    const result = await pool.query('INSERT film SET nazvanie = $1, opisanie = $2, duration = $3, year_of_release = $4, id_strana = $5 WHERE id = $6', 
        [nazvanie, opisanie, duration, year_of_release, id_strana, id]
    );
    return result;
    },
    delete: async (id) => {
    const result = await pool.query('DELETE FROM film WHERE id = $1', [id]);
    return result;
    },
}

    