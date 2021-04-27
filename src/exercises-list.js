import exercise1 from './exercises/1';
import exercise2 from './exercises/2';
import exercise3 from './exercises/3';
import exercise4 from './exercises/4';
import exercise5 from './exercises/5';
import exercise6 from './exercises/6';
import exercise7 from './exercises/7';
import exercise8 from './exercises/8';
import exercise9 from './exercises/9';
import exercise10 from './exercises/10';
import exercise11 from './exercises/11';
import exercise12 from './exercises/12';
import exercise13 from './exercises/13';
import exercise14 from "./exercises/14";
import exercise15 from "./exercises/15";

let exercisesList = [exercise1, exercise2, exercise3, exercise4, exercise5, exercise6, exercise7, exercise8,
    exercise9, exercise10, exercise11, exercise12, exercise13, exercise14, exercise15];

// add 'solved' flag
exercisesList = exercisesList.map(exercise => {
    return {
        ...exercise,
        solved: JSON.stringify(exercise.solution) === JSON.stringify(exercise.result)
    }
});

export default exercisesList;