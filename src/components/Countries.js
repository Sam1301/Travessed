import React from 'react';

import country from './country';
 

import { type } from 'os';

var sectionStyle1 = {
  width: "100%",
  height: "25%",
  // backgroundImage: `url(${Background}) `,
   
};
var sectionStyle2 = {
    width: "50px",
    height: "50px",
    // backgroundImage: `url(${Background2})`
  };
  var sectionStyle3 = {
    width: "50px",
    height: "50px",
    // backgroundImage: `url(${Background3})`
  };
  var sectionStyle4 = {
    width: "50px",
    height: "50px",
    // backgroundImage: `url(${Background4})`
  };
//   var sectionStyle5 = {
//     width: "100%",
//     height: "400px",
//     backgroundImage: `url(${Background5})`
//   };

var listyle={
    listStyleType: `none`
}
function NumberList(props) {
    const listItems = numbers.map((number) =>
      <li>{number}</li>
    );
    return (
      <ul>
      <li style={sectionStyle1}> <h1>Hello, </h1></li>

      <li style={sectionStyle2}> <h1>Hello, </h1></li>
      
      <li style={sectionStyle3}> <h1>Hello, </h1></li>
      
      <li style={sectionStyle4}>  <h1>Hello, </h1></li>
      </ul>
    );
  }
  
  const numbers = [1, 2, 3, 4, 5];
  export default NumberList;