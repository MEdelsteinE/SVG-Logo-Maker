const {Triangle, Circle, Square} = require ('./shapes')

describe('Triangle', () => {
    test('renders correctly', () => {
        const shape = new Triangle();
        var color = '';
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" point="0, 150 200, 200 150, 0" fill="${this.color}"> `);
    });
    });


describe('Circle', () => {
    test('renders correctly', () => {
        const shape = new Circle();
        var color = '';
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="25" cy="75" r="20 height="100% width="100%" fill="${this.color}">`);
    });
    });

    describe('Square', () => {
        test('renders correctly', () => {
        const shape = new Square();
        var color = '';
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" y="50" height="100%" width="100%" fill="${this.color}"/>`);
        })
        
    });
    
    