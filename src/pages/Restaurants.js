import React,{useEffect, useState} from "react"
import { useQuery } from "@apollo/client"
import {GET_RESTAURANTS_QUERY} from "../GraphQL/Queries"
import { RestaurantCard } from "../components/RestaurantCard"

export const Restaurants = () => {
    const {data} = useQuery(GET_RESTAURANTS_QUERY,{ 
        variables : {   delivery: false,
            limit : 100,
            index : 0
        }})
    const [restaurants,setRestaurants] = useState([])
    useEffect(() => {
        if(data){
            setRestaurants(data.restaurants)
        }
    },[data])
    return(
        <>
        Restaurants
        <div className="row">
        {
            restaurants.map((item,index) => {
                return(
                    <span className="col-md-4" style={{marginTop:"15px"}} key={index} >
                        <RestaurantCard restaurant={item} />
                    </span>
                )
            })
        }
        </div>
        </>
    )
}