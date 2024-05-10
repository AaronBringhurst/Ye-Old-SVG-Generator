// This class is the base for all the shapes
class Shape {
  constructor(color) {
    this.color = color;
  }

  // This sets the color of the shape
  setColor(color) {
    this.color = color;
  }
}

// Circle class that extends the Shape class
class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

// Triangle class that extends the Shape class
class Triangle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

// Square class that extends the Shape class
class Square extends Shape {
  render() {
    return `<rect width="150" height="150" x="75" y="25" fill="${this.color}" />`;
  }
}

// Exporting the Circle, Triangle, and Square classes for use in other modules
module.exports = { Circle, Triangle, Square };
