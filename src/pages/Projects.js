import { useEffect, useState } from "react";
import axios from "axios";
import bgImage from "../assets/zz.jpg";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/projects")
      .then((res) => {
        setProjects(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 style={{ color: "white" }}>Projects</h1>
      <p style={{ color: "white" }}>
        Here are projects from my database:
      </p>

      <div style={{ display: "grid", gap: "16px", maxWidth: "900px" }}>
        {projects.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "16px",
              backgroundColor: "rgba(255,255,255,0.9)",
            }}
          >
            <img
              src={p.image}
              alt={p.title}
              style={{
                width: "100%",
                maxHeight: "220px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "12px",
              }}
            />

            <h2>{p.title}</h2>
            <p>{p.description}</p>

            {p.link && (
              <a href={p.link} target="_blank" rel="noreferrer">
                View Live Website
              </a>
            )}

            <p><strong>{p.role}</strong></p>
            <p><strong>{p.outcome}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
}