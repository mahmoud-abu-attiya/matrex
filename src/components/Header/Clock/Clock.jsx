import React from "react";
import "./Clock.scss";
import logo from "../../../images/MATREX-logo.png"

const Clock = () => {
  return (
    <div id="watch">
      <div className="frame-face"></div>
      <ul className="minute-marks">
        {Array(48)
          .fill(" ")
          .map((li) => {
            return <li></li>;
          })}
      </ul>
      <div className="digital-wrap">
        <img src={logo} alt="matrex" />
      </div>
      <ul className="digits">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
      </ul>
      <ul>
      </ul>
      <div className="hours-hand"></div>
      <div className="minutes-hand"></div>
      <div className="seconds-hand"></div>
    </div>
    
  );
};

export default Clock;
