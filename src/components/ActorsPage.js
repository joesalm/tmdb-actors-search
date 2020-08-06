import React from 'react';
import LiveSearchBox from './LiveSearchBox';
import { Container } from 'react-bootstrap';
import './ActorsPage.css'


class ActorsPage extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            searchResults: []
        }

        this.searchActors = this.searchActors.bind(this);
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