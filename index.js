const fs = require('fs');
const inquirer = require('nquirer');
const {Triangle, Circle, Square} = require('./lib/shapes.js');

class Svg {
    constructor() {
        this.textEl = '';
        this.shapeEl = '';
    }
    render() {
        return `<<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"${this.shapeEl}${this.textEl}></svg>`;
    }
    setTextEl(text, color){
        this.textEl = `<text x='100' y='75' font-size='50 text-anchor='middle' fill='${text}'>${color}</text>`
    }
    setShapeEl(text, color){
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
        name: 'text-color',
        message: 'Please enter a color or a hexidecimal number you want for the text'
       },
       {
        name: 'shape-color',
        message: 'Please enter a color or hexidecimal number you want for the shape'
       },
       {
        type: 'list',
        name: 'shapes',
        message: 'Please pick which shape you would like ',
        choices: ['Traingle', 'Circle', 'Square'],
       },
    ]),

    fs.writeFile('./logo.svg', svgContent, (err) => {
        if (err) throw err;
    });
};

function init() {}
promptUser();

init();