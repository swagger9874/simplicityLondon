import {gql} from "@apollo/client"

export const GET_RESTAURANTS_QUERY = gql`
  query getRestaurants($delivery:Boolean!, $limit:Int!, $index:Int!){
    restaurants(delivery: $delivery, limit:$limit,index:$index){
      name
      open
      distance
      picture{
        url
      }
    }
  }
`

export const GET_PAST_ORDERS_QUERY = gql`
query getPastOrders($index:Int!,$limit:Int!){
  pastOrders(index:$index,limit:$limit){
    uid
    items{
      name
    }
    address{
      fullName
      addressLine1
      addressLine2
    }
  }
}
`

export const GET_USER_DETAILS = gql`
query getUser{
  user{
    firstName
    lastName
    email
    mobileNumber
    emailVerified
  }
}
`