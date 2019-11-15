import Sequelize from 'sequelize';
import mongoose from 'mongoose';

import User from '../app/models/User';
import File from '../app/models/File';
import Appointment from '../app/models/Appointment';

import databaseConfig from '../config/database';

const models = [User, File, Appointment];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
    models.map(
      model => model.associate && model.associate(this.connection.models)
    );
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      'mongodb://omnistack:omnistack@cluster0-shard-00-00-bubnn.mongodb.net:27017,cluster0-shard-00-01-bubnn.mongodb.net:27017,cluster0-shard-00-02-bubnn.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',
      // 'mongodb+srv://celine:asenhaE25@gobarber-asajd.mongodb.net/test?retryWrites=true&w=majority',
      // 'mongodb://celine:asenhaE25@gobarber-shard-00-00-asajd.mongodb.net:27017,gobarber-shard-00-01-asajd.mongodb.net:27017,gobarber-shard-00-02-asajd.mongodb.net:27017/test?ssl=true&replicaSet=goBarber-shard-0&authSource=admin&retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
      }
    );
  }
}

export default new Database();
