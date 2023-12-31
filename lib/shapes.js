class Shape {

    constructor() {
        this.color = ''
    }

    setColor(color) {
        this.color = color;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="0,100 100,100 50,0" fill="${this.color}"/>`;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="50" cy="50" r="40" fill="${this.color}"/>`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="50" y="50" width="100%" height="100%" fill="${this.color}"/>`;
    }
}

module.exports = {Triangle, Circle, Square}