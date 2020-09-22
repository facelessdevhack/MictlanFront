import React, { useEffect, useRef } from "react";
import "../assets/css/backgroundvideo.scss";

const BackgroundVideo = (props) => {
  return (
    <video loop autoPlay muted id="cover-video">
      <source src={props.source} type="video/mp4"></source>
    </video>
  );
};

export default BackgroundVideo;
