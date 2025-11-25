import { useEffect, useState } from "react";

function Apod() {
  const [apod, setApod] = useState(null);
  const [date, setDate] = useState("");       // YYYY-MM-DD
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchApod = async (selectedDate = "") => {
    try {
      setLoading(true);
      setError("");

      let url = "http://localhost:8080/api/apod";
      if (selectedDate) {
        url += `?date=${selectedDate}`;
      }

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch APOD");
      }

      const data = await response.json();
      setApod(data);
    } catch (err) {
      console.error(err);
      setError("Could not load APOD. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // load today's APOD on first render
  useEffect(() => {
    fetchApod();
  }, []);

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;  // YYYY-MM-DD
    setDate(selectedDate);
    fetchApod(selectedDate);
  };

  if (loading) return <h2 style={{ color: "white" }}>Loading...</h2>;
  if (error) return <h2 style={{ color: "red" }}>{error}</h2>;
  if (!apod) return null;

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#111",
        color: "white",
        padding: "20px",
        textAlign: "center",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>{apod.title}</h1>

      {/* Date Picker */}
      <div style={{ marginBottom: "20px" }}>
        <label style={{ marginRight: "10px", fontSize: "1.1rem" }}>
          Select Date:
        </label>
        <input
          type="date"
          value={date}
          onChange={handleDateChange}
          style={{
            padding: "6px 10px",
            borderRadius: "4px",
            border: "1px solid #555",
            backgroundColor: "#222",
            color: "white",
          }}
        />
      </div>

      {/* Image / Video */}
      {apod.media_type === "image" ? (
        <img
          src={apod.url}
          alt={apod.title}
          style={{ maxWidth: "90%", borderRadius: "8px" }}
        />
      ) : (
        <iframe
          title={apod.title}
          src={apod.url}
          frameBorder="0"
          allow="encrypted-media"
          allowFullScreen
          style={{ width: "90%", height: "500px", borderRadius: "8px" }}
        ></iframe>
      )}

      <p
        style={{
          maxWidth: "900px",
          margin: "30px auto",
          lineHeight: 1.6,
          fontSize: "1.1rem",
          textAlign: "justify",
        }}
      >
        {apod.explanation}
      </p>
    </div>
  );
}

export default Apod;
