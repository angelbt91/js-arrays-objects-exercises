const studentsArray = ['Angel', 'Alfonso', 'Facundo', 'Eudald'];
const teachersArray = ['Alfonso', 'Eudald', 'Facundo', 'Angel'];

// 👀 Add the necessary code below to remove 'Alfonso' from studentsArray and add 'Elon' and 'Jeff' on its place
// 📝
const result = 'I want to be an array that contains all of you';
// 📝

const exercise13 = {
    id: 13,
    type: 'array',
    name: 'Remove and add elements at any position in an array',
    description: 'Modify 12.js to remove the second student and add two new students in their place.',
    hint: <p>Arrays have their own methods to manipulate their contents. Go <a
        href='https://www.w3schools.com/jsref/jsref_splice.asp' target='_blank'
        rel='noreferrer'>splice</a> it!</p>,
    solution: ['Angel', 'Elon', 'Jeff', 'Facundo', 'Eudald'],
    result: result
}

export default exercise13;