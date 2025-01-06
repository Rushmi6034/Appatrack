import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/EbikeData.css';

const EbikeData = () => {
  const { state } = useLocation();
  const { name, load, location, speed } = state;

  return (
    <div className='data'>
      <h1>{name} Data</h1>
      
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Load</th>
            <th>Location</th>
            <th>Speed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{load}</td>
            <td>{location}</td>
            <td>{speed} km/hr</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EbikeData;
