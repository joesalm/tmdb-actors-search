import React from 'react';
import LiveSearchBox from './LiveSearchBox';
import { Container } from 'react-bootstrap';
import './ActorsPage.css'


class ActorsPage extends React.Component {


    constructor(props) {
        super(props);

        const results = [
            "Result 1",
            "Result 2",
            "Result 3",
            "Result 4",
        ];

        this.state = {
            searchResults: results
        }

        this.searchActors = this.searchActors.bind(this);
    }


    // This function should be invoked each time the search text is changed
    searchActors(searchText) {
        
        this.setState({
            searchResults: this.state.searchResults.concat(searchText)
        })
    }

    render() {

        const {searchResults} = this.state

        return (
            <div className="p-actors">
                <Container>
                    <LiveSearchBox placeholderText="Search Actor Name" results={searchResults}
                        searchTextChanged={this.searchActors}/>
                    <p>bla bla bla</p>
                </Container>
            </div>
        )
    }
}

export default ActorsPage;