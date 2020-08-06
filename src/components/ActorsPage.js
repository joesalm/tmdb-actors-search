import React from 'react';
import LiveSearchBox from './LiveSearchBox';


class ActorsPage extends React.Component {

    render() {
        return (
            <div className="p-actors">
                <LiveSearchBox placeholderText="Search Actor Name"/>
            </div>
        )
    }
}

export default ActorsPage;