import React from 'react';
import LiveSearchBox from './LiveSearchBox';
import { Container } from 'react-bootstrap';
import './ActorsPage.css'


class ActorsPage extends React.Component {

    render() {
        return (
            <div className="p-actors">
                <Container>
                    <LiveSearchBox placeholderText="Search Actor Name"/>
                    <p>bla bla bla</p>
                </Container>
            </div>
        )
    }
}

export default ActorsPage;