## 🔗 Live Demo
👉 [Click Here](https://cine-scope-five.vercel.app/)  

# 🎥 CineScope — Movie Recommendations & Profile Stats

CineScope is an enhanced movie recommendation system that provides tailored film suggestions using content-based filtering, along with detailed statistics about your viewing/rating habits. All you need is your Letterboxd username.

---

## 🧰 Technologies Used

- **Frontend**: React + TypeScript + Tailwind CSS  
- **Backend**: Python (Flask), Supabase (PostgreSQL), Redis, MongoDB  
- **Infrastructure / DevOps**: Vercel (frontend), Amazon Lightsail (backend), GitHub Actions  

---

## 🔍 Core Features

### Recommendations
- Input your Letterboxd username → get personalized movie recommendations based on your past ratings & movie metadata  
- Filters to narrow down by genre, release year, runtime, etc.  
- Multi-user recommendations: combine preferences of several users (e.g. for group watch)  

### Statistics
- Overview of how your ratings compare to Letterboxd community ratings  
- Genre-wise rating trends: see which genres you prefer or rate differently than average  
- Distribution insights: how often you rate, how “hard” or “easy” your ratings are compared to the crowd  

### Watchlist Picker
- Let CineScope pick movies from your Letterboxd watchlist  
- Random or “highest predicted rated first” mode  
- Support for combining watchlists of multiple users  

---

## 🛠 How to Run Locally

1. Clone this repo  
   ```bash
   git clone https://github.com/YOUR-USERNAME/CineScope.git
   cd CineScope
Set up backend

Install Python dependencies (requirements.txt)

Configure env variables / database (PostgreSQL/Supabase, Redis, MongoDB)

Set up frontend

Install Node.js / npm packages

Adjust any environment or API URLs

Start services

bash
Copy code
# Backend
python app.py  
# Frontend
npm run dev
(Optional) Deploy using your preferred hosting – for example, Vercel / AWS / Netlify for frontend; Lightsail / DigitalOcean / Heroku for backend.

🚧 Limitations & What’s Next
Resources are limited — database size, server specs, etc., may affect performance

Some filters or model improvements are experimental or partially implemented

Next up: faster scraping / caching, more sophisticated recommendation models (e.g. two-tower, hybrid), better UX

💡 Inspiration
This project was inspired by wanting more than what static community ratings offer — to build something personalized, using movie metadata (genre, runtime, year, etc.), and data you already generate via Letterboxd.

