import React from "react";
import onlineIcon from "../../Icons/onlineIcon.png";

import "./infoBar.css";

const InfoBar = ({ room }) => {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img src={onlineIcon} className="onlineIcon" alt="online" />
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        <a href="/">X</a>
      </div>
    </div>
  );
};

export default InfoBar;
