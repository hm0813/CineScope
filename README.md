# CineScope

CineScope is a personalized movie recommendation system that suggests films based on your viewing history, preferences, and filters.  
Built with modern web technologies, it combines data-driven algorithms with a clean, responsive UI to deliver smart and interactive recommendations.

## Features
- Personalized movie recommendations
- Multi-user support
- Natural language filters (describe what kind of movies you want)
- Light/Dark mode UI
- Fast search with caching

## Tech Stack
- **Frontend**: React + TypeScript + Tailwind CSS
- **Backend**: Flask (Python)
- **Database**: Supabase (Postgres), MongoDB
- **Caching**: Redis
- **AI**: OpenAI GPT for natural-language filters

## Getting Started
```bash
# Frontend
cd frontend
npm install
npm run dev

# Backend
cd backend
python -m venv .venv
.venv\Scripts\activate   # Windows
pip install -r requirements.txt
flask run
