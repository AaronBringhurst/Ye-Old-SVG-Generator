const { Circle, Triangle, Square } = require('./shapes');

describe('SVG Shapes', () => {
    describe('Circle', () => {
        it('should render a blue circle', () => {
            const circle = new Circle('blue');
            expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
        });
    });

    describe('Triangle', () => {
        it('should render a red triangle', () => {
            const triangle = new Triangle('red');
            expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="red" />');
        });
    });

    describe('Square', () => {
        it('should render a green square', () => {
            const square = new Square('green');
            expect(square.render()).toEqual('<rect width="150" height="150" x="75" y="25" fill="green" />');
        });
    });
});
