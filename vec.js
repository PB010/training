//
var Vector = function(x, y) {
    this.x = x || 0;
    this.y = y || 0;
};
Vector.prototype.add = function(v2) {
	return new Vector(this.x + v2.x, this.y + v2.y);
};
Vector.prototype.subtract = function(v2) {
	return new Vector(this.x - v2.x, this.y - v2.y);
};
console.log(new Vector(1, 2).add(new Vector(2, 3)));
console.log(new Vector(1, 2).subtract(new Vector(2, 3)));

//
