import {Accordion} from 'react-bootstrap';

const Hint = ({hint, id}) => {
    return (
        <Accordion className='mt-4'>
            <>
                <Accordion.Toggle as={'h5'} variant='text' eventKey={id}>
                    <h5 style={{cursor: 'pointer'}}>💡 Hint (click to reveal)</h5>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={id}>
                    <p>{hint}</p>
                </Accordion.Collapse>
            </>
        </Accordion>
    );
}

export default Hint;