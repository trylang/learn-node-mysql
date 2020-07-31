const Sequelize = require('sequelize');

const conf = {
  host: 'localhost',
  dialect: 'mysql'
};

// // 线上环境，使用连接池
// conf.pool = {
//   max: 5, // 连接池中最大的连接数量
//   min: 0, // 最小
//   idle: 10000 // 如果一个连接池 10s之内没有被使用，则释放
// }

const seq = new Sequelize('koa2-weibo-db', 'root', 'l1111111', conf);


// 测试连接
// seq.authenticate().then((data) => {
//   console.log('ok', data)
// }).catch((err) => {
//   console.log('err', err)
// })

module.exports = seq;
