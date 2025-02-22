import { useState } from "react";

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://crop-recommendation-backend-qbm7.onrender.com/predict",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      }
    );

    const data = await response.text();
    setResult(data);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center" }}>
      <header style={{ padding: "20px", background: "#fff", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}>
        <h1>Crop Recommender</h1>
      </header>

      <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", background: "linear-gradient(135deg, #6fcf97, #66d2ea)", color: "white", padding: "20px" }}>
        <h1>Grow the Best Crops</h1>
        <p>Using advanced technology to recommend the best crops for your land.</p>
        <button onClick={() => document.getElementById("form-section").scrollIntoView({ behavior: "smooth" })} style={{ padding: "15px 40px", fontSize: "1.2rem", fontWeight: "bold", borderRadius: "50px", background: "white", color: "#333", cursor: "pointer", border: "none" }}>Get Started</button>
      </div>

      <div id="form-section" style={{ padding: "50px", background: "#fff", textAlign: "center" }}>
        <h2>Input Your Details</h2>
        <form onSubmit={handleSubmit} style={{ maxWidth: "600px", margin: "auto" }}>
          <input type="number" name="Nitrogen" placeholder="Nitrogen Level" value={formData.Nitrogen} onChange={handleChange} required style={inputStyle} />
          <input type="number" name="Phosphorus" placeholder="Phosphorus Level" value={formData.Phosphorus} onChange={handleChange} required style={inputStyle} />
          <input type="number" name="Potassium" placeholder="Potassium Level" value={formData.Potassium} onChange={handleChange} required style={inputStyle} />
          <input type="number" name="Temperature" placeholder="Temperature (°C)" value={formData.Temperature} onChange={handleChange} required style={inputStyle} />
          <input type="number" name="Humidity" placeholder="Humidity (%)" value={formData.Humidity} onChange={handleChange} required style={inputStyle} />
          <input type="number" name="pH" placeholder="pH Level" value={formData.pH} onChange={handleChange} required style={inputStyle} />
          <input type="number" name="Rainfall" placeholder="Rainfall (mm)" value={formData.Rainfall} onChange={handleChange} required style={inputStyle} />
          <button type="submit" style={{ padding: "15px 40px", fontSize: "1.2rem", fontWeight: "bold", background: "#6fcf97", color: "white", borderRadius: "50px", cursor: "pointer", border: "none" }}>Submit</button>
        </form>

        {result && (
          <div style={{ marginTop: "20px", padding: "20px", background: "#6fcf97", color: "white", borderRadius: "8px" }}>
            <h3>Recommended Crop:</h3>
            <p>{result}</p>
          </div>
        )}
      </div>

      <footer style={{ padding: "20px", background: "#333", color: "white" }}>
        <p>&copy; 2025 Crop Recommender | <a href="#" style={{ color: "#6fcf97" }}>Privacy Policy</a></p>
      </footer>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  fontSize: "1rem",
  border: "1px solid #ccc",
  borderRadius: "5px",
};
