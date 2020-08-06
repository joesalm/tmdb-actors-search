import React from 'react';
import { Form, ListGroup } from 'react-bootstrap';
import './LiveSearchBox.css'

// This component is a genreic search box that shows results immediatly 
// when the user is typing (like the google search)
// Props
// placeholderText - string - will be used as the placeholder for the input
// results - array - array of strings. if provided (and is not empty) the component
//      will render a result box that will be positioned absolute with the data in the array
//      each item (string) in the array will be a list item in the results
// Event Props
// searchTextChanged - function - will be invoked for each text change in the input
// resultSelected - functions - will be invoked when the users selects (clicks) on one
//      of the results. The index of the selected result will be sent
// State
// serachText - string - the current value in the input
class LiveSearchBox extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            searchText: ""
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }


    handleInputChange(event) {
        // Updating the internal state of the component with the new searchText
        this.setState({
            searchText: event.target.value
        });

        // Triggering an event that the search text has changed
        this.props.searchTextChanged(event.target.value);
    }

    render() {
        // Extracting props and state
        const { placeholderText, results, resultSelected } = this.props;
        const { searchText } = this.state;

        // Create an array of ListGroup.Item from the results array
        const listGroupItems = results.map((result, index) => 
            <ListGroup.Item key={index} action onClick={() => resultSelected(index)}>{result}</ListGroup.Item>);


        return (
            <div className="c-live-search-box">
                <Form.Control type="search" placeholder={placeholderText} value={searchText} 
                    onChange={this.handleInputChange}/>
                <ListGroup className="search-results">
                    {listGroupItems}
                </ListGroup>
                {/* <input type="search" placeholder={placeholderText}/> */}
            </div>
        )
    }
}

export default LiveSearchBox;