// src/models/panVerificationModel.js
const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const PanVerification = sequelize.define('pan_verification', {
  request_id: { type: DataTypes.INTEGER, allowNull: true },
  pannumber: { type: DataTypes.STRING, allowNull: true },
  refid: { type: DataTypes.INTEGER, allowNull: true },
  client_id: { type: DataTypes.STRING, allowNull: true },
  full_name: { type: DataTypes.STRING, allowNull: true },
  category: { type: DataTypes.STRING, allowNull: true },
  statuscode: { type: DataTypes.INTEGER, allowNull: true },
  status: { type: DataTypes.BOOLEAN, allowNull: true },
  message: { type: DataTypes.STRING, allowNull: true },
  response: { type: DataTypes.JSON, allowNull: true },
  created_at: { type: DataTypes.DATE, defaultValue: sequelize.literal('CURRENT_TIMESTAMP') },
  updated_at: { type: DataTypes.DATE, defaultValue: sequelize.literal('CURRENT_TIMESTAMP') },
}, {
    tableName: 'pan_verification', // Specify the table name explicitly
    timestamps: true,
    underscored: true,
    createdAt: 'created_at', // Specify custom column names if needed
    updatedAt: 'updated_at'
});

module.exports = PanVerification;
