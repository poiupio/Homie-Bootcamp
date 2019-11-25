const sumByIndex = elements => {
  let position = 0;
  let totalSum = 0;
  let eachDigit = [];

  elements.forEach(element => {
    digits = element.split('.');
    if(isNaN(digits[position])){return}
    
    totalSum += parseFloat(digits[position]);
    position++;
  });

  return totalSum;
}

console.log(sumByIndex(["13.09.2017", "13.aa.2018", "44.09.2018", "13.09.7"]));
