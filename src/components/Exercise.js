import {useParams} from 'react-router-dom';
import exercisesList from '../exercises-list';
import Output from './Output';
import Hint from './Hint';

const Exercise = () => {
    const {id} = useParams();
    const exercise = exercisesList.find(exercise => exercise.id.toString() === id);

    return exercise ?
        <>
            <h1>{exercise.id.toString()}. {exercise.name}</h1>
            <h2 className='pt-5'>Description</h2>
            <p>{exercise.description}</p>
            {exercise.hint && <Hint hint={exercise.hint} id={exercise.id}/>}
            <h2 className='pt-5'>Expected output:</h2>
            <Output output={exercise.solution}/>
            <h2 className='pt-5'>Your output:</h2>
            <Output output={exercise.result}/>
            <h1 className='pt-5'>{JSON.stringify(exercise.solution) === JSON.stringify(exercise.result) ? '🥳' : '🤔'}</h1>
        </>
        :
        <>
            <h1>Ooops 😢</h1>
            <p>We can't find any exercise on this page. Please use the sidebar to navigate through exercises.</p>
        </>

}

export default Exercise;