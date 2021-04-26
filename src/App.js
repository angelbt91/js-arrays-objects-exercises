import {Col, Container, Row, Navbar} from 'react-bootstrap';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Exercise from './components/Exercise';
import Home from './components/Home';
import Sidebar from './components/Sidebar';

const App = () => {
    return (
        <BrowserRouter>
            <Container fluid className='p-0'>
                <Navbar bg='dark' variant='dark'>
                    <Navbar.Brand href='/'>JS Arrays and Objects exercises</Navbar.Brand>
                </Navbar>
                <Row>
                    <Col xs={2} className='m-4 pt-4'>
                        <Sidebar/>
                    </Col>
                    <Col className='m-4 pt-4'>
                        <Switch>
                            <Route exact path={'/'} component={Home}/>
                            <Route path={'/:id'} component={Exercise}/>
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </BrowserRouter>
    );
}

export default App;
