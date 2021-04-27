const studentsArray = ['Luis', 'Federico', 'Clàudia', 'Mario', 'Fran', 'Veronica'];

// 👀 Add the necessary code below to iterate studentsArray with the forEach() method
// 👀 and adding at the end of the array each item with a 💖 appended
// 📝

// 📝

const exercise16 = {
    id: 16,
    type: 'array',
    name: 'Do something for each element in an array',
    description: 'Modify 16.js to iterate over studentsArray with forEach() and adding to the array each item with a 💖.',
    hint: <p>We learned before how to iterate over arrays with a for loop. Time for <a
        href='https://www.w3schools.com/jsref/jsref_foreach.asp' target='_blank'
        rel='noreferrer'>forEach()</a>! You'll need to remember also how to add an item to the end of an array.</p>,
    solution: ['Luis', 'Federico', 'Clàudia', 'Mario', 'Fran', 'Veronica',
        'Luis💖', 'Federico💖', 'Clàudia💖', 'Mario💖', 'Fran💖', 'Veronica💖'],
    result: studentsArray
}

export default exercise16;