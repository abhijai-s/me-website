import { useState, useRef } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    Nitrogen: "",
    Phosphorus: "",
    Potassium: "",
    Temperature: "",
    Humidity: "",
    pH: "",
    Rainfall: "",
  });

  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error state

  const formRef = useRef(null); // Reference for smooth scrolling

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Clear previous errors
    setResult(""); // Clear previous result

    try {
      const response = await fetch("https://crop-recommendation-backend-qbm7.onrender.com/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setResult(data.message);
      } else {
        setError(data.error || "Something went wrong!");
      }
    } catch (err) {
      setError("Failed to connect to the server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center" }}>
      {/* Header */}
      <header style={{ padding: "20px", background: "#fff", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}>
        <h1>Crop Recommender</h1>
      </header>

      {/* Hero Section */}
      <div style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        background: "linear-gradient(135deg, #6fcf97, #66d2ea)",
        color: "white",
        padding: "20px",
      }}>
        <h1>Grow the Best Crops</h1>
        <p>Using advanced technology to recommend the best crops for your land.</p>
        <button onClick={() => formRef.current.scrollIntoView({ behavior: "smooth" })}
          style={{
            padding: "15px 40px",
            fontSize: "1.2rem",
            fontWeight: "bold",
            borderRadius: "50px",
            background: "white",
            color: "#333",
            cursor: "pointer",
            border: "none"
          }}>
          Get Started
        </button>
      </div>

      {/* Form Section */}
      <div ref={formRef} style={{ padding: "50px", background: "#fff", textAlign: "center" }}>
        <h2>Input Your Details</h2>
        <form onSubmit={handleSubmit} style={{ maxWidth: "600px", margin: "auto" }}>
          <input type="number" name="Nitrogen" placeholder="Nitrogen Level" value={formData.Nitrogen} onChange={handleChange} required style={inputStyle} />
          <input type="number" name="Phosphorus" placeholder="Phosphorus Level" value={formData.Phosphorus} onChange={handleChange} required style={inputStyle} />
          <input type="number" name="Potassium" placeholder="Potassium Level" value={formData.Potassium} onChange={handleChange} required style={inputStyle} />
          <input type="number" name="Temperature" placeholder="Temperature (°C)" value={formData.Temperature} onChange={handleChange} required style={inputStyle} />
          <input type="number" name="Humidity" placeholder="Humidity (%)" value={formData.Humidity} onChange={handleChange} required style={inputStyle} />
          <input type="number" name="pH" placeholder="pH Level" value={formData.pH} onChange={handleChange} required style={inputStyle} />
          <input type="number" name="Rainfall" placeholder="Rainfall (mm)" value={formData.Rainfall} onChange={handleChange} required style={inputStyle} />
          <button type="submit" style={{
            padding: "15px 40px",
            fontSize: "1.2rem",
            fontWeight: "bold",
            background: "#6fcf97",
            color: "white",
            borderRadius: "50px",
            cursor: "pointer",
            border: "none",
          }}>
            {loading ? "Processing..." : "Submit"}
          </button>
        </form>

        {/* Display Result or Error */}
        {error && (
          <div style={{
            marginTop: "20px",
            padding: "20px",
            background: "#ff4d4d",
            color: "white",
            borderRadius: "8px"
          }}>
            <h3>Error:</h3>
            <p>{error}</p>
          </div>
        )}

        {result && (
          <div style={{
            marginTop: "20px",
            padding: "20px",
            background: "#6fcf97",
            color: "white",
            borderRadius: "8px"
          }}>
            <h3>Recommended Crop:</h3>
            <p>{result}</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer style={{ padding: "20px", background: "#333", color: "white" }}>
        <p>&copy; 2025 Crop Recommender | <a href="#" style={{ color: "#6fcf97" }}>Privacy Policy</a></p>
      </footer>
    </div>
  );
}

// Input Styling
const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  fontSize: "1rem",
  border: "1px solid #ccc",
  borderRadius: "5px",
};
