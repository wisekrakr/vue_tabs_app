module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || "wisetabs",
    user: process.env.DB_USER || "wisetabs",
    password: process.env.DB_PASSWORD || "wisetabs",
    options: {
      dialect: process.env.DIALECT || "sqlite",
      host: process.env.HOST || "localhost",
      storage: "./wisetabs.sqlite"
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || "jwtsecret"
  }
};
