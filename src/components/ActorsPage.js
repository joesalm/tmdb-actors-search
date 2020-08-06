import React from 'react';
import LiveSearchBox from './LiveSearchBox';
import { Container, Row, Col } from 'react-bootstrap';
import './ActorsPage.css'
import ActorCard from './ActorCard'
import axios from 'axios'


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

            // Calling the TMDB API to get the result for the given searchText
            const URL = "https://api.themoviedb.org/3/search/person?api_key=53d2ee2137cf3228aefae083c8158855&query=" + searchText;

            axios.get(URL).then(response => {
                this.setState({
                    searchResults: response.data.results
                })    
                
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


        const resultStrings = searchResults.map(searchResult => searchResult.name);

        const actorsView = actors.map(actor => 
            <Col lg={3} md={4} sm={6}>
                <ActorCard actor={actor}/>
            </Col>)

        return (
            <div className="p-actors">
                <Container>
                    <LiveSearchBox placeholderText="Search Actor Name" results={resultStrings}
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