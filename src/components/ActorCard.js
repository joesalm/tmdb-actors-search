import React from 'react';
import { Card } from 'react-bootstrap';


class ActorCard extends React.Component {


    render() {
        return (
            <Card>
                <Card.Img variant="top" src={this.props.actor.imgURL}/>
                <Card.Body>
                    <Card.Title>{this.props.actor.name}</Card.Title>
                </Card.Body>
            </Card>
        )
    }
}

export default ActorCard;