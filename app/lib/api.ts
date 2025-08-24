
const API_KEY = "293b43dff37184548c2d6f1f00650b2b";
const BASE_URL = "https://api.themoviedb.org/3";

// Generic fetch helper
const fetchFromTMDB = async (endpoint: string, params: Record<string, string | number> = {}) => {
  const url = new URL(`${BASE_URL}${endpoint}`);
  url.searchParams.append("api_key", API_KEY);

  // Append additional query params
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, String(value));
  });

  const res = await fetch(url.toString());
  if (!res.ok) {
    throw new Error(`TMDB API error: ${res.statusText}`);
  }
  return res.json();
};

// API functions
export const getPopularMovies = (page: number = 1) => {
  return fetchFromTMDB("/movie/popular", { page });
};

export const getTopRatedMovies = (page: number = 1) => {
  return fetchFromTMDB("/movie/top_rated", { page });
};

export const getUpcomingMovies = (page: number = 1) => {
  return fetchFromTMDB("/movie/upcoming", { page });
};

export const searchMovies = (query: string, page: number = 1) => {
  return fetchFromTMDB("/search/movie", { query, page });
};

export const getMovieDetails = (id: number) => {
  return fetchFromTMDB(`/movie/${id}`);
};

export const getMovieCredits = (id: number) => {
  return fetchFromTMDB(`/movie/${id}/credits`);
};
