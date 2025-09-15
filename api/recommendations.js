// api/recommendations.js
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');
  try {
    const movies = [
      { title: "Inception", year: 2010, rating: 8.8 },
      { title: "Interstellar", year: 2014, rating: 8.6 },
      { title: "The Dark Knight", year: 2008, rating: 9.0 }
    ];
    return res.status(200).json({ recommendations: movies });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Server error" });
  }
}
