import React from 'react';
import './Dashboard.css'; // Import your CSS file here
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate=useNavigate()
  return (
    <div className="dashboard-container">
      <div className="header">
        <h1>Video Editing App Dashboard</h1>
      </div>
      <div className="content">
        <div className="sidebar-dash ">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Videos</a></li>
            <li><a href="#">Settings</a></li>
           
          </ul>
        </div>
        <div className="main-content">
          <h1>Welcome To Video Editing App</h1>
          <h3>Click Below To Edit Video</h3>
        <button className="action-button"
onClick={()=>navigate("/editing-page")}>Edit Videos</button>
       
        </div>
      </div>
      <div className="footer">
        <p>&copy; 2024 Video Editing App</p>
      </div>
    </div>
  );
};

export default Dashboard;


