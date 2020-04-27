const Crypto = require('crypto');
const uuid = require('uuid');
const multer = require('multer');

const User = require('../model/User');

const upload = multer({
  dest: './static/upload',
});

const apis = (app) => {
  app.get('/api/users', async (req, res) => {
    try {
      const users = await User.find();
      return res.json({
        data: users,
      });
    } catch (e) {
      return res.status(400).json({
        message: e.message,
      });
    }
  });

  app.post(
    '/api/users',
    async (req, res) => {
      try {
        const {
          username,
          password,
          confirmpass,
        } = req.body;
        if (!username) {
          return res.status(400).json({
            message: '没有输入用户名',
          });
        }
        if (!password) {
          return res.status(400).json({
            message: '没有输入密码',
          });
        }
        if (!confirmpass) {
          return res.status(400).json({
            message: '没有输入确认密码',
          });
        }
        if (password !== confirmpass) {
          return res.status(400).json({
            message: '密码与确认密码不一致',
            data: 'confirmpass',
          });
        }
        const user = await User.findOne({
          username,
        });
        if (user) {
          return res.status(400).json({
            message: '该用户名已被使用',
          });
        }
        const passwordCryp = Crypto.createHash('sha1').update(password).digest('hex');// 使用sha1算法给密码加密
        const newUser = {
          username,
          password: passwordCryp,
        };
        const newuser = new User(newUser);
        await newuser.save();
        return res.json({
          message: '新增用户成功',
        });
      } catch (e) {
        return res.status(400).json({
          message: e.message,
        });
      }
    },
  );

  app.post(
    '/api/users/login',
    async (req, res) => {
      try {
        const {
          username,
          password,
        } = req.body;
        if (!username) {
          return res.status(400).json({
            message: '没有输入用户名',
          });
        }
        if (!password) {
          return res.status(400).json({
            message: '没有输入密码',
          });
        }
        const passwordCryp = Crypto.createHash('sha1').update(password).digest('hex');// 加密密码
        const user = await User.findOne({
          username,
        });// 根据用户名查找用户
        if (!user) { // 如果数据库里没有这个用户
          return res.status(400).json({
            message: '该用户不存在',
          });
        }
        if (user.password !== passwordCryp) { // 如果用户的密码和数据库不一致
          return res.status(400).json({
            message: '密码错误，请重新输入',
          });
        }
        const tokenstr = uuid.v4();// 生成标识符
        const token = Crypto.createHash('sha1').update(tokenstr).digest('hex');// 加密标识符
        user.token = token;// 将用户的token修改为当前加密凭证
        await user.save();// 保存token到数据库
        return res.json({
          message: '成功登陆',
          data: {
            username: user.username,
            token: user.token,
          },
        });
      } catch (e) {
        return res.status(400).json({
          message: e.message,
        });
      }
    },
  );

  app.post(
    '/api/users/auth',
    async (req, res) => {
      try {
        const {
          username,
          token,
        } = req.body;
        if (!username) {
          return res.status(400).json({
            message: '没有输入用户名',
          });
        }
        if (!token) {
          return res.status(400).json({
            message: '没有输入token',
          });
        }
        const user = await User.findOne({
          username,
          token,
        }).select('-password -token');
        if (!user) {
          return res.status(400).json({
            message: 'token已过期，请重新登陆',
          });
        }
        return res.json({
          message: '成功验证',
          data: user,
        });
      } catch (e) {
        return res.status(400).json({
          message: e.message,
        });
      }
    },
  );

  app.post(
    '/api/users/logout',
    async (req, res) => {
      try {
        const {
          username,
          token,
        } = req.body;
        if (!username) {
          return res.status(400).json({
            message: '没有输入用户名',
          });
        }
        if (!token) {
          return res.status(400).json({
            message: '没有输入token',
          });
        }
        const user = await User.findOne({
          username,
          token,
        });
        if (!user) {
          return res.status(400).json({
            message: 'token已过期，请重新登陆',
          });
        }
        user.token = null;
        await user.save();
        return res.json({
          message: '退出成功',
        });
      } catch (e) {
        return res.status(400).json({
          message: e.message,
        });
      }
    },
  );

  app.patch(
    '/api/users',
    upload.single('avatar'),
    async (req, res) => {
      try {
        const {
          username, token, description,
        } = req.body;
        if (!username) {
          return res.status(400).json({
            message: '没有输入用户名',
          });
        }
        if (!token) {
          return res.status(400).json({
            message: '没有输入token',
          });
        }
        const user = await User.findOne({
          username,
          token,
        });
        if (!user) {
          return res.status(400).json({
            message: 'token已过期，请重新登陆',
          });
        }
        if (req.file) {
          user.avatar = req.file.filename;
        }
        user.description = description;
        await user.save();
        return res.json({ message: '修改用户资料成功' });
      } catch (e) {
        return res.status(400).json({ message: e.message });
      }
    },
  );

  app.get('/api/users/:username', async (req, res) => {
    try {
      const {
        username,
      } = req.params;
      if (!username) {
        return res.status(400).json({
          message: '没有输入用户名',
        });
      }
      const user = await User.findOne({ username })
        .select('-password -token')
        .populate('threads', 'title posttime');
      if (!user) {
        return res.status(400).json({
          message: '该用户不存在',
        });
      }
      return res.json({
        data: user,
      });
    } catch (e) {
      return res.status(400).json({
        message: e.message,
      });
    }
  });
};
module.exports.apis = apis;
