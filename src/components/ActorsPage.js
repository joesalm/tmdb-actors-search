import React from 'react';
import LiveSearchBox from './LiveSearchBox';
import { Container } from 'react-bootstrap';
import './ActorsPage.css'


class ActorsPage extends React.Component {

    render() {

        const results = [
            "Result 1",
            "Result 2",
            "Result 3",
            "Result 4",
        ];

        return (
            <div className="p-actors">
                <Container>
                    <LiveSearchBox placeholderText="Search Actor Name" results={results}/>
                    <p>bla bla bla</p>
                </Container>
            </div>
        )
    }
}

export default ActorsPage;