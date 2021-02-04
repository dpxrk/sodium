const {
  db: { username, password, database, host },
} = require('./index');

module.exports = {
  development: {
    username,
    password,
    database,
    host,
    dialect: 'postgres',
    seederStorage: 'sequelize',
  },
  production: {
    use_env_variable: 'postgres://gwgufwbuckcrfq:daf6e50a8d4778de6bf00590e1de3456bb7448e13bb7baf010406ae6d8aff1c8@ec2-54-90-13-87.compute-1.amazonaws.com:5432/da0tjmm246fvhs',
    dialect: 'postgres',
    seederStorage: 'sequelize',
  }
};
