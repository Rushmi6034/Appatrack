import React, { useEffect, useState } from 'react';
import { ref, get } from "firebase/database";
import { database } from "../firebase-config";  // Import database from firebase-config
import { Link } from 'react-router-dom';  // Add this import
import DustbinCard from '../components/Card';
import '../styles/Dashboard.css';  // Custom CSS for styling
// import {auth} from "../firebase-config";

const Dashboard = () => {
  const [eBikes, setEBikes] = useState([]);  // State to hold the fetched data
  const [loading, setLoading] = useState(true);  // Loading state
  // const [username, setUsername] = useState(''); 

  useEffect(() => {
    // Reference to the location in your Realtime Database where e-bike data is stored
    const dbRef = ref(database); // Adjust the path based on your database
    console.log(dbRef,"bike");
    // Fetch data from Firebase Realtime Database
    get(dbRef).then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log("here");
        // Transform the data into a suitable format

        // const userId = auth.currentUser?.uid; // Get the current user's ID
        // const userRef = ref(database, );
        
        // get(userRef).then((snapshot) => {
        //   if (snapshot.exists()) {
        //     setUsername(snapshot.val().username || 'User');
        //   } else {
        //     console.log("No username found.");
        //   }
        // }).catch((error) => {
        //   console.error("Error fetching username:", error);
        // });

        const transformedData = Object.keys(data).map(key => ({
          id: key,
          name: key,  // The name of the e-bike is its key (e.g., e-bike 1, e-bike 2)
          load: `${data[key]?.load || 0} kg`,  // Show 0kg if load data is missing
          location: data[key]?.location || 'Unknown',
          speed: `${data[key]?.speed || 0} km/h`,  // Show 0 km/h if speed data is missing
        }));

        setEBikes(transformedData);  // Set the transformed data to state
      } else {
        console.log("No data available");
      }
      setLoading(false);  // Stop loading once data is fetched
    }).catch((error) => {
      console.error("Error fetching data:", error);
      setLoading(false);  // Stop loading in case of error
    });
  }, []);  // Empty dependency array to fetch data only once when the component mounts

  if (loading) {
    return <div>Loading...</div>;  // Show loading message until data is fetched
  }

  return (
    <div className="class">
      <nav>
        <div className="navs-container">
          <div className="logs">AppaTrack</div>
          <div className="navs-links">
            <Link to="/" >Home</Link>
            <Link to="/aboutus">About Us</Link>
            <Link to="#">Contact</Link>
            <div className="butto">
              <Link to="/login">Logout</Link>
            </div>
          </div>
        </div>
      </nav>
      
      <div className="dashboard-container">
        <h1>Welcome!!!</h1>
        
        <div className="dustbin-cards">
          {eBikes.map((bike) => (
            <DustbinCard 
              key={bike.id} 
              name={bike.name} 
              load={bike.load} 
              location={bike.location} 
              speed={bike.speed} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
