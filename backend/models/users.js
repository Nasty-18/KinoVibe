const pool = require('./config/config');

module.exports = {
    getAll: async () => {
        const result =await pool.query('SELECT * FROM users');
        return result.rows;
    },
    getbyid: async (id) => {
        result = await pool.query('SELECT * FROM users WHERE id = $1', [id])
    },
    update: async (id, name_user, email, rassword, date_regist) => {
    const result = await pool.query('UPDATE users SET name_user = $1, email = $2, rassword = $3, date_regist = $4 WHERE id = $5', 
        [name_user, email, rassword, date_regist, id]
    );
    return result;
    },
    insert: async (id, name_user, email, rassword, date_regist) => {
    const result = await pool.query('INSERT users SET name_user = $1, email = $2, rassword = $3, date_regist = $4 WHERE id = $5', 
        [name_user, email, rassword, date_regist, id]
    );
    return result;
    },
    delete: async (id) => {
    const result = await pool.query('DELETE FROM users WHERE id = $1', [id]);
    return result;
    },
}