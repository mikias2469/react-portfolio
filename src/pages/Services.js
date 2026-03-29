import bgImage from "../assets/aa.jpg";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      desc: "I build clean, responsive websites using HTML, CSS, JavaScript, and React.",
      points: ["Responsive layout", "Multi-page navigation", "Clean UI"],
    },
    {
      title: "React Projects",
      desc: "I create simple React apps with routing, reusable components, and organized structure.",
      points: ["React Router", "Components", "Page routing"],
    },
    {
      title: "Database & SQL",
      desc: "I design tables and write SQL queries for labs and small systems.",
      points: ["ERD design", "Queries", "Data organization"],
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
      <div className="pageHeader">
        <h1 className="title" style={{ color: "white" }}>Services</h1>
        <p className="subtitle" style={{ color: "white" }}>
          What I can help with:
        </p>
      </div>

      <div className="grid">
        {services.map((s) => (
          <div
            key={s.title}
            className="card"
            style={{
              backgroundColor: "rgba(255,255,255,0.9)", // makes text readable
              borderRadius: "12px",
            }}
          >
            <div className="cardBody">
              <h2 className="cardTitle">{s.title}</h2>
              <p className="cardDesc">{s.desc}</p>

              <ul className="list">
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>

              <a className="btn" href="/contact">
                Contact me
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
