import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { VERIFY_USER } from '../Events';
import "./LoginPage.css";
import Auth from "../utils/auth";

class LoginPage extends Component {
  constructor(props){
    super(props);
  
  this.state = {
    nickname:"",
    error:"",
    email: "",
    password: ""
  }
  }

  setUser = ({user, isUser}) =>{
    console.log(user, isUser);
    if (isUser){
      this.setError("User name taken")
    }else{
      this.props.setUser(user)
      this.setError("")
    }
  }

  handleInputChange = event => {
    this.setState({nickname: event.target.value})
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const data = {
      email: this.state.email,
      password: this.state.password
    };
    const { socket } = this.props
    const { nickname } = this.state
    socket.emit(VERIFY_USER, nickname, this.setUser)


    fetch("/login", {
      method: "POST", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(response => {
        // Server returns "JWT ...", so we need to split off the token
        const token = response.token.split(" ")[1];
        Auth.login(token);
      })
      .catch(error => console.error("Error:", error));
  };
 
setError = (error)=>{
  this.setState({error})
}

  render() {
    const { nickname, password, error} = this.state
    if (this.props.token) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <div className="loginPage text-center">
        <h1 className="login">Login</h1>
        <form onSubmit={this.handleSubmit} className="login-form">
          <label htmlFor="nickname">
            <h2>Got a nickname?</h2>
          </label>
          <input
            ref={input => {
              this.textInput = input;
            }}
            type="text"
            id="nickname"
            value={nickname}
            className="emailField mt-5"
            name="email"
            placeholder="Email"
            onChange={this.handleInputChange}
          />
          <br />
          <input
            ref={input => {
              this.textInput = input;
            }} 
            type="password"
            id="password"
            value={password}
            className="passwordField mt-2"
            name="password"
            placeholder="Password"
            onChange={this.handleInputChange}
          />
          <br />
          <button className="btn btn-secondary mt-2">Login</button>
          <div className="error">{error ? error:null}</div>
        </form>
      </div>
    );
  }
}

export default LoginPage;
