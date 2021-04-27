const studentsArray = ['Luis', 'Federico', 'Clàudia', 'Mario', 'Fran', 'Veronica'];
const teachersArray = ['Alfonso', 'Eudald', 'Facundo', 'Guillermo', 'Angel'];

// 👀 Add the necessary code below to make result contain a single array with all student names and all teacher names
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
    solution: ['Luis', 'Federico', 'Clàudia', 'Mario', 'Fran', 'Veronica', 'Alfonso', 'Eudald', 'Facundo', 'Guillermo', 'Angel'],
    result: result
}

export default exercise13;