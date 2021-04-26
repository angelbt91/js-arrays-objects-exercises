import {Accordion} from 'react-bootstrap';

const Hint = ({hint}) => {
    return (
        <Accordion>
            <>
                <Accordion.Toggle as={'h3'} variant='text' eventKey='0'>
                    <h3 className='mt-5' style={{cursor: 'pointer'}}>Hint (click to reveal)</h3>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey='0'>
                    <p>{hint}</p>
                </Accordion.Collapse>
            </>
        </Accordion>
    );
}

export default Hint;