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

    try {
      const response = await axios.post(process.env.REACT_APP_REST_API + '/user/login', {
        username,
        password,
      });
      console.log("response",  response);
      if(response.data.success){
        console.log("");
        localStorage.setItem('token', response.data.result.data.token);
        window.location.href = '/dashboard';
      
      }else{
        setShowErrorMessage(true);
        setErrorMessage('Invalid Username or Password.!');
      }
    } catch (error) {
      console.error(error);
    }

  };

  return (
    <form style={{"margin-top":"50px", "padding" : "20px", "display" : "flex" , "justify-content": "center"}} className="space-between" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        style={{"padding": "20px"}}
        onChange={(event) => setUsername(event.target.value)}
      />
      
      <input
        type="password"
        placeholder="Password"
        value={password}
        style={{"padding": "20px"}}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button className="action-button" type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
