import React from "react";
import onlineIcon from "../../Icons/onlineIcon.png";

import "./infoBar.css";

const InfoBar = () => {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img src={onlineIcon} className="onlineIcon" alt="online image" />
        <h3>roomName</h3>
      </div>
      <div className="rightInnerContainer">
        <a href="/">X</a>
      </div>
    </div>
  );
};

export default InfoBar;
