import React, { useState } from 'react';

const Logout = () => {
    const logoutUser = async (event) => {
        event.preventDefault();
    
        try {
            localStorage.removeItem('token');
            window.location.href = '/';
        
        } catch (error) {
          console.error(error);
        }
    
      };

  return (
    <div className='logout-wrapper'>
        <button className="action-button" onClick={logoutUser}>Logout</button>
    </div>
  );
};

export default Logout;
