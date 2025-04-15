export async function fetchTrendingTV() {
    const res = await fetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`);
    if (!res.ok) throw new Error("Failed to fetch trending shows");
    const data = await res.json();
    return data.results.slice(0, 10); // top 10 shows
  }