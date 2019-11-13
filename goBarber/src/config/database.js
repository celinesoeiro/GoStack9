module.exports = {
  dialect: 'postgres',
  host: '192.168.0.29',
  username: 'postgres',
  password: 'docker',
  database: 'GoBarber',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
