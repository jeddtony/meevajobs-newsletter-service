module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("user", {
      email: {
        type: Sequelize.STRING,
        unique: true
      },
      name: {
        type: Sequelize.STRING
      },
      active: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Tutorial;
  };