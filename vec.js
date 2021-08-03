class Vector {
  x;
  y;
  
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
  add(vector) {
    if (!(vector instanceof Vector)) {
      throw new Error('Please provide an instance of the Vector class.');
    }
    
    return new Vector(this.x + vector.x, this.y + vector.y);
  }
  
  substract(vector) {
    if (!(vector instanceof Vector)) {
      throw new Error('Please provide an instance of the Vector class.');
    }
    
    return new Vector(this.x - vector.x, this.y - vector.y);
  }
}
