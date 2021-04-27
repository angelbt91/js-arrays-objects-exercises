const studentsArray = ['Angel', 'Alfonso', 'Facundo', 'Eudald'];
const teachersArray = ['Alfonso', 'Eudald', 'Facundo', 'Angel'];

// 👀 Add the necessary code below to remove 'Alfonso' from studentsArray and add 'Elon' and 'Jeff' on its place
// 📝
const result = 'I want to be an array that contains all of you';
// 📝

const exercise13 = {
    id: 13,
    type: 'array',
    name: 'Concatenate two arrays',
    description: 'Modify 13.js to concatenate studentsArray and teachersArray into a single array.',
    hint: <p>Arrays have their own methods to manipulate their contents. Go <a
        href='https://www.w3schools.com/jsref/jsref_concat_array.asp' target='_blank'
        rel='noreferrer'>concat</a> it!</p>,
    solution: ['Angel', 'Alfonso', 'Facundo', 'Eudald', 'Alfonso', 'Eudald', 'Facundo', 'Angel'],
    result: result
}

export default exercise13;