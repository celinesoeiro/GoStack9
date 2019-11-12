module.exports = {
  dialect: 'postgres',
  host: '192.168.0.29',
  username: 'postgres',
  password: 'docker',
  database: 'GymPoint',
  define: {
    timestamps: true, // saber quando registro foi criado/editado
    underscored: true,
    underscoredAll: true,
  },
};
