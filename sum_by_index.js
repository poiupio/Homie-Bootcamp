const sumByIndex = elements => {
  let position = 0;
  let totalSum = 0;
  let eachDigit = [];

  elements.forEach(element => {
    eachDigit = element.split('.');

    if(!isNaN(eachDigit[position])){
        totalSum += parseFloat(eachDigit[position]);
        position++;
      }
  });

  return totalSum;
}

console.log(sumByIndex(["13.09.2017", "13.aa.2018", "44.09.2018", "13.09.7"]));