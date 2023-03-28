import React from 'react';
import ReactDOM from 'react-dom/client';

//const titleHeder = "JSX and JS Expression";
const paragraph = "You can now view jsx-and-js-expression in the browser. You can now view jsx-and-js-expression in the browser. You can now view jsx-and-js-expression in the browser.";

const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth();
const currentDay = date.getDate();

// const designTitle = {
//   background: "purple",
//   color: "white",
//   textAlign: "center",
//   padding: "15px"
// }

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    {/* <h1 style={{color:"red", fontSize:"5rem",textAlign:"center"}}>Hridoy</h1> */}
    {/* <h1 style={designTitle}>Hridoy</h1> */}
    <h1 className="headerTitle">Hridoy</h1>
    <div className='card'>
      <h3 className='cardTitle'>Call Family</h3>
      <p className='cardParagraph'>{paragraph}</p>
      <h5 className='cardTime'>{currentDay+" / "+currentMonth+" / "+currentYear}</h5>
    </div>
    
  </div>
);
