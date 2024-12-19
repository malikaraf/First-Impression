import React from "react";
import Image from "next/image";

const Secondsection = () => {
  return (
    <div>
    <div
      style={{
        backgroundImage: "url('/background2.jpg')",
        minHeight: "100vh",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "13rem",
          color: "white",
          height: "100vh", // Full viewport height for centering vertically
          paddingLeft: "10%",
          fontSize: "3rem",
          fontFamily: "Montserrat",
          fontWeight: 400,
        }}
      >
        <div>
          <p
            style={{
              opacity: 0,
              animation: "fadeIn 2s ease-in forwards",
            }}
          >
            Unfinished but that's the point
          </p>
        </div>
  
        {/* Second paragraph container */}
        <div
          style={{
            alignSelf: "flex-end", // Positions this container to the right
            paddingRight: "10%", // Adjust this value to control how far from the right
          }}
        >
          <p
            style={{
              opacity: 0,
              animation: "fadeIn 2s ease-in forwards",
            }}
          >
            Design Fundamentals
          </p>
          
          {/* Button beneath the second paragraph */}
          <button
            style={{
              marginTop: "1rem", // Adds space between the paragraph and button
              padding: "0.5rem 1.5rem",
              animation: "fadeIn 2s ease-in forwards 1s", // Delay to appear after the paragraphs
              fontSize: "1.2rem",
              color: "white",
              backgroundColor: "black",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => ((e.target as HTMLButtonElement).style.backgroundColor = "white",((e.target as HTMLButtonElement)).style.color="black")}
            onMouseOut={(e) => ((e.target as HTMLButtonElement).style.backgroundColor = "black", ((e.target as HTMLButtonElement)).style.color="white")}
          >
            Learn More
          </button>
        </div>
  
        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }@media (max-width: 768px) {
    div {
      padding-left: 5%; // Reduce padding on smaller screens
    }

    p {
      font-size: 1rem; // Smaller font size
    }

    button {
      font-size: 0.9rem;
      padding: 0.4rem 1rem;
    }
  }

  @media (max-width: 480px) {
    div {
      gap: 8rem; // Reduce gaps further
    }

    p {
      font-size: 0.8rem;
    }

    button {
      font-size: 0.8rem;
      padding: 0.3rem 0.8rem;
    }
  }
        `}</style>
      </div>
    </div>
  </div>
  );
};

export default Secondsection;
