module.exports = function check(str, bracketsConfig) {
  const matching = {};
  const openBrackets = [];
  bracketsConfig.forEach(element => {
    matching[element[1]] = element[0];
    openBrackets.push(element[0]);
  });

  const stack = [];

  for (let i = 0; i < str.length; i++) {

    const curentBracket = str[i];
    
    if (stack.length > 0) {
      const top = stack[stack.length - 1];
      if (matching[curentBracket] === top) {
        stack.pop();
        continue;
      }
    }

    if (openBrackets.includes(curentBracket)) {
      stack.push(curentBracket);
    } else {
      return false;
    }

  }
  return stack.length === 0;
}
