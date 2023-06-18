// for stable to demo
module.exports = {
  HOST: 'sql12.freesqldatabase.com',
  USER: 'sql12626833',
  PASSWORD: 'CBI1a1QWlK',
  PORT: 3306,
  DB: 'sql12626833',
  dialect: 'mysql',
  pool: {
    max: 4,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

// for backup - develop
// module.exports = {
//   HOST: 'sql12.freemysqlhosting.net',
//   USER: 'sql12625914',
//   PASSWORD: 'TWiJmHGthm',
//   PORT: 3306,
//   DB: 'sql12625914',
//   dialect: 'mysql',
//   pool: {
//     max: 4,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// };
