const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes.js');

class SVG {
    constructor() {
        this.textEl = '';
        this.shapeEl = '';
    }
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="100" height="100">${this.shapeEl}${this.textEl}</svg>`;
    }
    setTextEl(text, color) {
        this.textEl = `<text x="50%" y="50%" font-size="50px" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeEl(shape) {
        this.shapeEl = shape.render()
    }
}

function promptUser() {
    inquirer.prompt([
        {
            name: 'text',
            message: 'Please enter up to Three(3) characters.'
        },
        {
            name: 'textColor',
            message: 'Please enter a color or a hexidecimal number you want for the text'
        },
        {
            name: 'shapeColor',
            message: 'Please enter a color or hexidecimal number you want for the shape'
        },
        {
            type: 'list',
            name: 'shapes',
            message: 'Please pick which shape you would like ',
            choices: ['Triangle', 'Circle', 'Square'],
        },
    ]).then(function (answers) {
        let shape;
        switch (answers.shapes) {
            case 'Triangle':
                shape = new Triangle();
                break;
            case 'Circle':
                shape = new Circle();
                break;
            case 'Square':
                shape = new Square();
                break;
        }

        shape.setColor(answers.shapeColor)

        var svg = new SVG();
        svg.setTextEl(answers.text, answers.textColor)
        svg.setShapeEl(shape)
        const svgContent = svg.render();

        return fs.writeFile('logo.svg', svgContent, (err) => {
            if (err) throw err;
           
        });
    })
};

function init() { }
promptUser();

init();