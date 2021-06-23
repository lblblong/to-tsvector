import { toTsvector } from '../src';

describe('index', () => {
  it('toTsvector', () => {
    console.log(toTsvector('I can do this all day'));
    console.log(toTsvector('I can do this all day, all day'));
    console.log(toTsvector('I can do this all day', { weight: 'A' }));
    console.log(
      toTsvector(['to_tsvector', 'postgres', 'js', 'implementation'])
    );
    console.log(toTsvector('测试 中文 输出效果', { weight: 'A' }));
    console.log(toTsvector(['你好', '世界']));
    console.log(toTsvector('龙 抬头 深圳', { weight: 'A' }));
    console.log(toTsvector('周末 深圳 龙 抬头 北京', { weight: 'B' }));
  });
});
