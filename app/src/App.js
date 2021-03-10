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
    </div>
  );
}

export default App;
