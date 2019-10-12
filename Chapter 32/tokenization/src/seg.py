import jieba
import json

if __name__ == '__main__':
    sen = input('请输入一句话：')
    words = jieba.cut(sen)
    result = {"result": ' '.join(words)}
    print(json.dumps(result))
