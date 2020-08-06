import React from 'react';


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
    }

    render() {
        // Extracting props and state
        const { placeholderText } = this.props;


        return (
            <div className="c-live-search-box">
                <input type="search" placeholder={placeholderText}/>
            </div>
        )
    }
}

export default LiveSearchBox;