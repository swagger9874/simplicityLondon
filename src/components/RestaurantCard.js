import React from "react"
import {Card} from "react-bootstrap";

export const RestaurantCard = ({restaurant}) => {
    return(
        <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={restaurant.picture.url} />
            <Card.Body>
                <Card.Title>{restaurant.name}</Card.Title>
                <Card.Text>
                Distance : {restaurant.distance}
                <br/>
                {
                    restaurant.open ? "Open Now" : "Closed"
                }
                </Card.Text>
            </Card.Body>
        </Card>
        </>
    )
}