import jieba
import json
from urllib.parse import unquote

if __name__ == '__main__':
    sen = input('请输入一句话：')
    sen = unquote(sen)
    words = jieba.cut(sen)
    result = {"result": ' '.join(words)}
    print(json.dumps(result))
