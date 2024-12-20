"use client";

import React from "react";
import { Box } from "@mui/material";

import { useState } from "react";

const Aboveheader = () => {
  const [text, setText] = useState("So then");
  const [text2, setText2] = useState("What is this");
  const [text3, setText3] = useState("It's an attempt")
  const [text4, setText4] = useState("At telling a story")

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "150px",
        height: "100vh",
        gap: "5rem",
        fontFamily: "'Roboto Mono', sans-serif",
        
      }}
    >
      <div>
        <p>hi, hello, hey</p>
        <Box
          component="hr"
          sx={{
            width: "50px", // Initial width
            height: "4px",
            backgroundColor: "grey",
            transition: "width 0.5s ease", // Transition for smooth effect
            "&:hover": {
              width: "150px", // Width on hover
            },
          }}
        />
      </div>
      <div>
        <p>no, this isn&apos;t any sort of portfolio</p>
        <Box
          component="hr"
          sx={{
            width: "50px", // Initial width
            height: "4px",
            backgroundColor: "grey",
            transition: "width 0.5s ease", // Transition for smooth effect
            "&:hover": {
              width: "350px", // Width on hover
            },
          }}
        />
      </div>
      <div>
        <p>maybe a design template</p>
        <Box
          component="hr"
          sx={{
            width: "50px", // Initial width
            height: "4px",
            backgroundColor: "grey",
            transition: "width 0.8s ease", // Transition for smooth effect
            "&:hover": {
              width: "350px", // Width on hover
            },
          }}
        />
        
      </div>
      <div>
        <p>at best, some sort of an idea to take an inspiration</p>
        <Box
          component="hr"
          sx={{
            width: "50px", // Initial width
            height: "4px",
            backgroundColor: "grey",
            transition: "width 0.9s ease", // Transition for smooth effect
            "&:hover": {
              width: "550px", // Width on hover
            },
          }}
        />
      </div>
      {/* starts the UI where the chat bubbles are shown */}
      <Box
  sx={{
    border: "0.5px ",
    borderRadius: "10px ",
    margin: "5px",
    padding: "10px",
    fontSize: "0.8rem",
    alignSelf: "center",
    backgroundColor:"white",
  
    color:"black",
    boxShadow: "3px 3px 1px grey", // Initial shadow
    transition: "width 0.3s linear, box-shadow 0.3s ease", // Smooth transition
    "&:hover": {
      width: "250px",
      boxShadow: "0 0 0 1", // Initial shadow
      transform: 'translateX(-100px)',
      transition: 'transform 1.5s ease-in-out',
          
      fontWeight:"bold",
  }}
}
>
  <p>{text}</p>
</Box>
<Box
onMouseLeave={()=>{setText2("What is this?")}}
  onMouseEnter={()=>{setText2("Lets's just say")}}
  
  sx={{
    border: "0.5px solid grey",
    borderRadius: "10px",
    margin: "5px",
    padding: "10px",
    fontSize: "0.8rem",
    alignSelf: "center",
    backgroundColor:"black",
    boxShadow:"3px 3px 1px grey"    , 
    color:"white",
    "&:hover": {
      width: "450px",
      transform: 'translateX(150px)',
  transition: 'transform 1.5s ease-in-out',
      
      fontWeight:"bold",
     }
  }}
>
  <p>{text2}</p>
</Box>
<Box
      onMouseEnter={()=>{setText("What is this?")}}
      onMouseLeave={()=>{setText("So then")}}
  sx={{
    border: "0.5px ",
    borderRadius: "10px ",
    margin: "5px",
    padding: "10px",
    fontSize: "0.8rem",
    alignSelf: "center",
    backgroundColor:"white",
  
    color:"black",
    boxShadow: "3px 3px 1px grey", // Initial shadow
    transition: "width 0.3s linear, box-shadow 0.3s ease", // Smooth transition
    "&:hover": {
      width: "250px",
      boxShadow: "0 0 0 1", // Initial shadow
      transform: 'translateX(-100px)',
      transition: 'transform 1.5s ease-in-out',
          
      fontWeight:"bold",}
  }}
>
  <p>{text3}</p>
</Box>
<Box

  
  sx={{
    border: "0.5px solid grey",
    borderRadius: "10px",
    margin: "5px",
    padding: "10px",
    fontSize: "0.8rem",
    alignSelf: "center",
    backgroundColor:"black",
    boxShadow:"3px 3px 1px grey"    , 
    color:"white",
    "&:hover": {
      width: "450px",
      transform: 'translateX(150px)',
  transition: 'transform 1.5s ease-in-out',
      
      fontWeight:"bold",
     }
  }}
>
  <p>{text4}</p>
</Box>
    </div>
  );
};

export default Aboveheader;
