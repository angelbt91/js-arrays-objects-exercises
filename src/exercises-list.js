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
import exercise16 from "./exercises/16";
import exercise17 from "./exercises/17";
import exercise18 from "./exercises/18";
import exercise19 from "./exercises/19";
import exercise20 from "./exercises/20";
import exercise21 from "./exercises/21";
import exercise22 from "./exercises/22";
import exercise23 from "./exercises/23";
import exercise24 from "./exercises/24";
import exercise25 from "./exercises/25";
import exercise26 from "./exercises/26";
import exercise27 from "./exercises/27";
import exercise28 from "./exercises/28";

let exercisesList = [exercise1, exercise2, exercise3, exercise4, exercise5, exercise6, exercise7, exercise8,
    exercise9, exercise10, exercise11, exercise12, exercise13, exercise14, exercise15, exercise16, exercise17,
    exercise18, exercise19, exercise20, exercise21, exercise22, exercise23, exercise24, exercise25, exercise26,
    exercise27, exercise28];

// add 'solved' flag
exercisesList = exercisesList.map(exercise => {
    return {
        ...exercise,
        solved: JSON.stringify(exercise.solution) === JSON.stringify(exercise.result)
    }
});

export default exercisesList;