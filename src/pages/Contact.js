import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/bb.jpg"; // change to .png if needed

export default function Contact() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Contact form data:", formData);

    navigate("/");
  }

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
      <h1 style={{ color: "white" }}>Contact</h1>

      <div
        style={{
          marginBottom: "16px",
          backgroundColor: "rgba(255,255,255,0.85)",
          padding: "12px",
          borderRadius: "10px",
          maxWidth: "420px",
        }}
      >
        <p><strong>Email:</strong> Mikias733@gmail.com</p>
        <p><strong>Phone:</strong> 647-540-7287</p>
        <p><strong>Location:</strong> Toronto, ON</p>
      </div>

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "420px",
          backgroundColor: "rgba(255,255,255,0.9)",
          padding: "16px",
          borderRadius: "12px",
        }}
      >
        <div style={{ marginBottom: "10px" }}>
          <label>First Name</label><br />
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Last Name</label><br />
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Contact Number</label><br />
          <input
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Email Address</label><br />
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Message</label><br />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <button
          type="submit"
          style={{ padding: "10px 16px", cursor: "pointer" }}
        >
          Send
        </button>
      </form>
    </div>
  );
}
