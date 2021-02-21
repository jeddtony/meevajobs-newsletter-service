module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "qwertyuiop",
    DB: "newsletter_service",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };