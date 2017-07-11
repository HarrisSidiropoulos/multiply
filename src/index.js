function multiplyBigNumWithOneNum(a, b) {
  const arr = a.split('').reverse();
  let result = '';
  let remainder = '0';
  while (arr.length > 0) {
    const num = arr.shift();
    const intNum = parseInt(num, 10);
    const intRemainder = parseInt(remainder, 10);
    const res = (intNum * b) + intRemainder;
    const resString = res.toString();
    result = (resString.length === 2 && arr.length > 0 ? resString.substr(1) : resString) + result;
    remainder = resString.length === 2 ? resString.substr(0, 1) : '0';
  }
  return result;
}

function multiplyBigNumbers(a, b) {
  const arr = b.split('').reverse();
  const resultArray = [];
  arr.forEach((value, index) => {
    const res = multiplyBigNumWithOneNum(a, value);
    resultArray.push(`${res}${'0'.repeat(index)}`);
  });
  let result = '';
  let remainder = '0';
  const l = Math.max(...resultArray.map(val => val.length));
  for (let i = 1; i <= l; i += 1) {
    let sum = 0;
    for (let g = 0; g < resultArray.length; g += 1) {
      const num = resultArray[g];
      if (i <= num.length) {
        sum += parseInt(num.substr(-i, 1), 10);
      }
    }
    sum += parseInt(remainder, 10);
    let sumStr = sum.toString();
    remainder = sumStr.length >= 2 ? sumStr.substr(0, sumStr.length - 1) : '0';
    sumStr = sumStr.length >= 2 ? sumStr.substr(sumStr.length - 1) : sumStr;
    result = sumStr + result;
    sum = 0;
  }
  return (remainder + result).replace(/^0+/, '');
}

function multiply(a, b) {
  const intA = parseInt(a, 10);
  const intB = parseInt(b, 10);
  let result = (intA * intB).toString();
  if (result.indexOf('e+') > 0 || isNaN(parseInt(result, 10))) {
    result = multiplyBigNumbers(a, b);
  }
  return result;
}

export {
  multiply,
  multiplyBigNumbers,
  multiplyBigNumWithOneNum,
};
