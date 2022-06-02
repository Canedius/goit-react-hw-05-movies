const axios = require('axios').default;
axios.defaults.baseURL = 'https://api.themoviedb.org/';
const KEY = "70c5c640dcd47438a9460ce1b8e1a5b1"
export async function getTrending(params) {
    try {
        const response = await axios.get(`/3/trending/movie/week?api_key=${KEY}`);
        return response.data.results;
      } catch (error) {
        console.error(error);
      } 
}
export async function getMovieDetails (id) {
  try {
      const response = await axios.get(`/3/movie/${id}?api_key=${KEY}`);
     
      return response.data;
    } catch (error) {
      console.error(error);
    } 
}
export async function getMovieCredits(id) {
  try {
      const response = await axios.get(`/3/movie/${id}/credits?api_key=${KEY}`);
      return response.data.cast;
    } catch (error) {
      console.error(error);
    } 
}
export async function getMovieReviews(id) {
  try {
      const response = await axios.get(`/3/movie/${id}/reviews?api_key=${KEY}`);
      return response.data.results;
    } catch (error) {
      console.error(error);
    } 
}
export async function getMovie(query) {
  
  
  try {
      const response = await axios.get(`/3/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`);
      if (!response.data.results.length > 0) {
       alert("Фильм не найден ")
       return
      }
      return response.data.results;
    } catch (error) {
      console.error(error);
    } 
}

