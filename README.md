# to-tsvector

It is the js implementation of `to_tsvector` of `postgres`

# How to use

```typescript
import toTsvector from 'to-tsvector';

toTsvector('I can do this all day');
// 'i':1 'can':2 'do':3 'this':4 'all':5 'day':6

toTsvector('I can do this all day, all day')
// 'i':1 'can':2 'do':3 'this':4 'all':5,7 'day':6,8

toTsvector('I can do this all day', { weight: 'A' });
// 'i':1A 'can':2A 'do':3A 'this':4A 'all':5A 'day':6A

toTsvector(['to_tsvector', 'postgres', 'js', 'implementation']);
// 'to_tsvector':1 'postgres':2 'js':3 'implementation':4

toTsvector('测试 中文 输出效果', { weight: 'A' });
// '测试':1A '中文':2A '输出效果':3A

toTsvector(['你好', '世界']);
// '你好':1 '世界':2
```
