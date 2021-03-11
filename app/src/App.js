import './App.css';
import requests from './request';
import Row from './Row';

function App() {
  return (
    <div className="App">
    <Row title="NETFLIX ORIGINALS"  fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow={true}
    />
    <Row title="Trending Now"  fetchUrl={requests.fetchTrending}/>
    <Row title="Top Rated"  fetchUrl={requests.fetchTopRated}/>
    <Row title="Action Movies"  fetchUrl={requests.fetchActionMovies}/>
    <Row title="Animation Movies"  fetchUrl={requests.fetchAnimationMovies}/>
    <Row title="Comedy Movies"  fetchUrl={requests.fetchComedyMovies}/>
    <Row title="Horror Movies"  fetchUrl={requests.fetchHorrorMovies}/>
    <Row title="Romance Movies"  fetchUrl={requests.fetchRomanceMovies}/>
    <Row title="Adventure Movies"  fetchUrl={requests.fetchAdventureMovies}/>
    <Row title="Science Fiction Movies"  fetchUrl={requests.fetchScienceFicMovies}/>
    

   
    </div>
  );
}

export default App;
