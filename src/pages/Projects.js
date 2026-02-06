import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import bgImage from "../assets/zz.jpg"; // background image

export default function Projects() {
  const projects = [
    {
      title: "Project 1: MikiRentals Website",
      image: project1,
      description:
        "A responsive sports car rental website with multiple pages and clean layout.",
      link: "https://mikias2469.github.io/car-rental-website/",
      role: "Role: Built the pages, styling, and navigation.",
      outcome: "Outcome: A working multi-page site with a modern look.",
    },
    {
      title: "Project 2: Foodie Web App (Group Project)",
      image: project2,
      description:
        "A restaurant discovery and ordering app concept with user roles and ordering flow.",
      link: "#",
      role: "Role: Helped with requirements, user stories, and UI structure.",
      outcome: "Outcome: Completed project documentation and prototype pages.",
    },
    {
      title: "Project 3: Store Database System",
      image: project3,
      description:
        "A database system to register customer information and manage purchases.",
      link: "#",
      role: "Role: Designed tables and wrote queries for course labs.",
      outcome: "Outcome: Correct outputs and organized SQL files.",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 style={{ color: "white" }}>Projects</h1>
      <p style={{ color: "white" }}>Here are a few projects I’ve worked on:</p>

      <div style={{ display: "grid", gap: "16px", maxWidth: "900px" }}>
        {projects.map((p) => (
          <div
            key={p.title}
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "16px",
              backgroundColor: "rgba(255,255,255,0.9)", // makes text readable
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

            <h2 style={{ margin: "0 0 8px" }}>{p.title}</h2>
            <p style={{ margin: "0 0 8px" }}>{p.description}</p>

            {p.link !== "#" && (
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                style={{ display: "inline-block", marginBottom: "8px" }}
              >
                View Live Website
              </a>
            )}

            <p style={{ margin: "0 0 6px" }}>
              <strong>{p.role}</strong>
            </p>
            <p style={{ margin: 0 }}>
              <strong>{p.outcome}</strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
