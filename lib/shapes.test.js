const {Triangle, Circle, Square} = require ('./shapes')

describe('Triangle', () => {
    test('renders correctly', () => {
        const shape = new Triangle();
        var color = '';
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon points="0,100 100,100 50,0" fill="${color}"/>`);
    });
    });


describe('Circle', () => {
    test('renders correctly', () => {
        const shape = new Circle();
        var color = '';
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="50" cy="50" r="40" fill="${color}"/>`);
    });
    });

    describe('Square', () => {
        test('renders correctly', () => {
        const shape = new Square();
        var color = '';
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" y="50" width="100%" height="100%" fill="${color}"/>`);
        })
        
    });
    
    