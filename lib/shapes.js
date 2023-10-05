class Shape {

    constructor() {
        this.color = ''
    }

    setColor(color) {
        this.color = (color);
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon height="100%" width="100%" point="0, 150 200, 200 150, 0" fill="${this.color}"> `
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="25" cy="75" r="20 height="100% width="100%" fill="${this.color}">`
    }
}

class Square extends Shape {
    render() {
        return `<rect x="50" y="50" height="100% width="100%" fill=${this.color}"> `
    }
}

module.exports = {Triangle, Circle, Square}