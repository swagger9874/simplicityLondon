import React from "react"
import {Card, Button} from "react-bootstrap";

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
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        </>
    )
}