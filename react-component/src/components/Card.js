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



function Card(){
  return  <div className='card'>
              <h3 className='cardTitle'>Call Family</h3>
              <p className='cardParagraph'>{paragraph}</p>
              <h5 className='cardTime'>{currentDay+" / "+currentMonth+" / "+currentYear}</h5>
          </div>
}
export default Card;