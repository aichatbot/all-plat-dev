import React, { useState } from 'react';

const App = () => {
  const [result, setResult] = useState('');

  const tokenize = async (body) => {
    try {
      const res = await fetch('http://localhost:3000/api/tokenization', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const r = await res.json();
      if (res.ok) {
        setResult(r.data);
      } else {
        alert(result.message);
      }
    } catch (err) {
      throw err.message;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = document.forms.article;
    const sentence = form.sentence.value;
    const body = { sentence };
    tokenize(body);
  };

  return (
    <div>
      <h1>在线分词系统</h1>
      <form id="article">
        <textarea id="sentence" rows="10" cols="50" />
        <br />
        <button onClick={e => handleSubmit(e)}>提交</button>
      </form>
      <div>{`分词结果：${result}`}</div>
    </div>
  );
};

export default App;
