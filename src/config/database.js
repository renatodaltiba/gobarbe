module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarbe',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};
