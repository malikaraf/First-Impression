"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Aboveheader from "@/sections/aboveheader/aboveheader";
import Hero from "@/sections/hero/hero";
import Secondsection from "../secondsection/secondsection";
import Lastsection from "@/sections/lastsection/lastsection";
import { MotionStyle } from "framer-motion";

const fullscreen: MotionStyle = {
  position: "absolute",
  inset: "0px", // Ensure the unit is explicitly set
};

export default function Neweffect() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isButtonHovered, setIsButtonHovered] = useState(false); // Tracks button hover state

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <motion.div layout style={isLoaded ? {} : fullscreen as MotionStyle}>

      {!isLoaded && (
        <div
          onMouseMove={handleMouseMove}
          style={{
            ...fullscreen,
            backgroundColor: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "none",
            color: "white",
            overflow: "hidden",
          }}
        >
          {/* Custom pointer */}
          <motion.div
            className="custom-pointer"
            style={{
              position: "absolute",
              top: mousePosition.y,
              left: mousePosition.x,
              pointerEvents: "none",
              transform: "translate(-50%, -50%)",
              justifyContent: "center",
              fontSize: "15px",
              color: "white",
            }}
            animate={{}}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            {!isButtonHovered &&
              "The website is still not responsive because I complicated the designs too much (don't @ me)"}
          </motion.div>

          {/* Enter Button */}
          <motion.button
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.7 }}
            whileTap={{ scale: 0.9 }}
            onMouseEnter={() => setIsButtonHovered(true)} // Sets hover state
            onMouseLeave={() => setIsButtonHovered(false)} // Resets hover state
            onClick={() => setIsLoaded(true)}
            style={{
              backgroundColor: "white",
              color: "black",
              padding: "10px 20px",
              fontSize: "16px",
              border: "2px solid black",
              transition: "transform 0.1s ease",
            }}
          >
            Enter
          </motion.button>
        </div>
      )}

      {isLoaded && (
        <div>
          <Secondsection />
          <Aboveheader />
          <Hero />
          {/* <Lastsection /> */}
        </div>
      )}
    </motion.div>
  );
}
