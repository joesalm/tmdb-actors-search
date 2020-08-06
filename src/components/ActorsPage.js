import React from 'react';
import LiveSearchBox from './LiveSearchBox';
import { Container, Row, Col } from 'react-bootstrap';
import './ActorsPage.css'


class ActorsPage extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            searchResults: [],
            actors: []
        }

        this.searchActors = this.searchActors.bind(this);
        this.addActor = this.addActor.bind(this);
    }


    // This function should be invoked each time the search text is changed
    searchActors(searchText) {
        
        if (searchText) {
            this.setState({
                searchResults: this.state.searchResults.concat(searchText)
            })    
        } else {
            this.setState({
                searchResults: []
            })   
        }
    }

    addActor(index) {
        this.setState({
            actors: this.state.actors.concat(this.state.searchResults[index]),
            searchResults: []
        })
    }

    render() {

        const {searchResults, actors} = this.state


        const actorsView = actors.map(actor => 
            <Col lg={3} md={4} sm={6}>
                {actor}
            </Col>)

        return (
            <div className="p-actors">
                <Container>
                    <LiveSearchBox placeholderText="Search Actor Name" results={searchResults}
                        searchTextChanged={this.searchActors} resultSelected={this.addActor}/>
                    <Row>
                        {actorsView}
                    </Row>
                </Container>
            </div>
        )
    }
}

export default ActorsPage;