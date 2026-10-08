const checkLength = (string, maxSymbols) => string.length <= maxSymbols;
checkLength('yesterday',5);

const checkPalindrome = (string) => {
  const stringRegister = string.toLowerCase();
  let invertedString = '';
  for (let i = stringRegister.length - 1; i >= 0; i--) {
    if (invertedString[i] !== ' ') {
      invertedString += stringRegister[i];
    }
  }
  return invertedString === stringRegister;
};
checkPalindrome('уж истово вот сижу');
