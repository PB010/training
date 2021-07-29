//
Array.prototype.mymapv2 = function(callback) {
    var resultArray = [];
    for (let index = 0; index<this.length; index++) {
        resultArray.push(callback(this[index]));
    }
    return resultArray;
}
var input = [4,7,9];
var output = input.mymapv2(item => item*2);
console.log(output);
//
