import React, {useState, useEffect} from "react"
import {Card} from "react-bootstrap";
import { useQuery } from "@apollo/client"
import {GET_USER_DETAILS} from "../GraphQL/Queries"

export const UserPage = () => {

    const {data} = useQuery(GET_USER_DETAILS)
    const [user,setUser] = useState([])
    useEffect(() => {
        if(data){
            setUser(data.user)
        }
    },[data])

    return(
        <>
        User Page
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Name : {user.firstName} {user.lastName}</Card.Title>
                <Card.Text>
                E-Mail : {user.email}
                <br/>
                Mobile Number : {user.mobileNumber}
                <br/>
                {
                    user.emailVerified ? "Verified Email" : "Could not verify E-Mail"
                }
                </Card.Text>
            </Card.Body>
        </Card>

        </>
    )
}