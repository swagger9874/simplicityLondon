import React from "react"
import {Card, Button} from "react-bootstrap";

export const OrdersCard = ({order}) => {
    return(
        <>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Name : {order.address.fullName}</Card.Title>
                
                <span>Address : {order.address.addressLine1}</span>
                <br/>
                <span>Orders : 
                <ul>
                    {order.items.map((item,index) => {
                        return(
                            <li key={index}>{item.name}</li>
                        )
                    })}
                </ul>
                </span>
                
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        </>
    )
}