//
Array.prototype.mymapv2 = function(callback) {
    const resultArray = [];
    for (let index = 0; index < sample.length; index++) {
        resultArray.push(callback(sample[index], index, sample));
    }
    return resultArray;
}
const sample = [4,7,9];
var output = sample.mymapv2(function(val, index, array) {
    console.log('val :', val, 'index :', index, 'array ;', array);
    return val*2;
})
console.log(output);
//
