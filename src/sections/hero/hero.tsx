"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import AirlineStopsOutlinedIcon from '@mui/icons-material/AirlineStopsOutlined';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import { useEffect } from "react";





// Main Hero component
const Hero = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  


  const handleMouseEnter1 = () => setIsHovered1(true);
  const handleMouseLeave1 = () => setIsHovered1(false);

  const handleMouseEnter2 = () => setIsHovered2(true);
  const handleMouseLeave2 = () => setIsHovered2(false);

  const handleMouseEnter3 = () => setIsHovered3(true);
  const handleMouseLeave3 = () => setIsHovered3(false);

  const handleMouseEnter4 = () => setIsHovered4(true);
  const handleMouseLeave4 = () => setIsHovered4(false);

  //background inmages start to come

  const images = ["/new.jpg", "/new2.jpg", "/new3.jpg"]; // Add your image paths here
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, [images.length]);

  return (
    <div>
        <div style={{display:"flex", flexDirection:"row",  gap:"2rem"}}>
      
      <div style={{display:"flex", flexDirection:"column", gap:"2rem", paddingTop:"2rem", paddingLeft:"2rem"}}>
        <p><CodeOffIcon/></p>
    <p style={{ fontFamily: "Montserrat"}}></p>
    <p style={{fontSize:"2.2rem", fontFamily: "Montserrat" }}>Featured work</p>
    <div style={{display:"flex", flexDirection:"column", gap:"1.5rem"}}>
    <p
      style={{
        color: "#FC6C85",
        fontFamily: "EB Garamond",
        fontSize: isHovered1 ? "2.3rem" : "1.7rem",
        transition: "font-size 0.3s ease-in-out"
       // Change font size on hover
      }}
      onMouseEnter={handleMouseEnter1}
      onMouseLeave={handleMouseLeave1}
    >
      <AirlineStopsOutlinedIcon /> 70% increased revenue</p>
      <p
      style={{
        color: "black",
        fontFamily: "EB Garamond",
        fontSize: isHovered1 ? "2.3rem" : "1.7rem",
        transition: "font-size 0.3s ease-in-out"
       // Change font size on hover
      }}
      onMouseEnter={handleMouseEnter1}
      onMouseLeave={handleMouseLeave1}
    >BlairAnA</p>
      {/* second sequence */}
      <Box
          component="hr"
          sx={{
            width: isHovered1 ? "500px":"700px", // Initial width
            height: "4px",
            backgroundColor: "grey",
            transition: "width 0.9s ease", // Transition for smooth effect
  
            
          }}
        />
<p
      style={{
        color: "#FC6C85",
        fontFamily: "EB Garamond",
        fontSize: isHovered2 ? "2.3rem" : "1.7rem",
        transition: "font-size 0.3s ease-in-out"
       // Change font size on hover
      }}
      onMouseEnter={handleMouseEnter2}
      onMouseLeave={handleMouseLeave2}
    >
      <AirlineStopsOutlinedIcon style={{color:"black"}} /> 40% reduction in operational costs</p>
      <p
      style={{
        color: isHovered2 ? "lavender": "black",
        fontFamily: "EB Garamond",
        fontSize: isHovered2 ? "2.3rem" : "1.7rem",
        
        transition: "font-size 0.3s ease-in-out"
       // Change font size on hover
      }}
      onMouseEnter={handleMouseEnter2}
      onMouseLeave={handleMouseLeave2}
    >Walkstar</p>
      <Box
          component="hr"
          sx={{
            width: isHovered2? "500px": "700px", // Initial width
            height: "4px",
            backgroundColor: "grey",
            transition: "width 0.9s ease", // Transition for smooth effect
            
          }}
        />
        {/* third sequence STARTS */}
        <p
      style={{
        color: "#FC6C85",
        fontFamily: "EB Garamond",
        fontSize: isHovered3 ? "2.3rem" : "1.7rem",
        transition: "font-size 0.3s ease-in-out"
       // Change font size on hover
      }}
      onMouseEnter={handleMouseEnter3}
      onMouseLeave={handleMouseLeave3}
    >
      <AirlineStopsOutlinedIcon style={{color:"black"}} /> 85% improvement in project delivery</p>
      <p
      style={{
        color: isHovered3 ? "lavender": "black",
        fontFamily: "EB Garamond",
        fontSize: isHovered3 ? "2.3rem" : "1.7rem",
        
        transition: "font-size 0.3s ease-in-out"
       // Change font size on hover
      }}
      onMouseEnter={handleMouseEnter3}
      onMouseLeave={handleMouseLeave3}
    >Void</p>
      <Box
          component="hr"
          sx={{
            width: isHovered3?"500px":"700px", // Initial width
            height: "4px",
            backgroundColor: "grey",
            transition: "width 0.9s ease", // Transition for smooth effect
            
          }}
        />
        {/* fourth sequence starts */}
        <p
      style={{
        color: "#FC6C85",
        fontFamily: "EB Garamond",
        fontSize: isHovered4 ? "2.3rem" : "1.7rem",
        transition: "font-size 0.3s ease-in-out"
       // Change font size on hover
      }}
      onMouseEnter={handleMouseEnter4}
      onMouseLeave={handleMouseLeave4}
    >
      <AirlineStopsOutlinedIcon style={{color:"black"}} /> 50% growth in customer base</p>
      <p
      style={{
        color: isHovered4? "lavender": "black",
        fontFamily: "EB Garamond",
        fontSize: isHovered4 ? "2.3rem" : "1.7rem",
        
        transition: "font-size 0.3s ease-in-out"
       // Change font size on hover
      }}
      onMouseEnter={handleMouseEnter4}
      onMouseLeave={handleMouseLeave4}
    >Undertop</p>
      <Box
          component="hr"
          sx={{
            width: isHovered4?"500px":"700px", // Initial width
            height: "4px",
            backgroundColor: "grey",
            transition: "width 0.9s ease", // Transition for smooth effect
            
          }}
        />
       
      
        

    </div>

    
    
    
  </div>
     
 <div
  style={{
    fontFamily: "Montserrat",
    backgroundImage: `url(${images[currentImageIndex]})`,
    backgroundSize: "100%",
    backgroundPosition: "left center", // Positions the image on the right side
    backgroundRepeat:"no-repeat",
    color: "#FC6C85",
    overflow:"hidden",
    fontSize: "2.5rem",
    fontWeight: "bold",
    textAlign: "right", // Aligns text within the container
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding:"20rem",
    minHeight: "100vh",
    transition: "background-image 3s ease",  }}
>
  <p>Text or something idk</p>
  
</div>
{/* 2nd div starts here */}

 </div>
</div>

   
  );
};

export default Hero;
