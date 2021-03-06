require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  ssl: true,
  dialectOptions: {
    ssl: { require: true },
  },
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  },
};
