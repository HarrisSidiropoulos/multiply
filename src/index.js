function multiplyInt(a, b) {
  const aa = a.split('').reverse();
  const bb = b.split('').reverse();

  const stack = [];

  for (let i = 0; i < aa.length; i += 1) {
    for (let j = 0; j < bb.length; j += 1) {
      const m = aa[i] * bb[j];
      stack[i + j] = (stack[i + j]) ? stack[i + j] + m : m;
    }
  }
  for (let i = 0; i < stack.length; i += 1) {
    const num = stack[i] % 10;
    const move = Math.floor(stack[i] / 10);
    stack[i] = num;

    if (stack[i + 1]) {
      stack[i + 1] += move;
    } else if (move !== 0) {
      stack[i + 1] = move;
    }
  }
  return stack.reverse().join('').replace(/^(0(?!$))+/, '');
}

const dotIndex = a => a.indexOf('.') >= 0 ? a.length - a.indexOf('.') - 1 : 0; // eslint-disable-line no-confusing-arrow
const dash = (a, b) => (/^-/.test(a) + /^-/.test(b)) === 1 ? '-' : ''; // eslint-disable-line no-confusing-arrow

function multiply(a, b) {
  let res = '0';
  let aa = a.replace(/^-/, '');
  let bb = b.replace(/^-/, '');
  if (!(/\..+/.test(aa)) && !(/\..+/.test(bb))) {
    res = multiplyInt(aa.replace('.', ''), bb.replace('.', ''));
  } else {
    if (/\..+/.test(aa)) aa = aa.replace(/0+$/, '');
    if (/\..+/.test(bb)) bb = bb.replace(/0+$/, '');
    const pos = dotIndex(aa) + dotIndex(bb);
    res = multiplyInt(aa.replace('.', ''), bb.replace('.', ''));
    res = (pos > res.length) ? '0'.repeat(pos - res.length) + res : res;
    res = `${res.substr(0, res.length - pos) || 0}.${res.substr(-pos)}`
      .replace(/0+$/, '')
      .replace(/\.$/, '');
  }
  return res && res !== '0' ? dash(a, b) + res : res;
}
export default multiply;
