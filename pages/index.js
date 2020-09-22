import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Navbar from "./components/navbar.js";
import React, { useEffect, useRef } from "react";
import BackgroundVideo from "./components/backgroundvideo";
import "./assets/css/home.scss";
import Rimp from "rimp";
import { motion } from "framer-motion";

function Index(props) {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      inital={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Navbar />
      <BackgroundVideo source="/assets/videos/intro.mp4" />
      <div id="centerimgs">
        <img src="/assets/images/coming.png" id="coming" />
        <img src="/assets/images/mictlan.png" id="mictlan" />
        <img src="/assets/images/line.svg" id="line" />
        <p id="thegame">THE GAME</p>
      </div>
      <div id="form">
        <p>STAY INFORMED FOR OUR GAME UPDATES </p>
        <Rimp
          buttonValue={`SEND`}
          buttonStyles={`subbtn`}
          containerStyles={`newsletter__form`}
          completeMessage={`Thanks, we'll send you an email to confirm!`}
          mailChimpUrl="//url.us10.list-manage.com/subscribe/post?u=user&amp;id=list"
        />
      </div>
      <div id="kickstart">
        <a href="/">
          <img id="kickback" src="/assets/images/kickstart.png" />
          <p id="kicktext">KICKSTART</p>
          <img src="/assets/images/linebold.svg" id="kickline" />
        </a>
        <p id="kickdate">SEPTEMBER, 2020 LAUNCH</p>
        <div id="steamcontainer">
          <p id="kickwish">Add to wishlist available on</p>
          <a href="/">
            <img id="kicksteam" src="/assets/images/steam.png" />
          </a>
        </div>
      </div>
      <div id="footer">
        <div id="footer-left">
          <div id="footer-left-div">
            <p>META GAMES STUDIOS</p>
            <p>TOKYO, JAPAN</p>
          </div>
          <div>
            <img id="footerimg1" src="/assets/images/ps5.png" />
            <img id="footerimg2" src="/assets/images/xbox.png" />
            <img id="footerimg3" src="/assets/images/unreal.png" />
          </div>
        </div>
        <div id="footer-right">
          <div id="footer-right-div">
            <a href="/">
              <img src="/assets/images/latest.png" id="latest" />
              <p id="footer-latest-text">LATEST NEWS</p>
            </a>
          </div>
          <div id="footer-jap-div">
            <p id="footer-jap-text">日本</p>
            <img src="/assets/images/arrow-up.png" id="arrow-up" />
            <img src="/assets/images/arrow-down.png" id="arrow-down" />
            <img src="/assets/images/arrow-up.png" id="arrow-up2" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Index;
