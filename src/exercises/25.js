// 👀 Edit below the variable 'result' to make it contain an object with two properties:
// 👀 - Property named 'name', value is 'Clàudia'
// 👀 - Property named 'role', value is 'full stack'
// 👀 - Property named 'hobbies', value is an array containing two elements: 'music' and 'programming'
// 👀 - Property named 'favoriteFoodByCountry', value is an object as described with two properties as described here:
// 👀 --- First property's name is 'Italy', and its value is an array with two elements: 'Pizza🍕' and 'Pasta🍝'
// 👀 --- Second property's name is 'Japan', and its value is an array with one element: 'Sushi🍣'
// 📝
const result = 'I want to contain an object that looks like what we\'ve specified above';
// 📝

const exercise25 = {
    id: 25,
    type: 'object',
    name: 'Create an object III',
    description: 'Modify 25.js to output an object that contains the properties specified there.',
    hint: 'You can even copy-paste the solution if you look carefully into 25.js.',
    solution: {
        name: 'Clàudia',
        role: 'full stack',
        hobbies: ['music', 'programming'],
        favoriteFoodByCountry: {
            Italy: ['Pizza🍕', 'Pasta🍝'],
            Japan: ['Sushi🍣']
        }
    },
    result: result
}

export default exercise25;