import { useEffect, useState } from "react";

function Recent() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/api/apod/recent")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <h2 style={{ color: "white" }}>Loading...</h2>;

  return (
    <div style={{ backgroundColor: "#111", color: "white", minHeight: "100vh", padding: "20px" }}>
      <h1 style={{ fontSize: "2.5rem", textAlign: "center", marginBottom: "20px" }}>
        Recent APOD Gallery
      </h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "20px",
        maxWidth: "1200px",
        margin: "auto"
      }}>
        {items.map((item) => (
          <div key={item.date}
            style={{
              background: "#222",
              padding: "15px",
              borderRadius: "10px",
              boxShadow: "0 0 10px #0008",
              textAlign: "center"
            }}
          >
            <h3>{item.title}</h3>
            {item.media_type === "image" ? (
              <img src={item.url} alt={item.title} style={{ width: "100%", borderRadius: "8px" }} />
            ) : (
              <iframe
                src={item.url}
                title={item.title}
                style={{ width: "100%", height: "200px", borderRadius: "8px" }}
                allowFullScreen
              ></iframe>
            )}

            <p style={{ fontSize: ".9rem", marginTop: "10px" }}>{item.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recent;
