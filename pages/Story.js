import Link from "next/link";
import Navbar from "./components/navbar.js";
import React, { useEffect, useRef } from "react";
import BackgroundVideo from "./components/backgroundvideo";
import "./assets/css/story.scss";
import { motion } from "framer-motion";

function Story() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      inital={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Navbar />
      <div id="storyvideo">
        <BackgroundVideo source="/assets/videos/projects_background_video.MOV" />
      </div>
      <div id="story-wrapper">
        <div id="story-title">
          <img id="horiline" src="/assets/images/horiline.png" />
          <p id="story-head">STORY</p>
          <p id="story-subline">VISUAL CONCEPT</p>
        </div>
        <div id="story-description">
          <p>
            The Spanish conquest of the Aztec Empire, also known as the Conquest
            of Mexico (1519–21),[6] was one of the primary events in the Spanish
            colonization of the Americas. There are multiple 16th-century
            narratives of the events by Spanish conquerors, their indigenous
            allies, and the defeated Aztecs. It was not solely a contest between
            a small contingent of Spaniards defeating the Aztec Empire but
            rather the creation of a coalition of Spanish invaders with
            tributaries to the Aztecs, and most especially the Aztecs'
            indigenous enemies and rivals.
          </p>
          <p>
            They combined forces to defeat the Mexica of Tenochtitlan over a
            two-year period. For the Spanish, the expedition to Mexico was part
            of a project of Spanish colonization of the New World after
            twenty-five years of permanent Spanish settlement and further
            exploration in the Caribbean
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Story;
