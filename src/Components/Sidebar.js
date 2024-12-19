import React from 'react';
import user from '../Assets/user.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile">
        <img src={user} alt="User" className="profile-pic" />
        <h4>Hatim Alaoui</h4>
        <p>hatim.alaoui@gmail.com</p>
        <button className="logout-btn">Logout</button>
      </div>
      <nav>
        <ul>
          <li><a href="/">Dashboard</a></li>
          <li><a href="/add-sale">Add Sale</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
