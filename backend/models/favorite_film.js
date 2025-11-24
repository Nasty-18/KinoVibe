const pool = require('./config/config');

module.exports = {
    getAll: async () => {
        const result = await pool.query(`
            SELECT ff.*, f.nazvanie as film_name, u.name_user as user_name 
            FROM favorite_film ff
            JOIN film f ON ff.film_id = f.id
            JOIN users u ON ff.user_id = u.id
        `);
        return result.rows;
    },

    getByUserId: async (userId) => {
        const result = await pool.query(`
            SELECT ff.*, f.nazvanie as film_name, f.opisanie, f.duration, f.year_of_release
            FROM favorite_film ff
            JOIN film f ON ff.film_id = f.id
            WHERE ff.user_id = $1
        `, [userId]);
        return result.rows;
    },

    getByFilmId: async (filmId) => {
        const result = await pool.query(`
            SELECT ff.*, u.name_user, u.email
            FROM favorite_film ff
            JOIN users u ON ff.user_id = u.id
            WHERE ff.film_id = $1
        `, [filmId]);
        return result.rows;
    },

    getById: async (id) => {
        const result = await pool.query(`
            SELECT ff.*, f.nazvanie as film_name, u.name_user as user_name
            FROM favorite_film ff
            JOIN film f ON ff.film_id = f.id
            JOIN users u ON ff.user_id = u.id
            WHERE ff.id = $1
        `, [id]);
        return result.rows[0];
    },

    checkIfFavorite: async (userId, filmId) => {
        const result = await pool.query(`
            SELECT * FROM favorite_film 
            WHERE user_id = $1 AND film_id = $2
        `, [userId, filmId]);
        return result.rows.length > 0;
    },

    insert: async (userId, filmId, date_added = new Date()) => {
        const result = await pool.query(`
            INSERT INTO favorite_film (user_id, film_id, date_added) 
            VALUES ($1, $2, $3) 
            RETURNING *
        `, [userId, filmId, date_added]);
        return result.rows[0];
    },

    delete: async (id) => {
        const result = await pool.query('DELETE FROM favorite_film WHERE id = $1', [id]);
        return result;
    },

    deleteByUserAndFilm: async (userId, filmId) => {
        const result = await pool.query(`
            DELETE FROM favorite_film 
            WHERE user_id = $1 AND film_id = $2
        `, [userId, filmId]);
        return result;
    },

    getUserFavoritesCount: async (userId) => {
        const result = await pool.query(`
            SELECT COUNT(*) as favorites_count 
            FROM favorite_film 
            WHERE user_id = $1
        `, [userId]);
        return parseInt(result.rows[0].favorites_count);
    },

    getFilmFavoritesCount: async (filmId) => {
        const result = await pool.query(`
            SELECT COUNT(*) as favorites_count 
            FROM favorite_film 
            WHERE film_id = $1
        `, [filmId]);
        return parseInt(result.rows[0].favorites_count);
    }
};