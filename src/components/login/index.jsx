import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showerrorMessage, setShowErrorMessage] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setShowErrorMessage(false);

    const response = await axios.post(process.env.REACT_APP_REST_API + '/user/login', {
      username,
      password,
    })
    .then(function (response) {

      console.log("response",  response);
      if(Object.keys(response.data.result).length > 0 && Object.keys(response.data.result.data).length > 0){
        localStorage.setItem('token', response.data.result.data.token);
        window.location.href = '/dashboard';
      
      }else{
        console.log("login failed ");
        setShowErrorMessage(true);
        setErrorMessage('Invalid Username or Password.!');
      }

    }).catch(function (error) {

      console.log("API error");
      console.error(error);
    
    });
  }

  return (
    <div>
    <form style={{"margin-top":"50px", "padding" : "20px", "display" : "flex" , "justify-content": "center"}} className="space-between" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        required
        style={{"padding": "20px", "border-radius" : "10px", "border-color" : showerrorMessage ? "red" : ""}}
        onChange={(event) => setUsername(event.target.value)}
      />
      
      <input
        type="password"
        placeholder="Password"
        value={password}
        required
        style={{"padding": "20px", "border-radius" : "10px", "border-color" : showerrorMessage ? "red" : "" }}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button className="action-button" type="submit">Login</button>      
    </form>
    <div style={{"text-align": "center"}}>
      <span>
          {showerrorMessage === true ? errorMessage : null}
      </span>
    </div>
    </div>
  );
};

export default LoginForm;
