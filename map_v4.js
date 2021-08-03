//
function mapv4(callback, nigger) {
    var resultArray = [];
    for (var i = 0; i < nigger.length; i++) {
        resultArray.push(callback(nigger[i]));
    }
    return resultArray;   
}

const alternativeMap = (arr, callback) => {
  const resultArray = [];
  
  for (const element of arr) {
      resultArray.push(callback(element));
  }
  
  return resultArray;
};

var pidr = [4, 8, 16, 32];
var gandon = mapv4(item => item*2, pidr);
console.log(gandon);
console.log(alternativeMap([2, 4, 6], i => i * 3));
//
