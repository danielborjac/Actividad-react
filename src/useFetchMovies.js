import { useState, useEffect } from "react";
import axios from "axios";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "65c2dc0c33d7fee639d5bc8e814e0151";

function useFetchMovies(endpoint, trigger = true) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!trigger) return;
    setLoading(true);
    const url = endpoint.includes("?")
      ? `${API_BASE_URL}${endpoint}&api_key=${API_KEY}`
      : `${API_BASE_URL}${endpoint}?api_key=${API_KEY}`;
    axios
      .get(url)
      .then((response) => {
        setData(response.data.results || response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [endpoint, trigger]);

  return { data, loading, error };
}

export default useFetchMovies;

