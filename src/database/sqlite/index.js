const path = require('path');
const Database = require('better-sqlite3');

function sqliteConnection() {
  const db = new Database(path.resolve(__dirname, '..', 'database.db'));

  const connection = {
    get: async (sql, params = []) => db.prepare(sql).get(...(Array.isArray(params) ? params : [params])),
    run: async (sql, params = []) => db.prepare(sql).run(...(Array.isArray(params) ? params : [params])),
    exec: async (sql) => db.exec(sql),
  };

  return Promise.resolve(connection);
}

module.exports = sqliteConnection;