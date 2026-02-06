import myPhoto from "../assets/myphoto.jpeg"; // your photo
import bgImage from "../assets/yy.jpg"; // background image

export default function About() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        color: "white",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1>About Me</h1>

      <img
        src={myPhoto}
        alt="Mikias"
        style={{
          width: "180px",
          borderRadius: "12px",
          border: "2px solid white",
        }}
      />

      <p>
        My name is Mikias Gifiom. I’m a Software Engineering Technology student
        at Centennial College.
      </p>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noreferrer"
        style={{ color: "#00ff66", fontWeight: "bold" }}
      >
        View / Download My Resume (PDF)
      </a>
    </div>
  );
}
