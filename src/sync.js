const seq = require('./seq');

require('./model');

// 测试连接
seq.authenticate().then((data) => {
  console.log('auth ok', data)
}).catch((err) => {
  console.log('err', err)
})

// 执行同步,force为true表示如果原来有表就删掉重新建立
seq.sync({force: true}).then(() => {
  console.log('async ok');
  process.exit();
})