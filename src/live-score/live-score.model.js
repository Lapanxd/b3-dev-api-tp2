import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../common/database.config.js';

export class LiveScoreModel extends Model {
}

LiveScoreModel.init({
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  homeTeamName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  awayTeamName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  homeTeamScore: {
    type: DataTypes.INTEGER,
  },
  awayTeamScore: {
    type: DataTypes.INTEGER,
  },
}, { sequelize, modelName: LiveScoreModel.name, tableName: 'live-score' });
