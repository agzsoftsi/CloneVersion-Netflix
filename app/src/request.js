const API_KEY = "b21288c90600aa8cd37f83d4f6c326cc";


const requests = {
  fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=en=us&sort_by=popularity.desc`,
  fetchNetflixOriginals : `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&language=en=us`,
  fetchActionMovies : `/discover/movie?api_key=${API_KEY}&with_genres=28&sort_by=popularity.desc`,
  fetchAnimationMovies : `/discover/tv?api_key=${API_KEY}&with_genres=16&sort_by=popularity.desc`,
  fetchComedyMovies : `/discover/movie?api_key=${API_KEY}&with_genres=35&sort_by=popularity.desc`,
  fetchHorrorMovies : `/discover/movie?api_key=${API_KEY}&with_genres=27&sort_by=popularity.desc`,
  fetchRomanceMovies : `/discover/movie?api_key=${API_KEY}&with_genres=10749&sort_by=popularity.desc`,
  fetchAdventureMovies : `/discover/movie?api_key=${API_KEY}&with_genres=12&sort_by=popularity.desc`,
  fetchScienceFicMovies : `/discover/movie?api_key=${API_KEY}&with_genres=878&sort_by=popularity.desc`,
  
  fetch
}

export default requests;