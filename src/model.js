const Sequelize = require('sequelize');
const seq = require('./seq');

// 创建User模型。数据表的名字会改为复数users
const User = seq.define('user', {
  // id 会自动创建，并设为主键，自增
  userName: {
    type: Sequelize.STRING, // 值为varchar(255)
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  nickName: {
    type: Sequelize.STRING,
    comment: '昵称'
  },
  // 自动创建：createAt 和 updateAt

})

const Blog = seq.define('blog', {
  // id 会自动创建，并设为主键，自增
  title: {
    type: Sequelize.STRING, // 值为varchar(255)
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  userId: {
    type: Sequelize.INTEGER,
  },
  // 自动创建：createAt 和 updateAt

})

// 外键关联
Blog.belongsTo(User, {
  // 创建外键Blog.userId -> User.id
  foreignKey: 'userId'
});

// or:
User.hasMany(Blog, {
  // 创建外键Blog.userId -> User.id
  foreignKey: 'userId'
})

module.exports = {
  User,
  Blog
}
