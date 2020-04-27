import { PythonShell } from 'python-shell';

const api = (app) => {
  app.post('/api/tokenization', async (req, res) => {
    try {
      const { sentence } = req.body;

      const pyshell = new PythonShell(
        'seg.py',
        { scriptPath: '/Users/aichatbot/tokenization/src' },
      );
      pyshell.send(encodeURI(sentence));
      pyshell.on('message', (message) => {
        const output = JSON.parse(message);
        return res.json({
          message: '分词成功',
          data: output.result,
        });
      });
      pyshell.end((err) => { if (err) throw err; });
    } catch (e) {
      return res.status(400).json({
        message: e.message,
      });
    }
  });
};

export default api;
