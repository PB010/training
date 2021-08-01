//
function mapv4(callback, nigger) {
    var resultArray = [];
    for (var i = 0; i < nigger.length; i++) {
        resultArray.push(callback(nigger[i]));
    }
    return resultArray;   
}
var pidr = [4, 8, 16, 32];
var gandon = mapv4(item => item*2, pidr);
console.log(gandon);
//