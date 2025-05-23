import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";

const Advert = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "rgb(5, 83, 65)",
        width: "75%",
        paddingBottom: "30px",
        paddingTop: "30px",
        marginTop: "40px",
        marginLeft: "20%",
        position: "relative", // make it the reference for absolute children
        overflow: "hidden",
        borderRadius: "20px"
      }}
    >
      {/* Top-left image */}
      <img
    src="/images/meet.png"
    alt=""
    style={{
      position: "absolute",
      top: "-5rem",     // pushes part of the image up and outside
      left: "-5rem",    // pushes part of the image to the left
      height: "15rem",
      zIndex: 1,
    }}
  />

      {/* Text and button center content */}
      <div
        style={{
          paddingTop: "100px",
          textAlign: "center",
          position: "relative",
          zIndex: 2, // ensure it's above images
        }}
      >
        <h2 style={{ color: "white" }}>Build a beautiful gallery in minutes</h2>
        <p style={{ color: "white" }}>What are you waiting for?</p>
        <button
          style={{
            backgroundColor: isHovered ? "white" : "rgb(234, 179, 8)",
            borderRadius: "10px",
            color: "black",
            padding: "10px 20px",
            marginTop: "10px",
            border: "none",
            cursor: "pointer",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Get Envira Gallery Now <ArrowForwardIcon />
        </button>
      </div>

      {/* Bottom-right image */}
      <img
    src="/images/meettwo.png"
    alt=""
    style={{
      position: "absolute",
      bottom: "-5rem",
      right: "-5rem",
      height: "15rem",
      zIndex: 1,
    }}
  />
    </div>
  );
};

export default Advert;
