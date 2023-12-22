'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Doctor_infor extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Doctor_infor.belongsTo(models.AllCode, { foreignKey: 'priceId', targetKey: 'keyMap', as: 'priceTypeData' })
            Doctor_infor.belongsTo(models.AllCode, { foreignKey: 'paymentId', targetKey: 'keyMap', as: 'paymentTypeData' })
            Doctor_infor.belongsTo(models.AllCode, { foreignKey: 'provinceId', targetKey: 'keyMap', as: 'provinceTypeData' })
            Doctor_infor.belongsTo(models.User, { foreignKey: 'doctorId' })
        }
    };
    Doctor_infor.init({
        doctorId: DataTypes.INTEGER,
        priceId: DataTypes.STRING,
        provinceId: DataTypes.STRING,
        paymentId: DataTypes.STRING,
        specialtyId: DataTypes.INTEGER,
        clinicId: DataTypes.INTEGER,
        addressClinic: DataTypes.STRING,
        nameClinic: DataTypes.STRING,
        note: DataTypes.STRING,
        count: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Doctor_infor',
    });
    return Doctor_infor;
};