import {exercisesList} from "../exercises-list";
import {Link} from "react-router-dom";

const Sidebar = () => {
    const arrayExercises = exercisesList.filter(exercise => exercise.type === 'array').sort((a, b) => a.id - b.id);
    const objectExercises = exercisesList.filter(exercise => exercise.type === 'object').sort((a, b) => a.id - b.id);

    return (
        <>
            <h5>Arrays</h5>
            <ul>
                {arrayExercises && arrayExercises.map(exercise => {
                    return <Link to={`/${exercise.id}`}>
                        <li>{exercise.id}. {exercise.name}</li>
                    </Link>
                })}
            </ul>
            <h5>Objects</h5>
            <ul>
                {objectExercises && objectExercises.map(exercise => {
                    return <Link to={`/${exercise.id}`}>
                        <li>{exercise.id}. {exercise.name}</li>
                    </Link>
                })}
            </ul>
        </>
    )
}

export default Sidebar;