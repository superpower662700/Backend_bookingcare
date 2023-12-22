'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => { // up nên không thể cập nhật phải xóa bảng r chạy lại 
        await queryInterface.createTable('AllCodes', {
            // key: DataTypes.STRING,
            // type: DataTypes.STRING,
            // valueEn: DataTypes.STRING,
            // valueVi: DataTypes.STRING,
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            keyMap: {
                type: Sequelize.STRING
            },
            type: {
                type: Sequelize.STRING
            },
            valueEn: {
                type: Sequelize.STRING
            },
            valueVi: {
                type: Sequelize.STRING
            },

            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('allcodes');
    }
};