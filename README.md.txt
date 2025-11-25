
---

### ✅ **Final README 

````markdown
# 🚀 NASA APOD Explorer

A full-stack application that displays NASA’s **Astronomy Picture of the Day (APOD)** using a custom backend service and modern frontend UI.

---

## 📌 Tech Stack

### 🖥 Backend (API Service)
- Spring Boot
- RESTful Endpoints
- Caffeine Cache (response caching + expiry)
- Java 17
- Maven

### 💻 Frontend (UI Layer)
- React + Vite
- HTML, CSS, JavaScript

---

## 🛰 Features
- 🌍 Dashboard showing **today’s APOD**
- 📅 **Date Picker** to fetch APOD for any past date
- 🖼 **Recent APOD Gallery** (last 7 days)
- 📖 Detailed explanation for each image/video
- ⚡ Optimized with local caching
- 🔐 Secure handling of NASA API Key (not included in repository)

---

## ▶ How to Run Locally

### 1️⃣ Clone Repository
```bash
git clone https://github.com/DanishNabi01/nasa-apod-explorer.git
cd nasa-apod-explorer
````

### 2️⃣ Run Backend (Spring Boot)

```bash
cd backend
./mvnw spring-boot:run
```

Runs at: **[http://localhost:8080](http://localhost:8080)**

### 3️⃣ Run Frontend (React)

```bash
cd frontend
npm install
npm run dev
```

Runs at: **[http://localhost:5173](http://localhost:5173)**

---

## 📦 API Endpoints

| Method | Endpoint                | Description              |
| ------ | ----------------------- | ------------------------ |
| GET    | `/apod`                 | Today’s APOD             |
| GET    | `/apod?date=YYYY-MM-DD` | APOD for a specific date |
| GET    | `/apod/recent`          | Last 7 APOD items        |

---

## 🛡 API Key Security

Real NASA API key is **not committed**.

Ignored via `.gitignore`:

```
src/main/resources/application.properties
src/main/resources/application-local.properties
```

Example file provided:

```
application-example.properties
```

---

## 👨‍💻 Author

**Danish Nabi**
Full-Stack Developer | Spring Boot | React
GitHub: [https://github.com/DanishNabi01](https://github.com/DanishNabi01)

---



