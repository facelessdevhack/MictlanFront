import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Header from "./components/Header";
import React, { useEffect, useRef } from "react";
import BackgroundVideo from "./components/backgroundvideo";
import "./assets/css/order.scss";
import Rimp from "rimp";
import { motion } from "framer-motion";

function Order() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      inital={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Header />
      <BackgroundVideo source="/assets/videos/menu_background_video.mp4" />
      <div id="order-wrapper">
        <div id="order-left" className="order-divs">
          <div id="order-heading">
            <img id="horiline" src="/assets/images/horiline.png" />
            <p id="order-head">ORDER</p>
            <p id="order-subline">PRODUCTS</p>
          </div>
          <div id="order-info">
            <h2>MICTLAN : ARCHAIC REVIVAL</h2>
            <p>
              A galaxy spanning adventure ng adven ng adven ng adven ng adven ng
              adven action A galaxy spanning adventure ng adven ng adven ng
              advenng advenng adven action A galaxy spanning adventure ng adven
              ng adven v ng advenng adven ng adven action ng adven ng adven v
              vng adven
            </p>
            <hr />
            <div id="order-platforms">
              <img src="/assets/images/horixbox.png" className="platforms" />
              <img
                id="ps5"
                src="/assets/images/ps5.svg"
                className="platforms"
              />
              <img src="/assets/images/windows10.svg" className="platforms" />
            </div>
          </div>
          <div id="preorder-or">
            <div>
              <button id="preorder-btn">PRE ORDER</button>
            </div>
            <div>
              <p id="preorder-or-p">
                $19.99<span>USD</span>
              </p>
            </div>
          </div>
          <div>
            <div id="payment-methods">
              <img id="cards" src="/assets/images/cards.svg" />
              <img
                src="/assets/images/paypal.svg"
                className="payment-methods"
              />
              <img
                id="btc"
                src="/assets/images/btc.svg"
                className="payment-methods"
              />
            </div>
            <p id="note">
              Note:
              <br />
              Your pre order helps our indie game studio to launch our game in
              the near future, in the event our game fails to be released all
              payments will be returned in full..
            </p>
          </div>
        </div>
        <div id="order-right" className="order-divs">
          <img src="/assets/images/gameart.png" id="gameart" />
        </div>
      </div>
    </motion.div>
  );
}

export default Order;
