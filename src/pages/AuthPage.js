import React, { useState } from "react";
import {useHistory} from "react-router-dom"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../assets/Login.css";
import {useMutation} from "@apollo/client"
import {LOGIN_USER_MUTATION} from "../GraphQL/Mutations"

export default function AuthPage(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Login, {error}] = useMutation(LOGIN_USER_MUTATION)
    const history = useHistory()

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    Login({
        variables : {
            email: email,
            password : password,
        }
    }).then(res => {
        let token = res.data.loginWithEmail.token
        if(token){
            localStorage.setItem("authToken", token)
            window.location.href = "/restaurants"
        }
    })

    if(error){
        console.log(error)
    }
  }


  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );

}