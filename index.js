// Import all the modules
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

// This sets the questions for the CLI
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo:',
        validate: input => input.length <= 3 ? true : 'Text must be up to three characters.'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for the logo:',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color for the shape (name or hex):'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color for the text (name or hex):'
    }
];

// This builds the SVG based on the user input
function generateSVG({ text, textColor, shape, shapeColor }) {
    const dimensions = { width: 300, height: 200 };
    let shapeSVG;

    switch (shape) {
        case 'circle':
            shapeSVG = new Circle(shapeColor).render();
            break;
        case 'triangle':
            shapeSVG = new Triangle(shapeColor).render();
            break;
        case 'square':
            shapeSVG = new Square(shapeColor).render();
            break;
    }

    return `<svg width="${dimensions.width}" height="${dimensions.height}" xmlns="http://www.w3.org/2000/svg">
        ${shapeSVG}
        <text x="150" y="100" font-family="Arial" font-size="20" fill="${textColor}" text-anchor="middle" dominant-baseline="central">${text}</text>
    </svg>`;
}

// This saves the SVG content.
function saveSVG(content) {
    fs.writeFile('./dist/logo.svg', content, err => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('Generated logo.svg');
        }
    });
}

// This starts the promt for the User in the CLI
inquirer.prompt(questions).then(answers => {
    const svgContent = generateSVG(answers);
    saveSVG(svgContent);
});
