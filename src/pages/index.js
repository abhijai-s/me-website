import Head from 'next/head';

export default function Home() {
  const scrollToForm = () => {
    document.querySelector('.form-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <title>Crop Recommendation System</title>
        <meta name="description" content="Using advanced technology to recommend the best crops for your land." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <style jsx>{`
        body {
          margin: 0;
          font-family: 'DM Sans', sans-serif;
          color: #333;
          background-color: #f6f6f6;
        }
        header {
          position: fixed;
          top: 0;
          width: 100%;
          background-color: #fff;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          z-index: 1000;
        }
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 20px;
        }
        .navbar a {
          text-decoration: none;
          color: #333;
          font-size: 1.2rem;
          font-weight: bold;
        }
        .hero {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #6fcf97, #66d2ea);
          color: white;
          text-align: center;
          padding: 20px;
        }
        .hero h1 {
          font-size: 3.5rem;
          font-weight: bold;
          margin: 0 0 20px;
          animation: fadeInDown 1s ease-in-out;
        }
        .hero p {
          font-size: 1.5rem;
          margin: 0 0 30px;
          animation: fadeInUp 1.5s ease-in-out;
        }
        .hero button {
          padding: 15px 40px;
          font-size: 1.2rem;
          font-weight: bold;
          border: none;
          border-radius: 50px;
          background-color: white;
          color: #333;
          cursor: pointer;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s, background-color 0.3s;
        }
        .hero button:hover {
          transform: scale(1.05);
          background-color: #eaeaea;
        }
        .form-section {
          padding: 80px 20px;
          text-align: center;
          background-color: #fff;
        }
        .form-section h2 {
          font-size: 2.5rem;
          margin-bottom: 40px;
          color: #333;
        }
        .form-section form {
          max-width: 800px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }
        .form-control {
          padding: 15px;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 8px;
        }
        .form-control:focus {
          border-color: #6fcf97;
          outline: none;
        }
        .form-section button {
          grid-column: span 2;
          padding: 15px;
          font-size: 1.2rem;
          font-weight: bold;
          background-color: #6fcf97;
          color: white;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .form-section button:hover {
          background-color: #57b783;
        }
        footer {
          padding: 20px;
          background-color: #333;
          color: white;
          text-align: center;
        }
        footer a {
          color: #6fcf97;
          text-decoration: none;
        }
      `}</style>
      <header>
        <div className="navbar">
          <a href="#">Crop Recommender</a>
          <a href="#">Contact</a>
        </div>
      </header>
      <div className="hero">
        <div>
          <h1>Grow the Best Crops</h1>
          <p>Using advanced technology to recommend the best crops for your land.</p>
          <button onClick={scrollToForm}>Get Started</button>
        </div>
      </div>
      <div className="form-section">
        <h2>Input Your Details</h2>
        <form action="/predict" method="POST">
          <input type="number" name="Nitrogen" className="form-control" placeholder="Nitrogen Level" required />
          <input type="number" name="Phosphorus" className="form-control" placeholder="Phosphorus Level" required />
          <input type="number" name="Potassium" className="form-control" placeholder="Potassium Level" required />
          <input type="number" name="Temperature" step="0.1" className="form-control" placeholder="Temperature (°C)" required />
          <input type="number" name="Humidity" step="0.1" className="form-control" placeholder="Humidity (%)" required />
          <input type="number" name="pH" step="0.1" className="form-control" placeholder="pH Level" required />
          <input type="number" name="Rainfall" step="0.1" className="form-control" placeholder="Rainfall (mm)" required />
          <button type="submit">Submit</button>
        </form>
      </div>
      <footer>
        <p>&copy; 2025 Crop Recommender | <a href="#">Privacy Policy</a></p>
      </footer>
    </>
  );
}
