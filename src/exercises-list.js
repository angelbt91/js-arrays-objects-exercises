import solution1 from "./exercises/1";
import solution2 from "./exercises/2";
import solution3 from "./exercises/3";

export const exercisesList = [{
    id: 1,
    type: 'array',
    name: 'Create an array',
    description: 'Create an array that contains all student\'s names in the specified order.',
    result: ['Angel', 'Alfonso', 'Facundo', 'Eudald'],
    solution: solution1
}, {
    id: 2,
    type: 'array',
    name: 'Print the length of an array',
    hint: 'Don\'t hardcode it! Check https://www.w3schools.com/jsref/jsref_length_array.asp',
    description: 'Print the length of the students array',
    result: 6,
    solution: solution2
}, {
    id: 3,
    type: 'object',
    name: 'Create an object',
    description: 'Create an object that contains a \'learning\' property with \'full stack\' as the value.',
    result: {learning: 'full stack'},
    solution: solution3
}]