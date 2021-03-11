const API_KEY = "b21288c90600aa8cd37f83d4f6c326cc";


const requests = {
  fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=en=us&sort_by=popularity.desc`,
  fetchNetflixOriginals : `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&language=en=us`,
  fetchActionMovies : `/discover/movie?api_key=${API_KEY}&with_generes=28`,
  fetchAnimationMovies : `/discover/movie?api_key=${API_KEY}&with_generes=16`,
  fetchComedyMovies : `/discover/movie?api_key=${API_KEY}&with_generes=35`,
  fetchHorrorMovies : `/discover/movie?api_key=${API_KEY}&with_generes=27`,
  fetchRomanceMovies : `/discover/movie?api_key=${API_KEY}&with_generes=10749`,
  fetchAdventureMovies : `/discover/movie?api_key=${API_KEY}&with_generes=12`,
  fetchScienceFicMovies : `/discover/movie?api_key=${API_KEY}&with_generes=878`,
  fetchWarMovies : `/discover/movie?api_key=${API_KEY}&with_generes=10752`,  
  fetch
}

export default requests;