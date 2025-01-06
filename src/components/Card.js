// import React from 'react';
// import img from "../assets/0.jpeg";
// import img1 from "../assets/0-30.jpeg";
// import img2 from "../assets/30-50.jpeg";
// import img3 from "../assets/50-70.jpeg";
// import img4 from "../assets/70.jpeg";
// import img5 from "../assets/70-150.jpeg";
// import img6 from "../assets/150.jpeg";
// import img7 from "../assets/301.jpeg";


// const Card = ({ name, load, location, speed }) => {
//   // Function to determine the speed image based on the speed value
//   const speedValue = parseInt(speed.replace('km/hr', ''), 10);
//   const getSpeedImage = (speed) => {
//     if (speedValue == 0) {
//       return img; // Path to the image for speed below 30 km/hr
//     }else if (speedValue >0 && speedValue<30) {
//       return img1;
//     }else if (speedValue == 30) {
//       return img7;
//     }
    

//     else if (speedValue>30 && speedValue<=50) {
//       return img2; // Path to the image for speed 30-50 km/hr
//     }
//      else if (speedValue > 50 && speedValue < 70) {
//       return img3; // Path to the image for speed 30-50 km/hr
//     }
//      else if (speedValue == 70) {
//       return img4; // Path to the image for speed 50-70 km/hr
//     } else if (speedValue > 70 && speedValue < 150) {
//       return img5; // Path to the image for speed 70-90 km/hr
//     } else if (speedValue >= 150) {
//       return img6; // Path to the image for speed 90-110 km/hr
//     } 
//   };

//   const handleCardClick = () => {
//     const htmlContent = `
//       <html>
//         <head>
//           <title>E-bike Data</title>
//           <style>
//             body {
//               font-family: Arial, sans-serif;
//               margin: 20px;
//             }
//             h1 {
//               margin-top: 25px;
//               text-align: center;
//             }
//             table {
//               margin-top: 120px;
//               width: 100%;
//               border-collapse: collapse;
//               font-size: 16px;
//               text-align: left;
//             }
//             th, td {
//               padding: 10px;
//               border: 1px solid #ccc;
//             }
//             th {
//               background-color: #0a3f74;
//               color: white;
//               text-align: center;
//             }
//             tr:nth-child(even) {
//               background-color: #f9f9f9;
//             }
//             tr:hover {
//               background-color: #f1f1f1;
//             }
//             .image{
//             width:20px;
//             height:auto;
//             margin-bottom:50px;
//             }

           
//           </style>
//         </head>
//         <body>
//           <h1>${name} Data</h1>
//           <table>
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Load</th>
//                 <th>Location</th>
//                 <th>Speed</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>${name}</td>
//                 <td>${load}</td>
//                 <td>${location}</td>
//                 <td>${speed} km/hr</td>
//               </tr>
//             </tbody>
//           </table>
//         </body>
//       </html>
//     `;

//     const newTab = window.open();
//     newTab.document.open();
//     newTab.document.write(htmlContent);
//     newTab.document.close();
//   };

//   // Get the image dynamically based on the speed
//   const image = getSpeedImage(speed);

//   // Return JSX
//   return (
//     <div className="card" onClick={handleCardClick}>
//       <img src={image} alt="Speed Indicator"  className="image" />
//       <h2>{name}</h2>
//       <p>Load: {load}</p>
//       <p>Location: {location}</p>
//       <p>Speed: {speed} </p>
//     </div>
//   );
// };

// export default Card;



import React from 'react';
import { useNavigate } from 'react-router-dom';
import img from "../assets/0.jpeg";
import img1 from "../assets/0-30.jpeg";
import img2 from "../assets/30-50.jpeg";
import img3 from "../assets/50-70.jpeg";
import img4 from "../assets/70.jpeg";
import img5 from "../assets/70-150.jpeg";
import img6 from "../assets/150.jpeg";
import img7 from "../assets/301.jpeg";

const Card = ({ name, load, location, speed }) => {
  const navigate = useNavigate();

  const speedValue = parseInt(speed.replace('km/hr', ''), 10);
  const getSpeedImage = (speed) => {
    if (speedValue == 0) {
      return img;
    } else if (speedValue > 0 && speedValue < 30) {
      return img1;
    } else if (speedValue == 30) {
      return img7;
    } else if (speedValue > 30 && speedValue <= 50) {
      return img2;
    } else if (speedValue > 50 && speedValue < 70) {
      return img3;
    } else if (speedValue == 70) {
      return img4;
    } else if (speedValue > 70 && speedValue < 150) {
      return img5;
    } else if (speedValue >= 150) {
      return img6;
    }
  };

  const handleCardClick = () => {
    navigate('/ebike-data', { state: { name, load, location, speed } });
  };

  const image = getSpeedImage(speed);

  return (
    <div className="card" onClick={handleCardClick}>
      <img src={image} alt="Speed Indicator" className="image" />
      <h2>{name}</h2>
      <p>Load: {load}</p>
      <p>Location: {location}</p>
      <p>Speed: {speed}</p>
    </div>
  );
};

export default Card;

