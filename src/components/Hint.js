import {Accordion} from 'react-bootstrap';

const Hint = ({hint, id}) => {
    return (
        <Accordion>
            <>
                <Accordion.Toggle as={'h3'} variant='text' eventKey={id}>
                    <h3 className='mt-5' style={{cursor: 'pointer'}}>Hint (click to reveal)</h3>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={id}>
                    <p>{hint}</p>
                </Accordion.Collapse>
            </>
        </Accordion>
    );
}

export default Hint;