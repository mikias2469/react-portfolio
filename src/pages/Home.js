import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/xx.jpg"; // change to xx.png if your file is png

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Dark overlay box for text */}
      <div
        style={{
          background: "rgba(0, 0, 0, 0.55)",
          color: "white",
          padding: "40px",
          borderRadius: "16px",
          marginLeft: "40px",
          maxWidth: "600px",
        }}
      >
        <h1>Welcome</h1>

        <p>
          Hi, I’m Mikias Gifom. I’m a Software Engineering student who enjoys
          building simple, clean web apps and solving problems with code.
        </p>

        <p>
          My goal is to keep improving my skills in React, JavaScript, and
          full-stack development, and build projects that people can actually use.
        </p>

        <Link to="/about">
          <button
            style={{
              marginTop: "16px",
              padding: "10px 18px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Learn more about me
          </button>
        </Link>
      </div>
    </div>
  );
}
