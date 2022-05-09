const imagePath = "airlines"

module.exports = (sequelize, Sequelize) => {
    const Airline = sequelize.define('airlines', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        two_letter_code: {
            type: Sequelize.STRING
        },
        company_name: {
            type: Sequelize.STRING,
        },
        country: {
            type: Sequelize.STRING
        },  
    },{
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',      
        paranoid: true
    });

    return Airline;
}   