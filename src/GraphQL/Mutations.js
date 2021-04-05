import {gql} from "@apollo/client"

export const LOGIN_USER_MUTATION = gql`
mutation Login(
    $email:String!,
    $password:String!
    ){  
    loginWithEmail(
        email:$email,
        password:$password
    ){
      token
    }
  }
`