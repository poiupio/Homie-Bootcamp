const getMaxSum = (allNumbers) => {
  const maxSumRows = getMaxSumRows(allNumbers);
  const maxSumColumns = getMaxSumColumns(allNumbers);
  
  return maxSumRows > maxSumColumns ? maxSumRows : maxSumColumns;
}
  
const getMaxSumRows = (allNumbers) => {
  let maxSum = 0;

  allNumbers.forEach(row =>{
    sumRow = row.reduce((previousNumber, nextNumber) => previousNumber + nextNumber);
    if(sumRow > maxSum) { maxSum = sumRow };  
  });

  return maxSum;
}
  
const getMaxSumColumns = (allNumbers) => {
  let maxSum = 0;

  const transpose = allNumbers[0].map((col, index) => allNumbers.map(row => row[index]));
  transpose.forEach(col =>{
    sumcolumn = col.reduce((previousNumber, nextNumber) => previousNumber + nextNumber);
    if(sumcolumn > maxSum) { maxSum = sumcolumn };  
  });
  
  return maxSum;
}

allNumbers = [
  [6, 7, 8],
  [1, 4, 29, 2],
  [4, 78]
];

console.log(getMaxSum(allNumbers));