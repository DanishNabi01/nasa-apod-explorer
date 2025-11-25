import { useEffect, useState } from "react";

function RecentGallery() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchRecent = async () => {
      try {
        const today = new Date();
        const results = [];

        for (let i = 0; i < 7; i++) {
          const date = new Date(today);
          date.setDate(today.getDate() - i);
          const formatted = date.toISOString().split("T")[0];

          const res = await fetch(`http://localhost:8080/api/apod?date=${formatted}`);
          const json = await res.json();
          results.push(json);
        }

        setItems(results);
      } catch (error) {
        console.error("Error loading images:", error);
      }
    };

    fetchRecent();
  }, []);

  return (
    <div style={{ padding: "20px", backgroundColor: "#111", color: "white" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Recent 7 Days APOD Gallery
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "15px",
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#222",
              padding: "10px",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <img
              src={item.url}
              alt={item.title}
              style={{ width: "100%", borderRadius: "6px" }}
            />
            <p style={{ marginTop: "8px", fontSize: "0.9rem" }}>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentGallery;
