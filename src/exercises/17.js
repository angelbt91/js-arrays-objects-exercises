const studentsArray = ['Luis', 'Federico', 'Clàudia', 'Mario', 'Fran', 'Veronica'];

// 👀 Edit below the variable 'result' to make it contain every name with a 💖 at the end
// 👀 using the map() method to iterate over studentsArray
// 📝
const result = 'I want to contain an array with your names and a 💖 at the end'
// 📝

const exercise17 = {
    id: 17,
    type: 'array',
    name: 'Modify each element in an array',
    description: 'Modify 17.js to iterate over studentsArray with map() and changing every element to append a 💖.',
    hint: <p>The map() is a very useful method, specially in React. Take your time to <a
        href='https://www.w3schools.com/jsref/jsref_map.asp' target='_blank'
        rel='noreferrer'>understand it</a> and play wit it!</p>,
    solution: ['Luis💖', 'Federico💖', 'Clàudia💖', 'Mario💖', 'Fran💖', 'Veronica💖'],
    result: result
}

export default exercise17;