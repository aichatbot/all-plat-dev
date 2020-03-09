import mongoose from 'mongoose';
import User from '../model/User';
import Thread from '../model/Thread';
import Comment from '../model/Comment';

const threadAPIs = (app) => {
  app.post(
    '/api/threads', // 新增帖子
    async (req, res) => {
      try {
        const {
          username,
          token,
          title,
          content,
        } = req.body;
        if (!username) {
          return res.status(400).json({
            message: '没有获取到用户名',
          });
        }
        if (!token) {
          return res.status(400).json({
            message: '没有获取到身份凭证',
          });
        }
        if (!title) {
          return res.status(400).json({
            message: '没有输入帖子标题',
          });
        }
        if (!content) {
          return res.status(400).json({
            message: '没有输入帖子内容',
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
        const newThread = {
          title,
          content,
          author: user,
        };
        const thread = new Thread(newThread);
        await thread.save();
        user.threads.push(thread);
        await user.save();
        return res.json({
          message: '新增帖子成功',
        });
      } catch (e) {
        return res.status(400).json({
          message: e.message,
        });
      }
    },
  );

  app.post(
    '/api/comments/:tid', // 新增回复
    async (req, res) => {
      try {
        const {
          tid,
        } = req.params;
        const {
          username,
          token,
          content,
        } = req.body;
        if (!tid) {
          return res.status(400).json({
            message: '没有输入帖子ID',
          });
        }
        if (!username) {
          return res.status(400).json({
            message: '没有输入用户名',
          });
        }
        if (!token) {
          return res.status(400).json({
            message: '没有输入身份凭证',
          });
        }
        if (!content) {
          return res.status(400).json({
            message: '没有输入回复内容',
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
        const thread = await Thread.findById(tid);
        if (!thread) {
          return res.status(400).json({
            message: '该帖子不存在',
          });
        }
        const newComment = {
          content,
          author: user,
          target: tid,
        };
        const comment = new Comment(newComment);
        await comment.save();
        return res.json({
          message: '新增回复成功',
        });
      } catch (e) {
        return res.status(400).json({
          message: e.message,
        });
      }
    },
  );

  app.get(
    '/api/threads',
    async (req, res) => {
      try {
        const threads = await Thread.find()
          .populate('author', 'username avatar');
        return res.json({
          data: threads,
        });
      } catch (e) {
        return res.status(400).json({
          message: e.message,
        });
      }
    },
  );

  app.get(
    '/api/threads/:tid',
    async (req, res) => {
      try {
        const {
          tid,
        } = req.params;
        if (!tid) {
          return res.status(400).json({
            message: '没有输入帖子ID',
          });
        }
        const thread = await Thread.findById(tid)
          .populate('author', 'username description avatar');
        if (!thread) {
          return res.status(400).json({
            message: '该帖子不存在',
          });
        }
        const comments = await Comment.find({ target: tid })
          .populate('author', 'username avatar description');
        return res.json({
          data: { thread, comments },
        });
      } catch (e) {
        return res.status(400).json({
          message: e.message,
        });
      }
    },
  );

  app.patch(
    '/api/threads/:tid',
    async (req, res) => {
      try {
        const {
          tid,
        } = req.params;
        const {
          username,
          token,
          title,
          content,
        } = req.body;
        if (!tid) {
          return res.status(400).json({
            message: '没有获取到帖子ID',
          });
        }
        if (!username) {
          return res.status(400).json({
            message: '没有获取到用户名',
          });
        }
        if (!token) {
          return res.status(400).json({
            message: '没有输入token',
          });
        }
        if (!title) {
          return res.status(400).json({
            message: '没有输入修改标题',
          });
        }
        if (!content) {
          return res.status(400).json({
            message: '没有输入修改内容',
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
        const thread = await Thread.findById(tid);
        if (!thread) {
          return res.status(400).json({
            message: '该帖子不存在',
          });
        }
        if (String(user._id) !== String(thread.author)) {
          return res.status(400).json({
            message: '你不是该贴的作者',
          });
        }
        thread.title = title;
        thread.content = content;
        await thread.save();
        return res.json({
          message: '修改帖子内容成功',
        });
      } catch (e) {
        return res.status(400).json({
          message: e.message,
        });
      }
    },
  );

  app.delete(
    '/api/threads/:tid',
    async (req, res) => {
      try {
        const {
          tid,
        } = req.params;
        if (!tid) {
          return res.status(400).json({
            message: '没有输入帖子ID',
          });
        }
        const {
          username,
          token,
        } = req.body;
        if (!username) {
          return res.status(400).json({
            message: '没有获取到用户名',
          });
        }
        if (!token) {
          return res.status(400).json({
            message: '没有获取到token',
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
        const thread = await Thread.findById(tid);
        if (!thread) {
          return res.status(400).json({
            message: '该帖子不存在',
          });
        }
        if (String(user._id) !== String(thread.author)) {
          return res.status(400).json({
            message: '你不是该贴的作者',
          });
        }
        await Comment.deleteMany({
          target: mongoose.Types.ObjectId(tid),
        });
        user.threads.pull(thread);
        await user.save();
        await thread.remove();
        return res.json({
          message: '删除帖子成功',
        });
      } catch (e) {
        return res.status(400).json({
          message: e.message,
        });
      }
    },
  );
};

export default threadAPIs;
