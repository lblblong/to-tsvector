export const toTsvector = (
  fragment: string | string[],
  options?: { weight?: string }
) => {
  const words =
    typeof fragment === 'string'
      ? fragment
          .replace(
            /[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g,
            ' '
          )
          .replace(/\s+/g, ' ')
          .trim()
          .toLowerCase()
          .split(' ')
      : fragment;

  const wordAst = new Map<string, number[]>();
  for (let i = 0; i < words.length; i++) {
    const key = words[i];
    const result = wordAst.get(key);
    if (result) {
      result.push(i + 1);
    } else {
      wordAst.set(key, [i + 1]);
    }
  }

  const result = [];

  for (const k of wordAst.keys()) {
    let it = `'${k}':${wordAst
      .get(k)!
      .map((w) => {
        if (options?.weight) return w + options.weight;
        return w;
      })
      .join(',')}`;
    result.push(it);
  }

  return result.join(' ');
};

export default toTsvector;
