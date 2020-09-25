//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

// Change color depending on
const date = new Date();
//const date = new Date(2020, 8, 25, 19);
const hours = date.getHours();
let timeOfDay;
let color;

if (hours < 12) {
  timeOfDay = "Morning";
  color = "red";
}
if (hours >= 12 && hours < 18) {
  timeOfDay = "Afternoon";
  color = "green";
}
if (hours >= 18) {
  timeOfDay = "Evening";
  color = "blue";
}
const colorStyle = {
  color: color
};

ReactDOM.render(
  <h1 className="heading" style={colorStyle}>
    Good {timeOfDay}
  </h1>,
  document.getElementById("root")
);
