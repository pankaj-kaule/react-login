import React, { useState } from 'react';
import Logout from './login/logout';


const Dashboard = () => {

  return (
    <div>
        <Logout />
        <div>
          <h1 style={{ "text-align" : "center", "margin-top" : "60px"}}>Welcome to dashboard</h1>
        </div>
        <div style={{ "text-align" : "center", "margin-top" : "150px"}}>
          <p>You are able to see this page, because you have successfully logged in.</p>
          <p>You can logout your account using above logout button.</p>
        </div>
    </div>
  );
};

export default Dashboard;
