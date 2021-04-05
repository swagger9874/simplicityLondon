import React,{useEffect, useState} from "react"
import { useQuery } from "@apollo/client"
import {GET_PAST_ORDERS_QUERY} from "../GraphQL/Queries"
import { OrdersCard } from "../components/OrdersCard"


export const Orders = () => {
    const {data} = useQuery(GET_PAST_ORDERS_QUERY,{ 
        variables : {   
            limit : 100,
            index : 0
        }})

    const [orders,setOrders] = useState([])

    useEffect(() => {
        if(data){
            setOrders(data.pastOrders)
        }
    },[data])

    return(
        <>
        Orders

        <div className="row">
        {
            orders.map((item,index) => {
                return(
                    <span className="col-md-4" style={{marginTop:"15px"}} key={index} >
                        <OrdersCard order={item} />
                    </span>
                )
            })
        }
        </div>
        </>
    )
}