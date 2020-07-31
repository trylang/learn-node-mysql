const {Blog, User} = require('./model');

!(async function() {

  // 创建用户
  const zhangsan = await User.create({
    userName: 'zhangsan',
    password: '123',
    nickName: '张三'
  });
  const zhangsanId = zhangsan.dataValues.id;
  console.log('zhangsanid: ', zhangsanId);
  const lisi = await User.create({
    userName: 'lisi',
    password: '123',
    nickName: '李四'
  });
  const lisiId = lisi.dataValues.id;

  const blog1 = await Blog.create({
    title: 'blog1',
    content: '内容1',
    userId: zhangsanId
  });

  const blog2 = await Blog.create({
    title: 'blog2',
    content: '内容2',
    userId: lisiId
  });

  const blog3 = await Blog.create({
    title: 'blog3',
    content: '内容3',
    userId: zhangsanId
  });

  const blog4 = await Blog.create({
    title: 'blog4',
    content: '内容4',
    userId: lisiId
  });

})();