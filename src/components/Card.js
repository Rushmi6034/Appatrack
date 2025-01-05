import React from 'react';

const Card = ({ name, load, location, speed }) => {
  // Define the handleCardClick function outside the JSX
  const handleCardClick = () => {
    const htmlContent = `
      <html>
        <head>
          <title>Dustbin Data</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 20px;
            }
            h1 {
              margin-top: 25px;
              text-align: center;
            }
            table {
              margin-top: 120px;
              width: 100%;
              border-collapse: collapse;
              font-size: 16px;
              text-align: left;
            }
            th, td {
              padding: 10px;
              border: 1px solid #ccc;
            }
            th {
              background-color: #0a3f74;
              color: white;
              text-align: center;
            }
            tr:nth-child(even) {
              background-color: #f9f9f9;
            }
            tr:hover {
              background-color: #f1f1f1;
            }
            .back {
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 3px;
              letter-spacing: 1px;
              transition: all 0.2s linear;
              cursor: pointer;
              border: none;
              background: none;
              padding: 10px 14px;
              position: fixed;
              top: 30px;
              left: 30px;
              z-index: 1000;
              font-weight: bold;
            }
            .back > svg {
              font-size: 25px;
              transition: all 0.4s ease-in;
              color: black;
              font-weight: bold;
            }
            .back:hover > svg {
              font-size: 1.2em;
              transform: translateX(-5px);
              font-weight: bold;
            }
          </style>
        </head>
        <body>
          <button class="back" onclick="window.location.href='/dashboard'">
            <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024">
              <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
            </svg>
          </button>
          <h1>${name} Data</h1>
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
                <td>${name}</td>
                <td>${load}</td>
                <td>${location}</td>
                <td>${speed}</td>

              </tr>
            </tbody>
          </table>
        </body>
      </html>
    `;

    const newTab = window.open();
    newTab.document.open();
    newTab.document.write(htmlContent);
    newTab.document.close();
  };

  // Return JSX
  return (
    <div className="dustbin-card" onClick={handleCardClick}>
      <h2>{name}</h2>
      <p>Load: {load}</p>
      <p>Location: {location}</p>
      <p>Speed: {speed}</p>
    </div>
  );
};

export default Card;
